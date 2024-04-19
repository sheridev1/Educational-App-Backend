
module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'dw6cbkxzx',
        api_key: '874455695925512',
        api_secret: '2KftR42uWegvnMnBYhuO4CUWx58',
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});