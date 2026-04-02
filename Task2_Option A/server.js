import express from "express";
import connectDb from "./src/Config/db.config.js";
import globalErrorHandler from "./src/ErrorHandler/errorHandler.js";
import appRouter from "./src/Routes/app.routes.js";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use("/todos", appRouter);
app.use(globalErrorHandler);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
});
