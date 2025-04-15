import { Router } from "express";
import v1Routes from "./v1/index.js";
const router = Router(); //instantiate router (submodule of express)

router.use("/v1", v1Routes);

export default router;
