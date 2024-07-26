import { Router } from "express";
import * as TodoController from "../controller/todo";
import { asyncHandler } from "../middleware/utility";

const router = Router();

router.get("/", asyncHandler(TodoController.getTodos));

export default router;
