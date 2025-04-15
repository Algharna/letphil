import { Router } from "express";
import usersController from "../../controllers/users.controller.js";

const router = Router();

// CREATE
router.post("/", (req, res) => {
  const timestamp = req.timestamp;
  const name = req.body.name;
  const age = req.body.age;
  const user = usersController.create(name, age, timestamp);
  res.send("OK");
});

// READ
router.get("{/:id}", (req, res) => {
  res.send("GET OR LIST");
});

// UPDATE
router.put("/:id", (req, res) => {
  res.send(`update with id - ${req.params.id}`);
});

// DELETE
router.delete("/:id", (req, res) => {
  res.send(`delete by id - ${req.params.id}`);
});

export default router;
