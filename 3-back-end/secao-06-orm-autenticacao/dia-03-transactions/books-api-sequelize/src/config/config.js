// const config = {
//   username: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
//   host: process.env.MYSQL_HOST,
//   dialect: 'mysql',
// };

// module.exports = {
//   development: config,
//   test: config,
//   production: config,
// };

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_DEV,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_TEST,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE_PROD,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
  },
};