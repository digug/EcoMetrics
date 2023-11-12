import { Link, Outlet, useNavigate} from 'react-router-dom';
import { AppBar, Button, Container, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import UploadIcon from '@mui/icons-material/Upload';
import logo from '../../assets/PECOM-logos_white.png';
import { Box } from '@material-ui/core';

const Layout = () => {
    const navigate = useNavigate()
    return (
        <>
            <AppBar style={{flexGrow: 1, backgroundColor: "rgba(51, 48, 48,0.9)", backdropFilter: "blur(3px)"}} position='fixed'>
                <Toolbar style={{opacity: "100%"}}>

                    <img src={logo} width={75} height={75} style={{marginTop: "10px"}}/>
                   
                    
                    <Typography  variant='h5' component='div' align='left'  fontWeight={900} sx={{ flexGrow: 1, }}> 
                        <Box fontWeight='bold'>Portfolio Econometrics</Box>
                    </Typography>
                    <Stack direction='row' spacing={5}>
                        <Button onClick={() => {navigate("/")}} color='inherit'> Home</Button>
                        <Button color='inherit'> About</Button>
                        <Button onClick={() => {navigate("/evaluate")}} color='inherit'> Evaluate My Portfolio </Button>
                    </Stack>
                    
                    {/* <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/evaluate">Evaluate Your Portfolio</Link> */}
            
                </Toolbar>
                </AppBar>
            <Outlet/>
        </>
      
    )
}
export default Layout