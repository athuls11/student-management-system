import { Schema, model, Document } from "mongoose";

export interface IStudent extends Document {
  name: string;
  email: string;
  department: string;
  password: string;
  role: "STUDENT";
}

const studentSchema = new Schema<IStudent>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, default: "STUDENT" },
});

export default model<IStudent>("Student", studentSchema);
