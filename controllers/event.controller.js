const Event = require("../models/event.model");

const createEvent = async (req, res) => {
  const { title, description } = req.body;
  try {
    const createdEvent = await Event.create({
      title,
      description,
    });
    if (createdEvent) {
      res.send(createdEvent);
    }
  } catch (err) {
    res.send(err);
  }
};
module.exports = {
  createEvent,
};
