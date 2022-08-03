import { Router } from "express";

import { circuitsRoutes } from "./circuits.routes";
import { constructorsRoutes } from "./constructors.routes";

const router = Router();

router.use("/circuits", circuitsRoutes);
router.use("/constructors", constructorsRoutes);

export { router };
