import { Router } from "express";
import multer from "multer";

const portfolioRoutes = Router();
const mw = multer({ dest: "uploads/" });

portfolioRoutes.post("/", mw.single("file"), (req, res) => {
  console.log(req.file);
  console.log(req.body.e_weight);
  console.log(req.body.g_weight);
  console.log(req.body.s_weight);
  res.send("Hello World");
});

export default portfolioRoutes;
