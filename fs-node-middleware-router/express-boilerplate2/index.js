import express from "express";
import dotenv from "dotenv";

//setting up env variables from .env file
dotenv.config();
//setting PORT to the variable set in .env file
const PORT = process.env.PORT || 8888;
//instantiating express() into app variable -> only need to instantiate once
const app = express();

//healthcheck
app.get("/health", (req, res) => {
  res.send({
    msg: "OK",
  });
});
//setting callback to show app is listening on port and persisting
app.listen(PORT, function () {
  console.log("Server running on port: ", PORT);
});
