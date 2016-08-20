/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'gloria-provider-frontend',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy:{
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' wss://localhost:3000 ws://localhost:3000 ws://localhost:4500 localhost:3000 localhost:4000 localhost:5000",
      'img-src': "'self'",
      'style-src': " 'self' 'unsafe-inline' 'unsafe-eval' wss://localhost:3000 ws://localhost:3000 localhost:3000",
      'media-src': "'self'"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES:{
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.startUrl = "http://localhost:3000/api/gloria_provider_network"
    ENV.startSocket = "http://localhost:3000/api/gloria_provider_network"
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
