const sessionRoute = require('express').Router();

sessionRoute.get('/', async (req, res) => {
  try {
    const user = req.session;
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(409).json('Пусто');
    }
  } catch (error) { console.log(error.message); }
});

module.exports = sessionRoute;
