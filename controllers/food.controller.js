const Food = require("../models/food.model");

const createFood = async (req, res) => {
  const { name, price, description, category } = req.body;
  try {
    const createdFood = await Food.create({
      name,
      price,
      description,
      category
    });
    if (createdFood) {
      res.send(createdFood, 'Food:');
    }
  } catch (err) {
    res.send(err);
  }
};
const deleteFood = async (req, res) => {
  try {
    const deletedFood = await Food.deleteOne({ _id: req.params.id });
    if (deletedFood.deletedCount === 1) {
      res.send("deleted");
    } else {
      res.send("something went wrong");
    }
  } catch (err) {
    res.send(err);
  }
};
const updateFood = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const updatedFood = await Food.findByIdAndUpdate(
      req.params.id,
      { $set: { name: name, description: description, price:price, category:category } },
      { new: true }
    );

    if (updatedFood) {
      res.json(updatedFood);
    } else {
      res.send("Food not found");
    }
  } catch (err) {
    res.send(err);
  }
};
const getFood = async (req, res) => {
  try {
    const allFood = await Food.find();
    if (allFood) {
      res.send(allFood);
    }
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  createFood,
  deleteFood,
  updateFood,
  getFood,
};
