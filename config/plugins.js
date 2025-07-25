module.exports = ({env}) => ({
    email: {
        config: {
          provider: 'strapi-provider-mailersend', // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
          providerOptions: {
            apiKey: env('MAILERSEND_API_KEY'),
          },
          settings: {
            defaultFrom: 'no-reply@v7web.com.br',
            defaultReplyTo: 'no-reply@v7web.com.br',
            testAddress: 'no-reply@v7web.com.br',
          },
        },
      },
});
