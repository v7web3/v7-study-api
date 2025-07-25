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

      
      upload: {
        config: {
          provider: 'aws-s3',
          providerOptions: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            region: env('AWS_REGION'),
            params: {
              ACL: env('AWS_ACL', 'public-read'),
              signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
              Bucket: env('AWS_BUCKET'),
            },
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      },
      
});
