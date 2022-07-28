const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const studentRoute = require("./routes/student-route");
const bankRoute = require("./routes/banking-route");

mongoose
  .connect("mongodb://localhost:27017/students")
  .then((x) => {
    console.log(
      `Connected to MongoDB Successfully! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongodb", err.reason);
  });

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Setting Route middleware
app.use("/students", studentRoute);
app.use("/bankingDetails", bankRoute);

// Setting up Port
const port = process.env.PORT || 4000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}..`)
);
