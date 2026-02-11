import { AuthRequest } from "../../middlewares/auth.middleware";
import { sendResponse } from "../../utils/response";
import * as service from "../service/user.service";

export const login = async (req: any, res: any) => {
  try {
    const token = await service.studentLogin(req.body.email, req.body.password);
    sendResponse(res, {
      message: "Student logged in successfully.",
      data: { token },
    });
  } catch (err: any) {
    sendResponse(res, {
      message: err.message,
      statusCode: 401,
      success: false,
    });
  }
};

export const tasks = async (req: AuthRequest, res: any) => {
  try {
    const tasks = await service.getTasks(req.user.userId);
    sendResponse(res, { message: "Tasks fetched successfully.", data: tasks });
  } catch (err: any) {
    sendResponse(res, {
      message: err.message,
      statusCode: 400,
      success: false,
    });
  }
};

export const completeTask = async (req: any, res: any) => {
  try {
    const task = await service.updateTaskStatus(req.params.taskId);
    sendResponse(res, { message: "Task marked as completed.", data: task });
  } catch (err: any) {
    sendResponse(res, {
      message: err.message,
      statusCode: 400,
      success: false,
    });
  }
};
