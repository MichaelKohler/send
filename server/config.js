const convict = require('convict');

const conf = convict({
  s3_bucket: {
    format: String,
    default: '',
    env: 'P2P_S3_BUCKET'
  },
  redis_host: {
    format: String,
    default: 'localhost',
    env: 'P2P_REDIS_HOST'
  },
  listen_port: {
    format: 'port',
    default: 1443,
    arg: 'port',
    env: 'PORT'
  },
  analytics_id: {
    format: String,
    default: '',
    env: 'GOOGLE_ANALYTICS_ID'
  },
  sentry_id: {
    format: String,
    default: '',
    env: 'P2P_SENTRY_CLIENT'
  },
  sentry_dsn: {
    format: String,
    default: '',
    env: 'P2P_SENTRY_DSN'
  },
  env: {
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  max_file_size: {
    format: Number,
    default: 1024 * 1024 * 1024 * 2,
    env: 'P2P_MAX_FILE_SIZE'
  },
  expire_seconds: {
    format: Number,
    default: 86400,
    env: 'EXPIRE_SECONDS'
  }
});

// Perform validation
conf.validate({ allowed: 'strict' });

const props = conf.getProperties();
module.exports = props;
