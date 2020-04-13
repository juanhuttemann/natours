const express = require("express");
const router = express.Router();

const {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  checkID,
} = require("../controllers/tourController");

router.param("id", checkID);

router.route("/").get(getAllTours).post(createTour);

router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
