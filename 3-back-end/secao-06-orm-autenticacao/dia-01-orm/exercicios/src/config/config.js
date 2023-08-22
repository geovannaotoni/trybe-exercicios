const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
};

module.exports = {
  development: {
    ...config,
    database: 'orm_exercise_dev',
  },
  test: {
    ...config,
    database: 'orm_exercise_test',
  },
  production: {
    ...config,
    database: 'orm_exercise',
  },
};
