const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes")

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`
  starting server on ${port}
  go to http://localhost:3000/api/v1/tours
  `);
});
