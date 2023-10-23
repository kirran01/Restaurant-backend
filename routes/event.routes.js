const express = require("express");
const router = express.Router();

const { createEvent } = require("../controllers/event.controller");

router.get("/create-event", createEvent);

module.exports = router;
