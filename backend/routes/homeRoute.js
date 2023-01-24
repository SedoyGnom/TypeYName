const homeRoute = require('express').Router();
const bcrypt = require('bcrypt');
const { User, UserSublevel } = require('../db/models');

homeRoute.get('/', (req, res) => {
  res.status(200).json({ text: 'hi' });
});

homeRoute.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    const userName = await User.findOne({
      where: { username },
    });

    if (userName) {
      if (await bcrypt.compare(password, userName.password)) {
        req.session.user = userName;
        const level = UserSublevel.findAll({ where: { user_id: userName.id }, order: [['id', 'DESC']], limit: 1 });

        res.status(200).json(userName);
      } else {
        res.status(401).json({ text: `Я уже знаком с ${username}, и ты не он` });
      }
    } else {
      const newUser = await User.create({
        username, password: await bcrypt.hash(password, 5), isActive: true,
      });
      req.session.user = newUser;
      res.status(200).json(newUser);
    }
  } catch (error) { console.log(error.message); }
});

module.exports = homeRoute;
