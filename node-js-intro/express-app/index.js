//requier express library
const express = require("express");
const path = require("path");
//initializing express inside of app variable
const app = express();

const PORT = 8888;

app.use(express.static(path.join(__dirname, "public")));

//health check
app.get("/ping", function (req, res) {
  console.log("req=", req.ip);
  console.log("req=", req.headers["sec-ch-ua-platform"]);
  return res.send("pong");
});

app.get("/get-info", function (req, res) {
  res.status("");
});

app.listen(PORT, function () {
  console.log("Serving running at port:", PORT);
});
