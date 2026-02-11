import { Request, Response } from "express";
import * as service from "../service/admin.service";

export const login = async (req: Request, res: Response) => {
  const token = await service.adminLogin(req.body.email, req.body.password);
  res.json({ token });
};

export const createStudent = async (req: Request, res: Response) => {
  const student = await service.addStudent(req.body);
  res.json(student);
};

export const createTask = async (req: Request, res: Response) => {
  const task = await service.assignTask(req.body);
  res.json(task);
};
