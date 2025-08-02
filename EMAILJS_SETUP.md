# Configuração do EmailJS para Envio de Emails

Este guia explica como configurar o EmailJS para enviar emails automaticamente quando alguém preencher o formulário de contato.

## Passo a Passo

### 1. Criar conta no EmailJS
1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Faça login na sua conta

### 2. Configurar Email Service
1. No dashboard, vá em "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Siga as instruções para conectar sua conta de email
5. Anote o **Service ID** gerado

### 3. Criar Email Template
1. Vá em "Email Templates"
2. Clique em "Create New Template"
3. Configure o template com o seguinte conteúdo:

**Assunto:**
```
Novo contato do site Harmonia
```

**Conteúdo:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Novo Contato - Harmonia</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2563eb;">Novo contato recebido!</h2>
        
        <p>Olá {{to_name}},</p>
        
        <p>Você recebeu um novo contato através do site Harmonia:</p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Informações do Contato:</h3>
            
            <pre style="font-family: Arial, sans-serif; white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb; margin: 0;">{{full_message}}</pre>
        </div>
        
        <p>Para responder, clique em "Responder" no seu cliente de email.</p>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="font-size: 12px; color: #666;">
            Este email foi enviado automaticamente pelo formulário de contato do site Harmonia.
        </p>
    </div>
</body>
</html>
```

4. Salve o template e anote o **Template ID**

### 4. Obter User ID
1. No dashboard, vá em "Account" → "API Keys"
2. Copie seu **User ID**

### 5. Configurar no Projeto
1. Abra o arquivo `src/config/emailjs.ts`
2. Substitua as chaves pelas suas:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'seu_service_id_aqui',
  TEMPLATE_ID: 'seu_template_id_aqui',
  USER_ID: 'seu_user_id_aqui'
};
```

### 6. Testar
1. Execute o projeto: `npm run dev`
2. Vá até a seção de contato
3. Preencha o formulário e envie
4. Verifique se o email foi recebido

## Limites Gratuitos

Com a conta gratuita do EmailJS, você tem:
- 200 emails por mês
- 2 Email Services
- Templates ilimitados

## Solução de Problemas

### Email não está sendo enviado
1. Verifique se todas as chaves estão corretas
2. Confirme se o Email Service está ativo
3. Verifique o console do navegador para erros

### Template não está funcionando
1. Verifique se as variáveis no template correspondem aos parâmetros enviados
2. Teste o template no dashboard do EmailJS

### Erro de CORS
1. Certifique-se de que está usando HTTPS em produção
2. Configure domínios permitidos no dashboard do EmailJS

## Alternativas Gratuitas

Se o EmailJS não atender suas necessidades, considere:

1. **Formspree** - Formulários simples
2. **Netlify Forms** - Se hospedar no Netlify
3. **Google Forms** - Integração com Google Sheets
4. **Web3Forms** - Alternativa open source

## Segurança

- Nunca exponha suas chaves do EmailJS no código cliente
- Use variáveis de ambiente em produção
- Configure domínios permitidos no EmailJS
- Monitore o uso para evitar exceder os limites gratuitos 