// Configuração do EmailJS
// Para configurar, acesse: https://www.emailjs.com/
// 1. Crie uma conta gratuita
// 2. Configure um Email Service (Gmail, Outlook, etc.)
// 3. Crie um Email Template
// 4. Substitua as chaves abaixo pelas suas

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  USER_ID: import.meta.env.VITE_EMAILJS_USER_ID || 'YOUR_USER_ID'
};
// Para usar variáveis de ambiente, crie um arquivo .env na raiz do projeto:
/*
VITE_EMAILJS_SERVICE_ID=seu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=seu_template_id_aqui
VITE_EMAILJS_USER_ID=seu_user_id_aqui
*/

// Template de exemplo para o EmailJS:
/*
Assunto: Novo contato do site Harmonia

Olá {{to_name}},

Você recebeu um novo contato através do site Harmonia:

{{full_message}}

Para responder, clique em "Responder" no seu cliente de email.

---
Este email foi enviado automaticamente pelo formulário de contato do site Harmonia.
*/ 