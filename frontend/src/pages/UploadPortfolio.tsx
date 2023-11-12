import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import axios from "axios";
import { DropzoneAreaBase } from "material-ui-dropzone";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UploadPortfolio.css";

interface FileObject {
  file: File;
}

function UploadPortfolio() {
  const [fileObjects, setFileObjects] = useState<FileObject[]>([]);
  const navigate = useNavigate();

  const handleSubmit = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    const response = await axios.post(
      "http://localhost:3000/portfolio/upload-csv",
      formData
    );
    navigate("/score", { state: { Payload: response.data } });
  };

  const renderInstructions = () => (
    <>
      <h2>
        <strong>Algorithmic Evaluation for ESG Score and Rating:</strong>
      </h2>
      <p>
        Once your portfolio is uploaded, our platform employs a sophisticated
        algorithm to assess the
        <strong> Environmental, Social, and Governance (ESG)</strong>{" "}
        performance of each company within your holdings. This algorithm
        considers a variety of factors to determine the ESG score, providing a
        holistic view of how well a company aligns with sustainable and
        responsible business practices.
      </p>
      <h2>
        <strong>Components of the Algorithm:</strong>
      </h2>

      <ul className="no-bullets">
        <li>
          <strong>🌿 &nbsp; Environmental Factors:</strong> Examination of a
          company's environmental impact, including its carbon footprint,
          resource usage, and sustainability efforts.
        </li>
        <li>
          <strong>👥 &nbsp; Social Factors:</strong> Evaluation of a company's
          social responsibility, considering aspects such as employee relations,
          diversity, and community engagement.
        </li>
        <li>
          <strong>📜 &nbsp; Governance Factors:</strong> Analysis of a company's
          governance structure, leadership quality, transparency, and adherence
          to ethical business practices.
        </li>
      </ul>
    </>
  );

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
          {fileObjects.length === 0 ? (
            <>
              <h1>
                <strong>
                  Upload Your Yahoo Finance Portfolio For Evaluation 📈
                </strong>
              </h1>
              {renderInstructions()}
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
              >
                <DropzoneAreaBase
                  dropzoneParagraphClass="dropZoneParagraph"
                  showAlerts={true}
                  dropzoneClass="dropzone-container"
                  dropzoneParagraphClass="dropzone-paragraph"
                  acceptedFiles={["text/csv"]}
                  fileObjects={fileObjects}
                  onAdd={(newFileObjects) => setFileObjects(newFileObjects)}
                  onDelete={() => setFileObjects([])}
                  showPreviewsInDropzone={true}
                  filesLimit={1}
                  showFileNames={true}
                  dropzoneText={"Upload your finance portfolio..."}
                />
              </Box>
              <Button variant="contained" className="upload-btn">
                Analyze Portfolio
              </Button>
            </>
          ) : (
            <>
              <h1>Upload Your Portfolio For Evaluation</h1>
              {renderInstructions()}
              <Paper
                sx={{
                  padding: "10px",
                  backgroundColor: "#565656",
                  color: "white",
                  margin: "40px 0 20px 0",
                }}
                elevation={1}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={10}>
                  <Typography
                    textAlign={"left"}
                    fontWeight={"bolder"}
                    sx={{ flexGrow: 1 }}
                  >
                    Selected File: {fileObjects[0].file.name}
                  </Typography>
                  <Button
                    onClick={() => setFileObjects([])}
                    variant="contained"
                  >
                    Change File
                  </Button>
                </Stack>
              </Paper>
              <Button
                onClick={() => handleSubmit(fileObjects[0].file)}
                variant="contained"
              >
                Analyze Portfolio
              </Button>
            </>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default UploadPortfolio;
