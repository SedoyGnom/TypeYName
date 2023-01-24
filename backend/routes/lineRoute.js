const lineRoute = require('express').Router();

const { Line } = require('../db/models');

lineRoute.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const lines = await Line.findAll({ where: { sublevel_id: id }, raw: true, order: [['order', 'ASC']] });
    const lines2 = lines.map((el) => el = el.body);
    res.status(200).json(lines2);
  } catch (error) {
    console.log(error);
    res.status(409).json({ text: 'че самый умный штоль' });
  }
});

module.exports = lineRoute;
