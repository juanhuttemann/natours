const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

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

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "A tour must have a name"],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, "A tour must have a price"],
  },
});

const Tour = mongoose.model('Tour', tourSchema);


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`starting server on ${port}`);
});
