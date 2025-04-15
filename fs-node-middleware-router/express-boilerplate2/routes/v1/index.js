import { Router } from "express";
import userRoutes from "./users.routes.js";

const router = Router(); //instantiate router (submodule of express)

router.get("/", (req, res) => {
  res.send("v1 router");
});

router.use("/users", userRoutes);

export default router;
