const api = {
  Manager: [
    {
      name: "WSAssessoria",
      uri: "api/manager/wsassessoria",
      description:
        "Serviço SOAP WSAssessorias para permitir a manutenção dos dados de cobrança entre credor e Assessorias",
    },
    {
      name: "WSAssessoria Internacional",
      uri: "api/manager/wsassessoriainternacional",
      description:
        "Serviço SOAP WSAssessorias para permitir a manutenção dos dados de cobrança entre credor e Assessorias",
    },
    {
      name: "Siscobra WS",
      uri: "api/manager/siscobraws",
      description: "Serviço SOAP SiscobraWS para portal de autonegociações",
    },
    {
      name: "WSLote",
      uri: "api/manager/wslote",
      description: "Importação de Remessa via Rest",
    },
    {
      name: "WS Usuário",
      uri: "api/manager/wsusuario",
      description: "Integração com a API para gestão de usuário",
    },
    {
      name: "WS Fraude",
      uri: "api/manager/wsfraude",
      description: "API para gerenciamento de fraudes",
    },
  ],
  Evolution: [
    {
      name: "Siscobra WS",
      uri: "api/evolution/siscobraws",
      description: "Serviço SOAP SiscobraWS para portal de autonegociações",
    },
    {
      name: "Boleto API",
      uri: "api/evolution/boletoapi",
      description: "Integração via API para geração de boletos",
    },
    {
      name: "Siscobra API",
      uri: "api/evolution/siscobraapi",
      description: "Integração disponíveis no WebService da Siscobra",
    },
  ],
  Pay: [
    {
      name: "Pay Boleto",
      uri: "api/pay/payboleto",
      description: "Integração via API com a plataforma Pay Boleto",
    },
    {
      name: "Pay Cartão",
      uri: "api/pay/paycartao",
      description: "Integração via API com a plataforma Pay Cartão",
    },
  ],
};

const database = [
  {
    name: "Manager",
    uri: "database/manager/",
    description: "Documentação de Banco de Dados - Siscobra Manager",
  },
  {
    name: "Evolution",
    uri: "database/evolution/",
    description: "Documentação de Banco de Dados - Siscobra Evolution",
  },
  {
    name: "Smart",
    uri: "database/smart/",
    description: "Documentação de Banco de Dados - Siscobra Smart",
  },
  {
    name: "Developer",
    uri: "database/developer/",
    description: "Documentação de Banco de Dados - Siscobra Developer",
  },
  {
    name: "Flow",
    uri: "database/flow/",
    description: "Documentação de Banco de Dados - Siscobra Flow",
  },
  {
    name: "Plus",
    uri: "database/plus/",
    description: "Documentação de Banco de Dados - Siscobra Plus",
  },
  {
    name: "Pay Boleto",
    uri: "database/pay_boleto/",
    description: "Documentação de Banco de Dados - Siscobra Pay Boleto",
  },
  {
    name: "Pay Cartão",
    uri: "database/pay_cartao/",
    description: "Documentação de Banco de Dados - Siscobra Pay Cartão",
  },
];

const libs = [
  {
    name: "Siscobra Jar",
    uri: "lib/siscobra-jar/dist/javadoc/",
    description: "Documentação do Siscobra Jar",
  },
  {
    name: "Siscobra Cloud",
    uri: "lib/siscobracloud-jar/javadoc/",
    description: "Documentação do Siscobra Cloud",
  },
  {
    name: "Atualizador / Comparador / Versionador",
    uri: "lib/comparer-updater-versioner/javadoc/",
    description: "Documentação do Atualizador / Comparador / Versionador",
  },
  {
    name: "Siscobra Lib",
    uri: "lib/siscobralib-jar/dist/javadoc/",
    description: "Documentação do Siscobra Lib",
  },
];
