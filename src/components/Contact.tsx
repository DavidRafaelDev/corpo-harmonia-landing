import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';
import { EMAILJS_CONFIG } from '@/config/emailjs';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação simples
    if (!formData.name || !formData.company || !formData.email) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, empresa e e-mail.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
    
      const message = `Nome: ${formData.name}
      Empresa: ${formData.company}
      Cargo: ${formData.role || 'Não informado'}
      Telefone: ${formData.phone || 'Não informado'}
      E-mail: ${formData.email}      
      Mensagem:
      ${formData.message || 'Nenhuma mensagem adicional'}
              `.trim();

      console.log('message', message);
      // Configuração do EmailJS
      const templateParams = {
        to_name: "Equipe Harmonia",
        from_name: formData.name,
        from_company: formData.company,
        from_role: formData.role,
        from_phone: formData.phone,
        from_email: formData.email,
        message: message,
        reply_to: formData.email,
        // Mensagem completa com todos os dados
        full_message: `
Nome: ${formData.name}
Empresa: ${formData.company}
Cargo: ${formData.role || 'Não informado'}
Telefone: ${formData.phone || 'Não informado'}
E-mail: ${formData.email}

Mensagem:
${formData.message || 'Nenhuma mensagem adicional'}
        `.trim()
      };

      // Enviar email usando EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.USER_ID
      );


      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em até 24 horas.",
      });

      // Limpar formulário
      setFormData({
        name: '',
        company: '',
        role: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Erro detalhado ao enviar email:', error);
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Vamos conversar sobre bem-estar na sua <span className="text-primary">empresa</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agende uma conversa gratuita e descubra como podemos transformar 
            o ambiente de trabalho da sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-card border-0 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Solicitar contato
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Empresa *
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Nome da sua empresa"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Cargo
                    </label>
                    <Input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="Seu cargo na empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre sua empresa e como podemos ajudar..."
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full btn-hero text-lg py-6" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Enviar mensagem
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="bg-gradient-card border-0 shadow-soft">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Entre em contato conosco
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Telefone</h4>
                      <p className="text-muted-foreground">(13) 99697-3231</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10">
                      <Mail className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">E-mail</h4>
                      <p className="text-muted-foreground">harmonia.corporativo@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Next Steps */}
            <Card className="bg-gradient-primary text-primary-foreground border-0 shadow-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  Próximos passos
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-foreground/20 text-sm font-bold">
                      1
                    </div>
                    <p className="text-sm opacity-90">
                      Análise das necessidades da sua empresa
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-foreground/20 text-sm font-bold">
                      2
                    </div>
                    <p className="text-sm opacity-90">
                      Proposta personalizada e cronograma
                    </p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-foreground/20 text-sm font-bold">
                      3
                    </div>
                    <p className="text-sm opacity-90">
                      Implementação e acompanhamento contínuo
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;