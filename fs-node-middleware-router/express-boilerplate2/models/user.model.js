class User {
  constructor(id, name, age, createdAt, updatedAt) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = null;
  }
}
export default User;
