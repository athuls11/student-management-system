import { Router } from "express";
import * as controller from "../controller/user.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { isStudent } from "../../middlewares/role.middleware";

const router = Router();

router.post("/login", controller.login);
router.get("/tasks", authMiddleware, isStudent, controller.tasks);
router.patch(
  "/tasks/:taskId",
  authMiddleware,
  isStudent,
  controller.completeTask,
);

export default router;
