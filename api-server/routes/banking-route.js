let express = require("express");
const bankingDetails = require("../models/bankingDetails");
const app = express();

let BankingDeatil = require("../models/bankingDetails");

let bankRoute = express.Router();

bankRoute.route("/").get((req, res) => {
  BankingDeatil.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
bankRoute.route("/create").post((req, res) => {
  BankingDeatil.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

bankRoute.route("/find/:id").get((req, res) => {
  bankingDetails.findById(req.params.id, (error, data) => {
    if (error) return next(error);
    res.json(data);
  });
});

bankRoute.route("/update/:id").put((req, res) => {
  BankingDeatil.findByIdAndUpdate(req.params.id, req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

bankRoute.route("/delete/:id").delete((req, res) => {
  BankingDeatil.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) return next(error);
    res.json(data);
  });
});

module.exports = bankRoute;
