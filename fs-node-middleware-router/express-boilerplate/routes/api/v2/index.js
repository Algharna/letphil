import { Router } from "express";

const router = Router();

router.get("/", function (req, res) {
  res.send("v2");
});

export default router;
