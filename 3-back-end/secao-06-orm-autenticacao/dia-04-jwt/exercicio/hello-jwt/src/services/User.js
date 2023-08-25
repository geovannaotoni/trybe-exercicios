const jwt = require('jsonwebtoken');
const model = require('../models/User');
const { JWT_SECRET } = process.env;

const login = async (username, password) => {
  const user = await model.findOne(username);

  if (!user || user.password !== password) {
    return {
      error: {
        code: 'invalidCredentials',
        message: 'Invalid username or password',
      },
    };
  }

  const payload = {
    username,
    admin: user.admin,
  };

  // if (username === 'admin' && password !== 's3nh4S3gur4???') {
  //   return {
  //     error: {
  //       message: 'Invalid username or password',
  //       code: 'invalidCredentials',
  //     },
  //   };
  // }
  // const isAdmin = admin || (username === 'admin' && password === 's3nh4S3gur4???');

  // const payload = {
  //   username,
  //   admin: isAdmin,
  // };

  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: '1h',
  });

  return { token };
};

const create = async (username, password) => {
  const userExists = await model.findOne(username);

  if (userExists) {
    return {
      error: {
        message: 'Username already exists',
        code: 'usernameExists',
      },
    };
  }

  const admin = Math.floor(Math.random() * 100) > 50; // Caso o username não exista, sorteia para descobrir se essa pessoa será admin

  await model.create(username, password, admin);

  return login(username, password);
};

module.exports = {
  create,
  login,
};