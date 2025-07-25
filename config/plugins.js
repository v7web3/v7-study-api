module.exports = ({env}) => {
  // Debug: Log environment variables
  console.log('=== Environment Variables Debug ===');
  console.log('MAILERSEND_API_KEY:', env('MAILERSEND_API_KEY') ? 'SET' : 'NOT SET');
  console.log('AWS_ACCESS_KEY_ID:', env('AWS_ACCESS_KEY_ID') ? 'SET' : 'NOT SET');
  console.log('AWS_ACCESS_SECRET:', env('AWS_ACCESS_SECRET') ? 'SET' : 'NOT SET');
  console.log('AWS_REGION:', env('AWS_REGION'));
  console.log('AWS_BUCKET:', env('AWS_BUCKET'));
  console.log('AWS_ACL:', env('AWS_ACL', 'public-read'));
  console.log('AWS_SIGNED_URL_EXPIRES:', env('AWS_SIGNED_URL_EXPIRES', 15 * 60));
  console.log('===================================');

  return {
    email: {
      config: {
        provider: 'strapi-provider-mailersend',
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
  };
};
