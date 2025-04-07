const express = require("express");
const path = require("path");
const fs = require("fs");
const PORT = 8888;

const app = express();

//middleware to receive json data
app.use(express.json());

// Health Check
app.get("/ping", function (req, res) {
  res.send("pong");
});

// save car
app.post("/api/cars", function (req, res) {
  const car = req.body;

  const year = car.year;
  const make = car.make;
  const model = car.model;
  const color = car.color;

  if (make && model && year && color) {
    const carToInsert = new Car(
      year,
      capitalize(make),
      capitalize(model),
      color
    );

    const files = fs.readdirSync("./data", "utf-8");

    files.sort(
      (a, b) => Number(a.replace(".json", "")) - Number(b.replace(".json", ""))
    );

    if (!files.length) {
      fs.writeFileSync("./data/1.json", JSON.stringify(car));
      res.send({
        msg: "Car inserted!",
        data: carToInsert,
      });
    } else {
      const fileName = files[files.length - 1];
      const isolateNum = fileName.replace(".json", "");
      const castToNum = Number(isolateNum);
      const addOne = castToNum + 1;
      const backToFileName = String(addOne) + ".json";
      // String(Number(files[files.length - 1].replace(".json", "")) + 1) +
      // ".json";
      fs.writeFileSync("./data/" + backToFileName, JSON.stringify(car));
      res.send({
        msg: "Car inserted!",
        data: carToInsert,
      });
    }
  } else {
    res.status(422).send("Check parameters!");
  }
});

//list cars or get specific car by id
app.get("/api/cars{/:carId}", function (req, res) {
  const carId = req.params.carId;
  if (carId) {
    // readFileSync
    const car = fs.readFileSync(`./data/${carId}.json`, "utf-8");
    res.send(car);
  } else {
    res.send("List cars");
  }
});

app.listen(PORT, function () {
  console.log("server running on port:,", PORT);
});

function Car(year, make, model, color) {
  this.year = year;
  this.make = make;
  this.model = model;
  this.color = color;
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}
