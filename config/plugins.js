module.exports = ({env}) => ({
    email: {
        config: {
          provider: 'sendgrid', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
          providerOptions: {
            apiKey: env('SENDGRID_API_KEY'),
          },
          settings: {
            defaultFrom: 'no-reply@v7web.com.br',
            defaultReplyTo: 'no-reply@v7web.com.br',
            testAddress: 'no-reply@v7web.com.br',
          },
        },
      },
});
