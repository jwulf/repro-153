const camundaSdk = require('@camunda8/sdk');
// Incorrect:

const camunda = new camundaSdk.Camunda8({
  config: {
    ZEEBE_ADDRESS: 'zeebeAddress',
    ZEEBE_CLIENT_ID: 'camundaClientId',
    ZEEBE_CLIENT_SECRET: 'camundaClientSecret',
    ZEEBE_AUTHORIZATION_SERVER_URL: 'https://login.cloud.camunda.io/oauth/token',
    CAMUNDA_OAUTH_URL: 'https://login.cloud.camunda.io/oauth/token'
  }
});


// Should be:
/**
const camunda = new camundaSdk.Camunda8({
    ZEEBE_ADDRESS: 'zeebeAddress',
    ZEEBE_CLIENT_ID: 'camundaClientId',
    ZEEBE_CLIENT_SECRET: 'camundaClientSecret',
    ZEEBE_AUTHORIZATION_SERVER_URL: 'https://login.cloud.camunda.io/oauth/token',
    CAMUNDA_OAUTH_URL: 'https://login.cloud.camunda.io/oauth/token'
});
**/
