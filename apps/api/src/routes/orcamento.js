import logger from '../utils/logger.js';

// ============================================================
//  ROTA DE ORÇAMENTO (LEAD)
//  Recebe o formulário do site e encaminha o lead para o
//  Webhook do n8n (automação de WhatsApp / e-mail).
//
//  Configuração desacoplada via variáveis de ambiente
//  (ver apps/api/.env.example):
//    - N8N_WEBHOOK_URL  -> URL do webhook do n8n
//
//  Envio de e-mail (Nodemailer/SMTP) deve ser feito pelo
//  próprio fluxo n8n, mantendo o backend simples e desacoplado.
// ============================================================

const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

export default async (req, res) => {
  const { nome, telefone, email, tipo, mensagem, utm } = req.body || {};

  // Validação de entrada (400/422 é permitido para input inválido)
  if (!nome || !String(nome).trim()) {
    return res.status(422).json({ error: 'O campo nome é obrigatório.' });
  }
  if (!telefone || String(telefone).replace(/\D/g, '').length < 10) {
    return res.status(422).json({ error: 'Informe um telefone/WhatsApp válido.' });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))) {
    return res.status(422).json({ error: 'E-mail inválido.' });
  }

  const lead = {
    nome: String(nome).trim(),
    telefone: String(telefone).trim(),
    email: email ? String(email).trim() : '',
    tipo: tipo || 'Não informado',
    mensagem: mensagem ? String(mensagem).trim() : '',
    utm: utm || {},
    recebidoEm: new Date().toISOString(),
  };

  logger.info(`Novo lead de orçamento: ${lead.nome} · ${lead.telefone} · ${lead.tipo}`);

  // Encaminha para o n8n, se configurado. Integração opcional/desacoplada:
  // se a URL não estiver definida, o lead ainda é aceito (fica no log).
  if (N8N_WEBHOOK_URL) {
    const upstream = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    });
    if (!upstream.ok) {
      throw new Error(
        `n8n webhook falhou: ${upstream.status} ${upstream.statusText}`,
      );
    }
  } else {
    logger.warn('N8N_WEBHOOK_URL não configurada — lead registrado apenas no log.');
  }

  res.json({ ok: true, message: 'Solicitação recebida com sucesso.' });
};
