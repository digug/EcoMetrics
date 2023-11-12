import React from "react";
import { useState } from "react";
import { Button } from "@mui/material";
import UploadIcon from '@mui/icons-material/Upload';
import Grid from "@mui/material/Grid";
import { DropzoneArea } from "material-ui-dropzone";
function UploadPortfolio () {

    return(
        <div>
            
            <Grid container direction="row" alignItems="center" justifyContent="center" spacing={3}>
                <Grid item >
                <Button variant="contained" endIcon={<UploadIcon/>}>Upload File</Button>
                </Grid>
                <Grid item >
                    <DropzoneArea/>
                </Grid>

            </Grid>
            
        </div>
    )
}

export default UploadPortfolio