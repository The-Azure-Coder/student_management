const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });
const DB_CONN =
  process.env.NODE_ENV === "production"
    ? process.env.DATABASE_PRODUCTION.replace(
        "<PWD>",
        process.env.DATABASE_PASSWORD
      )
    : process.env.DATABASE;
mongoose.connect(DB_CONN).then((conn) => {
  console.log("Connected to database mongodb database");
});

// const newStudent = new Student({
//   name: "Tyrese Morgan",
//   email: "tyrese@gmail.com",
//   cohort: "2",
//   phoneNumber: "1263636",
//   grade: 89,
//   regustrationFee: 2000,
// });
// newStudent
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(`ERROR: ${err}`);
//   });

const port = 3500;
app.listen(port, () => {
  console.log(`Server Listening on http://localhost:${port}`);
});
