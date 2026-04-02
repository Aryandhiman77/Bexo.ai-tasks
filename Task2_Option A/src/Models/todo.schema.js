import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "completed"],
    },
  },
  { timestamps: true },
);

const todoModel = mongoose.model("Todos", todoSchema);
export default todoModel;
