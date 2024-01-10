const api = {
    Manager: [
        {
            name: 'WSAssessoria',
            uri: 'api/manager/wsassessoria',
            description: 'Serviço SOAP WSAssessorias para permitir a manutenção dos dados de cobrança entre credor e Assessorias'
        },
        {
            name: 'WSAssessoria Internacional',
            uri: 'api/manager/wsassessoriainternacional',
            description: 'Serviço SOAP WSAssessorias para permitir a manutenção dos dados de cobrança entre credor e Assessorias'
        },
        {
            name: 'Siscobra WS',
            uri: 'api/manager/siscobraws',
            description: 'Serviço SOAP SiscobraWS para portal de autonegociações'
        },
        {
            name: 'WSLote',
            uri: 'api/manager/wslote',
            description: 'Importação de Remessa via Rest'
        },
        {
            name: 'WS Usuário',
            uri: 'api/manager/wsusuario',
            description: 'Integração com a API para gestão de usuário'
        },
        {
            name: 'WS Fraude',
            uri: 'api/manager/wsfraude',
            description: 'API para gerenciamento de fraudes'
        }
    ],
    Evolution: [
        {
            name: 'Siscobra WS',
            uri: 'api/evolution/siscobraws',
            description: 'Serviço SOAP SiscobraWS para portal de autonegociações'
        },
        {
            name: 'Boleto API',
            uri: 'api/evolution/boletoapi',
            description: 'Integração via API para geração de boletos'
        },
        {
            name: 'Siscobra API',
            uri: 'api/evolution/siscobraapi',
            description: 'Integração disponíveis no WebService da Siscobra'
        }
    ],
    Pay: [
        {
            name: 'Pay Boleto',
            uri: 'api/pay/payboleto',
            description: 'Integração via API com a plataforma Pay Boleto'
        },
        {
            name: 'Pay Cartão',
            uri: 'api/pay/paycartao',
            description: 'Integração via API com a plataforma Pay Cartão'
        }
    ]
}
