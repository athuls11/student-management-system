import { Response } from "express";

export const sendResponse = (
  res: Response,
  {
    message,
    statusCode = 200,
    success = true,
    data = null,
  }: { message: string; statusCode?: number; success?: boolean; data?: any },
) => {
  const response: any = {
    message,
    statusCode,
    success,
    ...(data !== null && data !== undefined ? { data } : {}),
  };

  return res.status(statusCode).json(response);
};
