import bcrypt from "bcrypt";
import Admin from "../../models/Admin";
import Student from "../../models/Student";
import Task from "../../models/Task";
import { generateToken } from "../../utils/jwt";

export const adminLogin = async (email: string, password: string) => {
  const admin = await Admin.findOne({ email });

  if (!admin || !admin.password) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  return generateToken({ userId: admin._id, role: admin.role });
};

export const addStudent = async (data: any) => {
  data.password = await bcrypt.hash(data.password, 10);
  return Student.create(data);
};

export const assignTask = async (data: any) => {
  return Task.create(data);
};
