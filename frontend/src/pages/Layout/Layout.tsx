import { Link, Outlet, useNavigate} from 'react-router-dom';
import { AppBar, Button, Container, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import UploadIcon from '@mui/icons-material/Upload';

const Layout = () => {
    const navigate = useNavigate()
    return (
        <>
            <AppBar style={{flexGrow: 1, backgroundColor: "rgba(51, 48, 48,0.9)", backdropFilter: "blur(3px)"}} position='fixed'>
                <Toolbar style={{opacity: "100%"}}>
                    <IconButton size='large' color='inherit' edge='start'>
                        <UploadIcon/>
                    </IconButton>
                    <Typography variant='h6' component='div' sx={{ flexGrow: 1}}> 
                        Man U
                    </Typography>
                    <Stack direction='row' spacing={2}>
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