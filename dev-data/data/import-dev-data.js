const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const Tour = require("../../models/tourModel");

const db = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATA_BASE_PASSWORD
).replace("<USER>", process.env.DATA_BASE_USER);

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("db connection succesful!");
  });

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, "utf-8"));

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log("Data succesfully loaded");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Data succesfully deleted");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

if (process.argv[2]==="--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

console.log(process.argv);