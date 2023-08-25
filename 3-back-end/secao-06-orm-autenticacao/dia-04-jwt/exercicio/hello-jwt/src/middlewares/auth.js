const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1]; // Separa o prefixo "Bearer" do token e retorna apenas o valor do token
}

module.exports = (req, res, next) => {
  const bearerToken = req.header('Authorization');
  const token = extractToken(bearerToken);

  if (!token) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }

  // validação do token
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.user = payload;
    return next();
  } catch (err) {
    err.statusCode = 401;
    return next(err); // envia o erro para ser processador pelo middleware de erro
  }
};