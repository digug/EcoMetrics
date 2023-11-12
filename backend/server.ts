import cors from "cors";
import dotenv from "dotenv";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import createHttpError, { isHttpError } from "http-errors";
import morgan from "morgan";
import portfolioRoutes from "./routes/portfolio";

// Port
const PORT = process.env.PORT || 3000;

// URI Configuration
dotenv.config();

// App Init
const app = express();

app.use(morgan("dev"));

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello World</h1>");
});

/* Routes */
app.use("/portfolio", portfolioRoutes);

app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "An unknown error occurred";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMessage = error.message;
  }
  res.status(statusCode).json({ error: errorMessage });
});


const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export { app, server };
