const config = {
  SENTRY_DSN:
    "https://b28691021a1d4aaea24f2d34452b041e@o1339687.ingest.sentry.io/6611877",

  STRIPE_KEY:
    "pk_test_51LQYDBFL4SoWx0PZitWCmEAHF5jkeWYTuN2fFnvwCyQK1jV6pIgSMKU8SjtqPsTkD3ubertNbOJjxqdHtGnZpnTS00yDq0ER4g",

  MAX_ATTACHMENT_SIZE: 5000000,
  // Backend config
  s3: {
    REGION: process.env.REACT_APP_REGION,
    BUCKET: process.env.REACT_APP_BUCKET,
  },
  apiGateway: {
    REGION: process.env.REACT_APP_REGION,
    URL: process.env.REACT_APP_API_URL,
  },
  cognito: {
    REGION: process.env.REACT_APP_REGION,
    USER_POOL_ID: process.env.REACT_APP_USER_POOL_ID,
    APP_CLIENT_ID: process.env.REACT_APP_USER_POOL_CLIENT_ID,
    IDENTITY_POOL_ID: process.env.REACT_APP_IDENTITY_POOL_ID,
  },
};

export default config;
