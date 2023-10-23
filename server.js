require("dotenv/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const eventRouter = require("./routes/event.routes");

const app = express();
const PORT = process.env.PORT;

app.use(cors());

app.use(express.json());
app.use("/events", eventRouter);
app.get("/", (req, res) => {
  res.send("Restaurant server up");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then((res) => {
    console.log("//////////////// Restaurant /////////////");
    console.log("connected to --->", res.connections[0].name);
    app.listen(PORT, () => {
      console.log("Restaurant backend up on-->", +PORT);
    });
  })
  .catch((err) => {
    console.log(err, "err - server");
  });
