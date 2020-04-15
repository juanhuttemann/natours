const Tour = require("../models/tourModel");

exports.getAllTours = (req, res) => {
  res.status(200).json({
    requestedAt: req.requestTime,
    status: "success",
/*     results: tours.length,
    data: {
      tours,
    }, */
  });
};

exports.getTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

/*   res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  }); */
};

exports.createTour = async (req, res) => {
  try {

    const newTour = await Tour.create(req.body)
    
    res.status(201).json({
      status: "success",
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err
    })
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      tour: "Updated tour...",
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
