// path: ./config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'host.docker.internal',
      port: 5432,
      database: 'sports_board',
      user: 'sports_board_user',
      password: 'KHU4VUOZuRiwLyv',
      schema: 'public', // Not required
      ssl:  false,
    },
    useNullAsDefault: true,
  },
});
 