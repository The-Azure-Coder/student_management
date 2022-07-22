let express = require("express");
const app = express();

// Requiring Mongoose Model
let Student = require("../models/students");

let studentRoute = express.Router();

// Mongoose Route
studentRoute.route("/").get((req, res) => {
  Student.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Mongoose functions
// create() , findById()  , findByIdAndUpdate() , findOneAndRemove()

studentRoute.route("/create").post((req, res) => {
  Student.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

studentRoute.route("/find/:id").get((req, res) => {
  Student.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

studentRoute.route("/update/:id").put((req, res) => {
  Student.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

studentRoute.route("/delete/:id").delete((req, res) => {
  Student.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

module.exports = studentRoute;
