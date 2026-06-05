export const info = {
  legalName: 'Another Real Estate Company',
  companyName: 'Another',
  description: 'Inversión Inmobiliaria en Preventa',
  email: {
    sender: 'info@another.mx',
    recipients: [
      'info@another.mx',
    ],
    subject: 'Nuevo prospecto Another'
  },
  phoneNumber: '+523322598229',
  whatsapp: {
    value: '+523322598229',
    message: 'Si jaló'
  },
  social: {
    facebook: 'another.realestate',
    instagram: 'another.realestate',
  },
  address: {
    address: 'Montreal 1071',
    col: 'Providencia',
    cp: '44100',
    city: 'Guadalajara',
    state: 'Jalisco',
    country: 'MEX'
  },
  privacyNotice: '/privacy-notice',
  optInWebhook: process.env.NODE_ENV === 'dev' ? 'https://n8n.notoriovs.com/webhook-test/b2295118-c28e-40b7-a771-2704c6a724d3' : 'https://n8n.notoriovs.com/webhook/b2295118-c28e-40b7-a771-2704c6a724d3',
  schedulerWebhook: 'https://calendly.com/another-info/30min'
}
