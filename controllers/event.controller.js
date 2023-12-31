const Event = require("../models/event.model");

const createEvent = async (req, res) => {
  const { day, title, description } = req.body;
  try {
    const createdEvent = await Event.create({
      day,
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
const deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.deleteOne({ _id: req.params.id });
    if (deletedEvent.deletedCount === 1) {
      res.send("deleted");
    } else {
      res.send("something went wrong");
    }
  } catch (err) {
    res.send(err);
  }
};
const updateEvent = async (req, res) => {
  try {
    const { title, description, day } = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { $set: { title: title, description: description, day:day } },
      { new: true }
    );

    if (updatedEvent) {
      res.json(updatedEvent);
    } else {
      res.send("event not found");
    }
  } catch (err) {
    res.send(err);
  }
};
const getEvents = async (req, res) => {
  try {
    const allEvents = await Event.find();
    if (allEvents) {
      res.send(allEvents);
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  createEvent,
  deleteEvent,
  updateEvent,
  getEvents,
};
