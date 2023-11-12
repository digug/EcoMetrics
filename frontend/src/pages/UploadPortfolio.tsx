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
                        Provide us with a exported Yahoo finance portfolio and we will 
                        rate your protfolio on its ESG impact. we also provide ratings for each the companies 
                        you invest in.
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