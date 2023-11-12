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

        // Perform your additional processing on 'results' here

        // Remove the temporary file after processing
        fs.unlink(file.path, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
          } else {
            console.log("File deleted successfully");
          }
        });
        const companyNames: Array<string> = [];
        results.forEach((element, i) => {
          if (i !== 0) {
            companyNames.push(element[0]);
          }
        });
        console.log(companyNames);
        res.send("CSV file processed successfully");
      });
  } else {
    res.status(400).send("No file uploaded");
  }
});

export default portfolioRoutes;
