const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");


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

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`starting server on ${port}`);
});
