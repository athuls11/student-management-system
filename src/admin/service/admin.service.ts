import bcrypt from "bcrypt";
import mongoose from "mongoose";
import Admin from "../../models/Admin";
import Student from "../../models/Student";
import Task from "../../models/Task";
import { generateToken } from "../../utils/jwt";

export const adminLogin = async (email: string, password: string) => {
  const admin = await Admin.findOne({ email });

  if (!admin || !admin.password) {
    throw new Error("Invalid login credentials.");
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    throw new Error("Incorrect password.");
  }

  return generateToken({ userId: admin._id, role: admin.role });
};

export const addStudent = async (data: any) => {
  data.password = await bcrypt.hash(data.password, 10);
  const student = await Student.create(data);
  return student.toJSON();
};
export const assignTask = async (data: any) => {
  const { studentId, title, description, dueAt } = data;

  if (!studentId || !title || !dueAt) {
    throw new Error("studentId, title and dueAt are required.");
  }

  if (!mongoose.Types.ObjectId.isValid(studentId)) {
    throw new Error("Invalid studentId format.");
  }

  const studentExists = await Student.findById(studentId);
  if (!studentExists) {
    throw new Error("Student not found.");
  }

  const duplicateTask = await Task.findOne({
    studentId,
    title,
    dueAt,
  });

  if (duplicateTask) {
    throw new Error(
      "Task already assigned to this student with the same title and due date.",
    );
  }

  return Task.create(data);
};
