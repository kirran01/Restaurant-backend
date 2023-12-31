const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  day: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
