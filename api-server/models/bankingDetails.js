const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Account#
// Bank
// Branch
// Account Type
// Status
// StudentID

let bankingDeatil = new Schema(
  {
    accountNumber: {
      type: String,
    },
    bank: {
      type: String,
    },
    branch: {
      type: String,
    },
    accountType: {
      type: String,
    },
    status: {
      type: String,
    },
    studentID: {
      type: String,
    },
  },
  {
    collection: "bankingDetails",
  }
);

module.exports = mongoose.model("bankingDetail", bankingDeatil);
