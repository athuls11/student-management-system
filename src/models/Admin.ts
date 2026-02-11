import { Schema, model } from "mongoose";

const adminSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "ADMIN" },
});

export default model("Admin", adminSchema);
