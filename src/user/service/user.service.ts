import bcrypt from "bcrypt";
import mongoose from "mongoose";
import Student from "../../models/Student";
import Task from "../../models/Task";
import { generateToken } from "../../utils/jwt";

export const studentLogin = async (email: string, password: string) => {
  const student = await Student.findOne({ email }).select("+password");

  if (!student) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, student.password);

  if (!isMatch) {
    throw new Error("Incorrect password.");
  }

  return generateToken({
    userId: student._id.toString(),
    role: student.role,
  });
};

export const getTasks = async (studentId: string) => {
  const now = new Date();

  await Task.updateMany(
    {
      studentId,
      status: "PENDING",
      dueAt: { $lt: now },
    },
    { status: "OVERDUE" },
  );

  return Task.find({ studentId });
};

export const updateTaskStatus = async (taskId: string) => {
  if (!mongoose.Types.ObjectId.isValid(taskId)) {
    throw new Error("Invalid studentId format.");
  }
  return Task.findByIdAndUpdate(taskId, { status: "COMPLETED" }, { new: true });
};
