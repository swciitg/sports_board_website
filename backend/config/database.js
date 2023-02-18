const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'bank'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '0000'),
      ssl: env('DATABASE_SSL', false)
    },
    options: {
      host: 'swc.iitg.ac.in',
      port: 8188,
      path: ''
    },
    debug: false,
  },
});
