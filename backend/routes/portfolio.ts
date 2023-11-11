import { Router } from "express";

const portfolioRoutes = Router();

portfolioRoutes.post("/", (req, res) => {
  res.send("Hello World");
});

export default portfolioRoutes;
