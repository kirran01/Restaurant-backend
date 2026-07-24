const express = require("express");
const router = express.Router();

const {
  createFood,
  deleteFood,
  updateFood,
  getFood,
} = require("../controllers/food.controller");

router.delete("/delete-food/:id", deleteFood);
router.get("/get-food", getFood);
router.post("/create-food", createFood);
router.put("/update-food/:id", updateFood);

module.exports = router;
