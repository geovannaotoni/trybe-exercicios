module.exports = (req, res, next) => {
  const { rating } = req.body.description;
  // const numberRating = Number(rating);
  // console.log(typeof rating);

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return res.status(400).json({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" });
  }

  next();
};