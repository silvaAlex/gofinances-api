import { Request, Response, Router } from "express";
import { financeRoutes } from "./finance.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use('/users',userRoutes)
router.use('/finances',financeRoutes);

export { router };
