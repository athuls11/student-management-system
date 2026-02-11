import { Schema, model, Types } from "mongoose";

const taskSchema = new Schema({
  title: String,
  description: String,
  studentId: { type: Types.ObjectId, ref: "Student" },
  dueAt: Date,
  status: {
    type: String,
    enum: ["PENDING", "OVERDUE", "COMPLETED"],
    default: "PENDING",
  },
  createdAt: { type: Date, default: Date.now },
});

export default model("Task", taskSchema);
