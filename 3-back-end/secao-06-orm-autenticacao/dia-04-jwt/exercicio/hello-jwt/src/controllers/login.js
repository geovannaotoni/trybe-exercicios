const { validateCredentials } = require('./utils/validateCredentials');
const service = require('../services/User');

const login = async (req, res, next) => {
  const { error } = validateCredentials(req.body);
  if (error) return next(error);

  const { username, password } = req.body;

  // Pedimos para o service gerar o token
  const { error: serviceError, token } = await service.login(username, password);

  if (serviceError && serviceError.code === 'invalidCredentials') {
    // passar o erro para o express, para que seja tratado pelo middleware de erro
    return next({ statusCode: 401, message: serviceError.message }); // status `401 Unauthorized`
  }
  
  res.status(200).json({ token });
};

module.exports = login;