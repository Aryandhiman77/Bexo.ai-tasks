import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../Controller/app.controller.js";

const appRouter = express.Router();

appRouter.get("/", getAllTodos);
appRouter.post("/create", createTodo);
appRouter.put("/update/:id", updateTodo);
appRouter.delete("/delete/:id", deleteTodo);

export default appRouter;
