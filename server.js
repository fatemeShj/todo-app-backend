const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/toDoRoute");
const cors = require("cors");

require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected To MongoDB...`))
  .catch((error) => console.log(`error: ${error}`));

app.use(routes);

app.listen(port, () => console.log(`Listening on ${port}`));
