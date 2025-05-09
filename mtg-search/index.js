const express = require("express");
const path = require("path");

const app = express();
const PORT = 8888;

app.use(express.static(path.join(__dirname, "public")));

app.listen(8888, () => console.log("Server running on PORT: ", PORT));
