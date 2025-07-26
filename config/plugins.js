module.exports = ({env}) => {
  // Debug: Log environment variables
  console.log('=== Environment Variables Debug ===');
  console.log('MAILERSEND_API_KEY:', env('MAILERSEND_API_KEY') ? 'SET' : 'NOT SET');
  console.log('AWS_ACCESS_KEY_ID:', env('AWS_ACCESS_KEY_ID') ? 'SET' : 'NOT SET');
  console.log('AWS_SECRET_ACCESS_KEY:', env('AWS_SECRET_ACCESS_KEY') ? 'SET' : 'NOT SET');
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
          secretAccessKey: env('AWS_SECRET_ACCESS_KEY'),
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
    'users-permissions': {
        config: {
          jwt: {
            /* the following  parameter will be used to generate:
             - regular tokens with username and password
             - refreshed tokens when using the refreshToken API
            */
            expiresIn: '24h', // This value should be lower than the refreshTokenExpiresIn below.
          },
        },
    },
  'refresh-token': {
    config: {
      refreshTokenExpiresIn: '60d', // this value should be higher than the jwt.expiresIn
      requestRefreshOnAll: false, // automatically send a refresh token in all login requests.
      refreshTokenSecret: env('REFRESH_JWT_SECRET') || 'SomethingSecret',
      cookieResponse: false, // if set to true, the refresh token will be sent in a cookie
      refreshTokenRotation: false, // forces a new Refresh token, deleting the previously used one from the db.
    },
  },
  };
};
