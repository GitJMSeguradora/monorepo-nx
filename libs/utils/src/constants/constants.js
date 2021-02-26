export const USER_SESSION = "userId";
export const USER_CHAT = "user-chat";
export const USER_ACCESS_COOKIE = "uac";
export const PIN = "pin";
export const SUPER_USER_ACCESS_COOKIE = "suac";
export const LOGOUT = "logout";

export const PRIVACY_POLICY = "politica-de-privacidade";
export const PLATFORM_RESPONSIBILITY_TERM = "termo-de-responsabilidade-plataforma";

export const USER_TYPE = {
  policyholder: "Tomador",
  broker: "Corretor",
  commercial: "Comercial"
};

export const PROCESS_STATUS = {
  quoteIncomplete: {
    id: 1,
    groupId: 1,
    groupName: "inProgress",
    title: "EM ABERTO",
    desc: "Incompleta",
    type: "quote"
  },
  quoteOpen: {
    id: 2,
    groupId: 1,
    groupName: "inProgress",
    title: "EM ABERTO",
    desc: "Em Aberto",
    type: "quote"
  },
  policyCompleted: {
    id: 3,
    groupId: 2,
    groupName: "policyIssued",
    title: "APÓLICE VIGENTE",
    desc: "Concluída",
    type: "policy"
  },
  quoteCanceled: {
    id: 4,
    groupId: 3,
    groupName: "canceled",
    title: "CANCELADA",
    desc: "Cotação Cancelada",
    type: "quote"
  },
  policyEmitting: {
    id: 5,
    groupId: 4,
    groupName: "underAnalysis",
    title: "EM ANÁLISE",
    desc: "Apólice em processo de emissão",
    type: "policy"
  },
  policyAnalysing: {
    id: 6,
    groupId: 4,
    groupName: "underAnalysis",
    title: "EM ANÁLISE",
    desc: "Apólice em processo de análise",
    type: "policy"
  },
  policyWaitingDocuments: {
    id: 7,
    groupId: 4,
    groupName: "underAnalysis",
    title: "EM ANÁLISE",
    desc: "Aguardando envio de Documentação",
    type: "policy"
  },
  policyAnalysingDocuments: {
    id: 8,
    groupId: 4,
    groupName: "underAnalysis",
    title: "EM ANÁLISE",
    desc: "Analisando Documentos Recebidos",
    type: "policy"
  },
  policyInternalAnalysis: {
    id: 9,
    groupId: 4,
    groupName: "underAnalysis",
    title: "EM ANÁLISE",
    desc: "Processo em análise Interna",
    type: "policy"
  },
  policyWaitingPendencies: {
    id: 10,
    groupId: 4,
    groupName: "underAnalysis",
    title: "EM ANÁLISE",
    desc: "Aguardando regularização de Pendências",
    type: "policy"
  },
  policyNotApproved: {
    id: 11,
    groupId: 3,
    groupName: "canceled",
    title: "CANCELADA",
    desc: "Processo não aprovado",
    type: "policy"
  },
  policyCanceled: {
    id: 12,
    groupId: 3,
    groupName: "canceled",
    title: "CANCELADA",
    desc: "Processo cancelado",
    type: "policy"
  },
  policyDuePayment: {
    id: 13,
    groupId: 5,
    groupName: "renew",
    title: "A VENCER",
    desc: "A vencer",
    type: "policy"
  },
  policyOverduePayment: {
    id: 14,
    groupId: 5,
    groupName: "renew",
    title: "VENCIDA",
    desc: "Vencida",
    type: "policy"
  },
  quoteWaitingApproval: {
    id: 15,
    groupId: 6,
    groupName: "waiting",
    title: "AGUARDANDO APROVAÇÃO",
    desc: "Aguardando aprovação",
    type: "quote"
  },
  processing: {
    id: 16,
    groupId: 7,
    groupName: "processing",
    title: "PROCESSANDO",
    desc: "Processando",
    type: "quote"
  }
};

export const BONUS_PAYMENT_STATUS = {
  Paid: "isPaid",
  Available: "isAvailable",
  Unavailable: "isUnavailable"
};

export const ERROR_MESSAGES = {
  400: "Houve um problema com sua requisição. Tente novamente.",
  401: "Não foi possível executar esta operação.",
  403: "Dados de acesso inválidos.",
  404: "Nenhuma informação foi encontrada.",
  500: "Houve algum problema com os nossos serviços. Por favor, contate o suporte.",
  503: "Estamos com alguma instabilidade nos nossos serviços. Por favor, tente novamente em instantes."
};

export const ManualUrlCancellationWithRefund = 'https://static.juntoseguros.com/folders/manual_cancelamento.pdf';