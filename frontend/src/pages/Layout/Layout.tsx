import { Link, Outlet, useNavigate} from 'react-router-dom';
import { AppBar, Button, Container, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import UploadIcon from '@mui/icons-material/Upload';
import logo from '../../assets/PECOM-logos_white.png';

const Layout = () => {
    const navigate = useNavigate()
    return (
        <>
            <AppBar style={{flexGrow: 1, backgroundColor: "rgba(51, 48, 48,0.9)", backdropFilter: "blur(3px)"}} position='fixed'>
                <Toolbar style={{opacity: "100%"}}>

                    <img src={logo} width={75} height={75}/>
                   
                    
                    <Typography  variant='h6' component='h1'  fontWeight={"bold"} sx={{ flexGrow: 1}}> 
                        Portfolio Econometrics
                    </Typography>
                    <Stack direction='row' spacing={5}>
                        <Button color='inherit'> Home</Button>
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