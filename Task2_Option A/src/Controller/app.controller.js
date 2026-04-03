import mongoose from "mongoose";
import Todo from "../Models/todo.schema.js";
import throwError from "../Helpers/throwError.js";
export const createTodo = async (req, res, next) => {
  try {
    const { description: desc } = req.body;
    const description = desc?.trim();
    if (!description || description === null) {
      throwError(400, "Todo cannot be empty.");
    }
    const createdTodo = await Todo.create({
      description: description,
      status: "pending",
    });
    if (!createdTodo) {
      throwError(400, "Cannot create todo, try again later.");
    }
    return res.status(201).json({
      status: true,
      message: "Todo created",
      data: createdTodo,
    });
  } catch (error) {
    next(error);
  }
};
export const getAllTodos = async (req, res, next) => {
  try {
    const { status } = req.query;
    const values = Todo.schema.paths.status.enumValues;
    if (!status || !values.includes(status) || status === "all") {
      const todos = await Todo.find({}).sort({ createdAt: -1 });
      res.status(200).json({
        status: true,
        message: "Todos found.",
        data: todos,
      });
      return;
    }
    const todos = await Todo.find({ status: status.toString() }).sort({
      createdAt: -1,
    });
    res.status(200).json({
      status: true,
      message: "Todos found.",
      data: todos,
    });
  } catch (error) {
    next(error);
  }
};
export const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      throwError(404, "Todo does not exist.");
    }

    const { description: desc, status } = req.body;
    const description = desc?.trim();

    const updationTodo = {};
    if (status) {
      const validStatus = Todo.schema.paths.status.enumValues;
      if (
        status === null ||
        status === undefined ||
        !validStatus.includes(status)
      ) {
        throwError(400, "Todo status can either be pending or completed.");
      }
      updationTodo.status = status;
    }

    if (description) updationTodo.description = description;

    const saved = await Todo.findByIdAndUpdate(id, updationTodo, {
      returnDocument: "after",
    });

    if (!saved) {
       throwError(404, "Todo does not exist.");
    }

    res.status(200).json({
      status: true,
      message: "Todos updated.",
      data: saved,
    });
  } catch (error) {
    next(error);
  }
};
export const deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      throwError(404, "Todo does not exists.");
    }
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      throwError(404, "Todo does not exists.");
    }
    res.status(200).json({
      status: true,
      message: "Todos deleted.",
    });
  } catch (error) {
    next(error);
  }
};
