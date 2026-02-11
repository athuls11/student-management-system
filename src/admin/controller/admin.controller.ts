import { Request, Response } from "express";
import * as service from "../service/admin.service";
import { sendResponse } from "../../utils/response";

export const login = async (req: Request, res: any) => {
  try {
    const token = await service.adminLogin(req.body.email, req.body.password);
    sendResponse(res, {
      message: "Admin logged in successfully.",
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

export const createStudent = async (req: Request, res: any) => {
  try {
    const student = await service.addStudent(req.body);
    sendResponse(res, {
      message: "Student created successfully.",
      data: student,
      statusCode: 201,
    });
  } catch (err: any) {
    if (err.code === 11000) {
      return sendResponse(res, {
        message: "Student email must be unique.",
        statusCode: 409,
        success: false,
      });
    }
    sendResponse(res, {
      message: err.message,
      statusCode: 400,
      success: false,
    });
  }
};

export const createTask = async (req: Request, res: any) => {
  try {
    const task = await service.assignTask(req.body);
    sendResponse(res, {
      message: "Task assigned successfully.",
      data: task,
      statusCode: 201,
    });
  } catch (err: any) {
    let message = err.message;
    if (err.name === "ValidationError") {
      message = Object.values(err.errors)
        .map((e: any) => e.message)
        .join(", ");
    }
    sendResponse(res, {
      message: err.message,
      statusCode: 400,
      success: false,
    });
  }
};
