import { Button, Paper, Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { DropzoneAreaBase } from "material-ui-dropzone";
import { useState } from "react";
import "../styles/UploadPortfolio.css";
import { useNavigate } from "react-router-dom";
const navigate = useNavigate();
const handleSubmit = async (file: File) => {
  
  const formData = new FormData();
  formData.append("file", file);
  navigate("/score");
  const response = await axios.post(
    "http://localhost:3000/portfolio/upload-csv",
    formData
  );
  
  console.log(response);
};

function UploadPortfolio() {
  const [fileObjects, setFileObjects] = useState<FileObject[]>([]);

  if (fileObjects.length == 0) {
    return (
      <div className="container">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={3}
        >
          <Grid item>
            <h1>
              <strong>
                Upload Your Yahoo Finance Portfolio For Evaluation 📈
              </strong>
            </h1>

            <h2>
              <strong>Algorithmic Evaluation for ESG Score and Rating:</strong>
            </h2>

            <p>
              Once your portfolio is uploaded, our platform employs a
              sophisticated algorithm to assess the{" "}
              <strong>Environmental, Social, and Governance (ESG)</strong>{" "}
              performance of each company within your holdings. This algorithm
              considers a variety of factors to determine the ESG score,
              providing a holistic view of how well a company aligns with
              sustainable and responsible business practices.
            </p>

            <h2>
              <strong>Components of the Algorithm:</strong>
            </h2>

            <ol>
              <li>
                <strong>Environmental Factors:</strong> Examination of a
                company's environmental impact, including its carbon footprint,
                resource usage, and sustainability efforts. 🌿
              </li>
              <li>
                <strong>Social Factors:</strong> Evaluation of a company's
                social responsibility, considering aspects such as employee
                relations, diversity, and community engagement. 👥
              </li>
              <li>
                <strong>Governance Factors:</strong> Analysis of a company's
                governance structure, leadership quality, transparency, and
                adherence to ethical business practices. 📜
              </li>
            </ol>
          </Grid>
          <Grid item style={{ width: "70%", height: "70%", color: "black" }}>
            <DropzoneAreaBase
              dropzoneParagraphClass="dropZoneParagraph"
              fileObjects={fileObjects}
              onAdd={(portfolioFile) => {
                setFileObjects(portfolioFile);
              }}
              onDelete={() => {
                setFileObjects([]);
              }}
              showPreviewsInDropzone={true}
              filesLimit={1}
              showFileNames={true}
              dropzoneText={"Upload Yahoo finance portfolio..."}
            />
          </Grid>
          <Grid item>
            <Button variant="contained">Analyze Portfolio</Button>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return (
      <div className="container">
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={3}
        >
          <h1> Upload Your Portfolio For Evaluation</h1>
          <Grid item>
            `{" "}
            <p>
              A Yahoo Finance portfolio typically includes a list of assets you
              own, accompanied by relevant financial metrics and performance
              indicators. Ensure that your portfolio file contains detailed
              information about each holding, such as stock ticker symbols,
              quantities, purchase prices, and current market values. The more
              comprehensive the data, the more accurate and insightful our
              evaluation can be.
            </p>
            <h2>
              <strong>Algorithmic Evaluation for ESG Score and Rating:</strong>
            </h2>
            <p>
              Once your portfolio is uploaded, our platform employs a
              sophisticated algorithm to assess the{" "}
              <strong>Environmental, Social, and Governance (ESG)</strong>{" "}
              performance of each company within your holdings. This algorithm
              considers a variety of factors to determine the ESG score,
              providing a holistic view of how well a company aligns with
              sustainable and responsible business practices.
            </p>
            <h3>
              <strong>Components of the Algorithm:</strong>
            </h3>
            <ol>
              <li>
                <strong>Environmental Factors:</strong> Examination of a
                company's environmental impact, including its carbon footprint,
                resource usage, and efforts towards sustainability.
              </li>
              <li>
                <strong>Social Factors:</strong> Evaluation of a company's
                social responsibility, considering aspects such as employee
                relations, diversity/inclusion, and community engagement.
              </li>
              <li>
                <strong>Governance Factors:</strong> Analysis of a company's
                governance structure, leadership quality, transparency, and
                adherence to ethical business practices.
              </li>
            </ol>
            `
          </Grid>

          <Grid item style={{ width: "50%", height: "50%", color: "black" }}>
            <Paper sx={{padding: '10px'}} elevation={1}>
              
              <Stack direction={'row'} alignItems={'center'} spacing={10}>
                <Typography textAlign={'left'} fontWeight={'bolder'} sx={{flexGrow:1}}>
                  Selected File: {fileObjects[0].file.name}
                </Typography>
                <Button 
                onClick={() => {setFileObjects([])}}
                variant="outlined">
                  Change File
                </Button>
              </Stack>
            
            </Paper>
          </Grid>
          <Grid item>
            <Button
              onClick={() => handleSubmit(fileObjects[0].file)}
              variant="contained"
            >
              Analyze Portfolio
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default UploadPortfolio;
