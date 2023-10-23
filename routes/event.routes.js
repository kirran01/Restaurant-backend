const express = require("express");
const router = express.Router();

const {
  createEvent,
  deleteEvent,
  updateEvent,
  getEvents,
} = require("../controllers/event.controller");

router.delete("/delete-event/:id", deleteEvent);
router.get("/get-events", getEvents);
router.post("/create-event", createEvent);
router.put("/update-event/:id", updateEvent);

module.exports = router;
