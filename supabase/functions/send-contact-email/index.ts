
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const smtpClient = new SMTPClient({
  connection: {
    hostname: "smtp.hostinger.com",
    port: 465,
    tls: true,
    auth: {
      username: Deno.env.get("EMAIL_USER") || "",
      password: Deno.env.get("EMAIL_PASS") || "",
    },
  },
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface SendEmailRequest {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  destinatario?: string;
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Método não permitido" }), {
      status: 405,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }

  try {
    const { name, email, phone, service, message, destinatario }: SendEmailRequest = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Nome, email e mensagem são obrigatórios." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const toAddress = destinatario || "edinho@esinformatica.com.br";

    const html = `
      <h2>📩 Nova Solicitação de Orçamento - ES Informática</h2>
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; font-family: Arial, sans-serif;">
        <h3>Dados do Cliente:</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Telefone:</strong> ${phone || 'Não informado'}</p>
        <p><strong>Serviço de Interesse:</strong> ${service || 'Não especificado'}</p>
        
        <h3>Mensagem:</h3>
        <div style="background-color: white; padding: 15px; border-left: 4px solid #dc2626; margin: 10px 0;">
          ${(message || "").replace(/\n/g, "<br>")}
        </div>
        
        <hr style="margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">
          <em>Enviado através do formulário de contato do site ES Informática</em><br>
          <em>Data: ${new Date().toLocaleString('pt-BR')}</em>
        </p>
      </div>
    `;

    try {
      await smtpClient.send({
        from: `ES Informática - Site <${Deno.env.get("EMAIL_USER")}>`,
        to: toAddress,
        subject: `Nova Solicitação de Orçamento - ${name}`,
        html,
        replyTo: email,
      });

      console.log("Email de orçamento enviado com sucesso via SMTP Hostinger");
    } catch (smtpError) {
      console.error("Erro ao enviar e-mail (SMTP):", smtpError);
      return new Response(
        JSON.stringify({ error: "Falha ao enviar o e-mail. Tente novamente." }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    return new Response(JSON.stringify({ 
      message: "✅ Solicitação de orçamento enviada com sucesso!",
      details: "Entraremos em contato em breve."
    }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (err: any) {
    console.error("Erro na função send-contact-email:", err);
    return new Response(
      JSON.stringify({ error: "Erro interno ao processar a solicitação." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
