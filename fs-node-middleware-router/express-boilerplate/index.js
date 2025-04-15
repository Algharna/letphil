import express from "express";
import dotenv from "dotenv";
import apiRoutes from "./routes/api/index.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

//middleware
app.use(express.json());
app.use(function (req, res, next) {
  if (!req.body) req.body = {};
  const now = new Date().toISOString();
  req.body.createdAt = now;
  req.body.updatedAt - now;
  req.body.deletedAt = null;
  next();
});

//routes
app.use("/api", apiRoutes);

// healthcheck
app.get("/HP", function (req, res) {
  res.send({
    msg: "OK",
    requestedAt: req.body.createdAt,
  });
});

//start server
app.listen(PORT, function () {
  console.log("Server running on port: ", PORT);
});
