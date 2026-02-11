import { Schema, model } from "mongoose";

const studentSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  department: String,
  password: String,
  role: { type: String, default: "STUDENT" },
});

export default model("Student", studentSchema);
