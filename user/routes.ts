import { check } from "./check";
import { Request, Response, Router } from "express";
const router = Router();
import { Controller } from "./admin";
import express = require("express");
const controller = new Controller();
export class Routes {
  routes(app: express.Application): void {
    app.get("/users", controller.getUsers);
    app.delete("/user/:id", controller.deleteUser);
    app.patch("/user/:id", controller.editUser);
    app.post("/users", controller.addUser);
    app.get("/user/:id", controller.getUser);
  }
}
