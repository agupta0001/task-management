import "dotenv/config";
import * as db from "./db";
import express, { urlencoded, json, Express } from "express";
import cors from "cors";
import helmet from "helmet";
import addApiRoutes from "./routers";

async function buildApp(port: number) {
  try {
    console.log("Connecting to database...");
    await db.connect();
    console.log("Connected to database.");
  } catch (error) {
    console.error(error.message);
    console.error("Failed to boot server.");
    process.exit(1);
  }

  const app: Express = express();

  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(cors());
  app.use(helmet());

  addApiRoutes(app);

  app.listen(port, () => {
    console.log(`API Server listening on port ${port}`);
  });
}

const PORT = parseInt(process.env["PORT"] ?? "3000", 10);

buildApp(PORT);
