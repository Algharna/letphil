const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = 8888;

const app = express();

//Need this to receive JSON
app.use(express.json());

app.listen(PORT, function () {
  console.log("Server running on port", PORT);
});

//health check
app.get("/ping", (req, res) => {
  return res.send("pong");
});

app.get("/users", async function (req, res) {
  let users = fs.readFileSync("./users.txt", "utf8");
  users = users.split("\r\n");
  res.send({ users });
});

app.post("/users", async function (req, res) {
  const { user = null } = req.body.user;

  if (!user) {
    res.status(422).send({
      msg: "User key not present",
    });
  }

  const users = fs.readFileSync("./users.txt", "utf8");

  if (users.includes(user)) {
    res.status(500).send({
      msg: "User already exists",
    });
  }

  fs.appendFileSync("./users.txt", "\n" + user);

  return res.send({
    msg: `${user} is added to users`,
  });
});

/*

Add Delete a name. Have to find user, remove user and rewrite whole file

*/
