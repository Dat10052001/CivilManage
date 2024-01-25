import { Box, Typography, Grid, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
const { INFO } = require('../../SAMPLE-DATA.js');


const Header = ({color}) => {
    const navigate = useNavigate();

    const nameMotel = INFO.nameMotel
    const userName = INFO.userName

    return (
      <div>
        <Box  
            component="header"
            sx={{
                backgroundColor: color,
                color: 'primary.contrastText',
                padding: '0.2rem',
                textAlign: 'center',
                position: 'fixed',
                top: 0,
                right: 0,
                width: '100%',
            }}
          >
            <Grid container sx={{ alignItems: 'center',justifyContent:"space-between"}}>
            <Grid item xs={0.5}></Grid>
                <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Typography>
                    <Typography sx={{fontSize: 15}}>
                      <HomeIcon sx={{ mb: -0.2, mr: 0.5, fontSize: 15}}/>
                      Đơn Vị
                    </Typography>
                    <Typography sx={{fontWeight: 600}}>{nameMotel.toUpperCase()}</Typography>
                </Typography>
                </Grid>

                {/* SPACING */}
                <Grid item xs={7}></Grid>

                <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                <IconButton sx={{color: 'white', fontSize: 18}}>
                    <Typography sx={{fontWeight: 600}}>
                      {userName.toUpperCase()}
                    </Typography>
                    <PersonIcon sx={{ mt: -0.5, ml: 1}}/>
                  </IconButton>
                </Grid>

                <Grid item xs={1} sx={{display: 'flex', justifyContent: 'end'}}>
                <IconButton sx={{color: 'white'}} onClick={() => {
                    if (window.confirm("Bạn có chắc chắn muốn đăng xuất ?")) {
                      navigate('/loginAdmin');
                    }}}>
                    <Typography sx={{fontWeight: 600}}>ĐĂNG XUẤT</Typography> 
                    <LogoutIcon sx={{ mt: -0.2, ml: 1}}/>
                  </IconButton>
                </Grid>
                <Grid item xs={0.5}></Grid>
            </Grid>
        </Box>
      </div>
    );
  }
  
  export default Header;