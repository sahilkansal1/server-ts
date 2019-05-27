import { check } from "./check";
import express from "express";
import { Users } from "./users";
const users = new Users();
export class Routes {
  routes(app: express.Application): void {
    app.get("/users", users.getUsers);
    app.delete("/user/:id", users.deleteUser);
    app.patch("/user/:id",check, users.editUser);
    app.post("/users",check, users.addUser);
    app.get("/user/:id", users.getUser);
  }
}
