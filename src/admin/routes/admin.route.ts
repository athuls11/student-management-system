import { Router } from "express";
import * as adminController from "../controller/admin.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { isAdmin } from "../../middlewares/role.middleware";

const router = Router();

router.post("/login", adminController.login);
router.post(
  "/students",
  authMiddleware,
  isAdmin,
  adminController.createStudent,
);
router.post("/tasks", authMiddleware, isAdmin, adminController.createTask);

export default router;
