const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.orignialUrl}`);
  res.status(400);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.Node_ENV === "production" ? null : err.stack,
  });
  //   next(error);
};

module.exports = { notFound, errorHandler };
