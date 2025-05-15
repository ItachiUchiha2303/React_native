const catchAsync = (error, res) => {
  res.status(error.statusCode || 500).json({
    error: error.message || "Something went wrong",
  });
};

module.exports = catchAsync;
