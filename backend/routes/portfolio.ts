import { parse } from "csv-parse";
import { Router } from "express";
import fs from "fs";
import multer from "multer";

const portfolioRoutes = Router();
const mw = multer({ dest: "uploads/" });

portfolioRoutes.post("/", mw.single("file"), (req, res) => {
  const file = req.file;
  if (file) {
    const results: Array<Array<string>> = [];

    // Using csv-parse to parse the CSV file
    const parser = parse({ delimiter: "," });

    fs.createReadStream(file.path)
      .pipe(parser)
      .on("data", (data) => {
        // Process each row of the CSV here
        results.push(data);
      })
      .on("end", () => {
        // Now 'results' contains the parsed data from the CSV file
        console.log(results);

        // Perform your additional processing on 'results' here

        // Optionally, you can remove the temporary file after processing
        fs.unlinkSync(file.path);

        res.send("CSV file processed successfully");
      });
  } else {
    res.status(400).send("No file uploaded");
  }
});

export default portfolioRoutes;
