import { Request, Response } from "express";
import * as service from "../service/user.service";
import { AuthRequest } from "../../middlewares/auth.middleware";

export const login = async (req: Request, res: Response) => {
  const token = await service.studentLogin(req.body.email, req.body.password);
  res.json({ token });
};

export const tasks = async (req: AuthRequest, res: Response) => {
  const tasks = await service.getTasks(req.user.userId);
  res.json(tasks);
};

export const completeTask = async (
  req: Request<{ taskId: string }, {}, { status: string }>,
  res: Response,
) => {
  const task = await service.updateTaskStatus(req.params.taskId);
  res.json(task);
};
