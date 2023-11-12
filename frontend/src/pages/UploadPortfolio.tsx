import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import UploadIcon from '@mui/icons-material/Upload';
import Grid from "@mui/material/Grid";
import { DropzoneArea } from "material-ui-dropzone";
import { createStyles, makeStyles } from '@material-ui/core/styles';
import "../styles/UploadPortfolio.css"
import { Route } from "@mui/icons-material";

function UploadPortfolio () {
    
    return(
        <div>
            
            <Grid container direction="column" alignItems="center"  spacing={3} >
                <h1> Upload Your Portfolio For Evaluation</h1>
                <Grid item>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu tempus justo. 
                    Cras euismod cursus justo, at sodales urna sodales eget. Praesent vestibulum non orci semper 
                    ultricies. Duis ullamcorper augue eu mauris ultrices tincidunt. Aenean in quam pretium, feugiat 
                    mauris sed, dictum quam. Pellentesque ut elementum ante. Aliquam dapibus nisi a ligula iaculis, 
                    ac fermentum nibh mattis. Morbi sed posuere lacus. Vestibulum fermentum pellentesque libero vel 
                    facilisis. Aenean bibendum arcu sed velit dictum, quis efficitur lacus tempor.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu tempus justo. 
                    Cras euismod cursus justo, at sodales urna sodales eget. Praesent vestibulum non orci semper 
                    ultricies. Duis ullamcorper augue eu mauris ultrices tincidunt. Aenean in quam pretium, feugiat 
                    mauris sed, dictum quam. Pellentesque ut elementum ante. Aliquam dapibus nisi a ligula iaculis, 
                    ac fermentum nibh mattis. Morbi sed posuere lacus. Vestibulum fermentum pellentesque libero vel 
                    facilisis. Aenean bibendum arcu sed velit dictum, quis efficitur lacus tempor.

                    Nunc a urna pretium, fringilla lorem a, lobortis tortor. Ut mi nibh, feugiat a nulla sit amet, finibus faucibus nibh. 
                    Aliquam convallis quam id nulla malesuada, at elementum dui commodo. Nulla nec mauris ante. 
                    Proin eros nulla, varius vel justo eu, efficitur elementum nulla. Morbi tellus est, 
                    tempor vitae ligula ac, maximus suscipit diam. Sed semper vitae odio sit amet eleifend. 
                    Maecenas vel fermentum diam. Donec ullamcorper velit sollicitudin, tristique dolor non, 
                    venenatis justo. Mauris sed metus id erat convallis vulputate. Vestibulum egestas nisl metus, 
                    tempus facilisis turpis aliquet vulputate. Nam vitae orci pulvinar, pulvinar metus et, tristique arcu.
                    </p>
                </Grid>
                <Grid item style={{width: "70%", height: "80%", fontWeight: "bolder" }} >
                    <DropzoneArea dropzoneClass="paragraph"
                        dropzoneText={"Upload yahoo finance portfolio"} 
                        dropzoneParagraphClass="paragraph"
                        
                    />
                </Grid>
                <Grid item  >
                    <Button variant="contained">Analyze Portfolio</Button>
                </Grid>
               

            </Grid>
            
        </div>
    )
}

export default UploadPortfolio