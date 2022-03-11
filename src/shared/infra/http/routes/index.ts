import { Router } from "express";
import { assetsRoutes } from "./assets.routes";

const router = Router();

router.use('/assets', assetsRoutes)

export { router }