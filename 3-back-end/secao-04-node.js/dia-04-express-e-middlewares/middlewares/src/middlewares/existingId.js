const teams = require("../utils/teams");

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    next();
  } else {
    res.sendStatus(404);
  }

  /*
  // trazendo mensagens de erro personalizadas:
  if (!teams.some((t) => t.id === id)) {
    return res.sendStatus(404).json({ message: 'Time não encontrado' });
  }
  next();
  */
}

module.exports = existingId;