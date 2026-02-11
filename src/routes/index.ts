import { Router } from "express";
import adminRoutes from "../admin/routes/admin.route";
import userRoutes from "../user/routes/user.route";

const router = Router();

router.use("/admin", adminRoutes);
router.use("/user", userRoutes);

export default router;
