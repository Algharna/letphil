import BaseController from "./base.controller.js";
import User from "../models/user.model.js";

class UsersController extends BaseController {
  constructor() {
    super(User, "./data/users");
  }

  create(name, age, timestamp) {
    const id = this.nextId();
    const user = new this.model(id, name, age, timestamp, timestamp);
    this.fs.writeFileSync(`${this.filepath}/${id}.json`, JSON.stringify(user));
    return user;
  }
}

export default new UsersController();
