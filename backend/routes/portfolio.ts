import { parse } from "csv-parse";
import { Router } from "express";
import multer from "multer";
import * as PortfolioController from "../controllers/portfolioController";

const portfolioRoutes = Router();
const mw = multer({ dest: "uploads/" });

// POST request to parse CSV
portfolioRoutes.post(
  "/upload-csv",
  mw.single("file"),
  PortfolioController.parseCSV
);

export default portfolioRoutes;
