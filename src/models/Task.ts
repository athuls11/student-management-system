import { Schema, model, Types } from "mongoose";

export interface ITask extends Document {
  title: string;
  description: string;
  studentId: Types.ObjectId;
  dueAt: Date;
  status: "PENDING" | "OVERDUE" | "COMPLETED";
}

const taskSchema = new Schema({
  title: String,
  description: String,
  studentId: { type: Types.ObjectId, ref: "Student" },
  dueAt: { type: Date, required: true },
  status: {
    type: String,
    enum: ["PENDING", "OVERDUE", "COMPLETED"],
    default: "PENDING",
  },
  createdAt: { type: Date, default: Date.now },
});

export default model("Task", taskSchema);
