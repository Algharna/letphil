import express from "express";
import dotenv from "dotenv";
import { addTimestamp } from "./middlewares/index.js";
import router from "./routes/index.js";

//setting up env variables from .env file
dotenv.config();
//setting PORT to the variable set in .env file
const PORT = process.env.PORT || 8888;
//instantiating express() into app variable -> only need to instantiate once
const app = express();

app.use(addTimestamp); //handling .timestamp to req obj
app.use(express.json()); //handles being able to use .body in req obj in post request
app.use("/views", express.static("public")); //handles putting static files in /view routes
app.use("/api", router); //putting api routes

//healthcheck
app.get("/health", (req, res) => {
  res.send({
    msg: "OK",
    checkedHealthAt: req.timestamp,
  });
});
//setting callback to show app is listening on port and persisting
app.listen(PORT, function () {
  console.log("Server running on port: ", PORT);
});
