const answerRoute = require('express').Router();

const { Answer, Response, UserSublevel } = require('../db/models');

answerRoute.post('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { answer } = req.body;
    const user_id = req.session.user.id;
    console.log(answer);

    const rightAnswer = await Answer.findOne({ where: { sublevel_id: id }, raw: true });
    if (answer.trimEnd().toLowerCase() === rightAnswer.answer) {
      const userSublevel = UserSublevel.create({
        user_id, sublevel_id: id,
      });
      res.sendStatus(200);
    } else {
      const yaWrong = await Response.findAll({ where: { sublevel_id: id }, raw: true });
      res.status(409).json(yaWrong);
    }
  } catch (error) { console.log(error.message); }
});

module.exports = answerRoute;

// seessin current level
// // if (current_level != level {
//   res.sendStatus(409);
// })
