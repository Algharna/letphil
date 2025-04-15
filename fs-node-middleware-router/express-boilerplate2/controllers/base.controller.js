import fs from "fs";

class BaseController {
  constructor(model, filepath) {
    this.model = model;
    this.filepath = filepath;
    this.fs = fs;
  }

  nextId() {
    const files = this.fs.readdirSync(this.filepath);
    return files.length + 1;
  }
}

export default BaseController;
