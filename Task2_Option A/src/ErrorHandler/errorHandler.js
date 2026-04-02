const globalErrorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    status: false,
    message: error.message || "Something went wrong",
    ...(process.env.NODE_ENV === "development" && {
      stack: error.stack,
    }),
  });
};

export default globalErrorHandler;
