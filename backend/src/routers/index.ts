import { Application } from "express";
import todos from "./todo";

function addApiRoutes(app: Application) {
  app.use("/todo", todos);
}

export default addApiRoutes;
