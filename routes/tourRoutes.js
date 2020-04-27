const express = require("express");
const router = express.Router();

const {
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
  aliasTopTours,
  getTourStatus,
  getMonthlyPlan
} = require("../controllers/tourController");


router.route("/top-5-cheap").get(aliasTopTours, getAllTours);
router.route("/stats").get(getTourStatus);
router.route("/monthly-plan/:year").get(getMonthlyPlan);

router.route("/").get(getAllTours).post(createTour);

router.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
