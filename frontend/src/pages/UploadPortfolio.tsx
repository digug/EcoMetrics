import React from "react";
import { useState, useEffect } from "react";
import { Button, Paper, Typography } from "@mui/material";
import UploadIcon from '@mui/icons-material/Upload';
import Grid from "@mui/material/Grid";
import { DropzoneAreaBase } from "material-ui-dropzone";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import "../styles/UploadPortfolio.css"
import { Route } from "@mui/icons-material";

function UploadPortfolio () {
    const [fileObjects, setFileObjects] = useState<any>([])
   
    if (fileObjects.length == 0) {
        return(
            <div className="container">
                
                <Grid container direction="column" alignItems="center" justifyContent='center'  spacing={3} >
                    <h1> Upload Your Portfolio For Evaluation</h1>
                    <Grid item>
                        <p>
                            Provide us with a exported Yahoo finance portfolio and we will 
                            rate your protfolio on its ESG impact. we also provide ratings for each the companies 
                            you invest in.
                        </p>
                    </Grid>
                    
                    
                    <Grid item style={{width: "70%", height: "70%", color:"black", }} >
                        <DropzoneAreaBase
                        
                            dropzoneParagraphClass="dropZoneParagraph"
                        
                            fileObjects={fileObjects}
                            onAdd={(portfolioFile) => { setFileObjects([portfolioFile])}}
                            onDelete={() => {setFileObjects([])}}
                            showPreviewsInDropzone={true}
                            filesLimit={1}
                            showFileNames={true}
                            dropzoneText={"Upload Yahoo finance portfolio..."} 
                                                    
                        />
                    </Grid>
                    <Grid item >
                        <Button variant="contained">Analyze Portfolio</Button>
                    </Grid>


                </Grid>
                
            </div>
        )
    }
    else {
        return( 
            <div className="container">
                
            <Grid container direction="column" alignItems="center" justifyContent='center'  spacing={3} >
                <h1> Upload Your Portfolio For Evaluation</h1>
                <Grid item>
                    <p>
                    <p>A Yahoo Finance portfolio typically includes a list of assets you own, accompanied by relevant financial metrics and performance indicators. Ensure that your portfolio file contains detailed information about each holding, such as stock ticker symbols, quantities, purchase prices, and current market values. The more comprehensive the data, the more accurate and insightful our evaluation can be.</p>

<h2><strong>Algorithmic Evaluation for ESG Score and Rating:</strong></h2>

<p>Once your portfolio is uploaded, our platform employs a sophisticated algorithm to assess the <strong>Environmental, Social, and Governance (ESG)</strong> performance of each company within your holdings. This algorithm considers a variety of factors to determine the ESG score, providing a holistic view of how well a company aligns with sustainable and responsible business practices.</p>

<h3><strong>Components of the Algorithm:</strong></h3>

<ol>
  <li><strong>Environmental Factors:</strong> Examination of a company's environmental impact, including its carbon footprint, resource usage, and efforts towards sustainability.</li>
  <li><strong>Social Factors:</strong> Evaluation of a company's social responsibility, considering aspects such as employee relations, diversity/inclusion, and community engagement.</li>
  <li><strong>Governance Factors:</strong> Analysis of a company's governance structure, leadership quality, transparency, and adherence to ethical business practices.</li>
</ol>

                    </p>
                </Grid>
                
                
                <Grid item style={{width: "70%", height: "70%", color:"black", }} >
                    <Paper elevation={1}>
                        <Typography>
                            {fileObjects[0].name}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item >
                    <Button variant="contained">Analyze Portfolio</Button>
                </Grid>
            

            </Grid>
            
        </div>
        )
    }
}

export default UploadPortfolio