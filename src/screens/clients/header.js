import { Box, Typography, Grid, Button, IconButton, Badge } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CircleNotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import { useNavigate } from 'react-router-dom';
const { INFO } = require('../../SAMPLE-DATA.js');


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const Header = ({Page, color}) => {
    const navigate = useNavigate();

    const nameMotel = INFO.nameMotel
    const userName = INFO.userName

    const [open, setOpen] = useState(false);
    const [notify, setnotify] = useState("!");

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setnotify(null);
      setOpen(false);
    };

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
                <Grid item xs={6}></Grid>

                <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                <IconButton sx={{color: 'white', fontSize: 18}} onClick={() =>{Page(0)}}>
                    <Typography sx={{fontWeight: 600}}>
                      {userName.toUpperCase()}
                    </Typography>
                    <PersonIcon sx={{ mt: -0.5, ml: 1}}/>
                  </IconButton>
                </Grid>
                <Grid item xs={1} sx={{display: 'flex' ,justifyContent: 'end'}}>
                  <IconButton sx={{color: 'white', fontSize: 18}} onClick={() =>{Page(1)}}>
                    <Typography sx={{fontWeight: 600}}>THIẾT BỊ IOT</Typography>
                    <OfflineBoltIcon sx={{ mt: -0.2, ml: 1}}/>
                  </IconButton>
                </Grid>
                <Grid item xs={1} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                  <IconButton onClick={handleClickOpen} sx={{color: 'white', fontSize: 18}}>
                    <Badge anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                    }}
                    badgeContent={notify} color="error">
                      <Typography sx={{fontWeight: 600}}>THÔNG BÁO</Typography> 
                      <CircleNotificationsIcon sx={{color: 'white', mt: -0.2, ml: 1}}/>  
                    </Badge>
                  </IconButton>

                  <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                  >
                    <DialogTitle sx={{ m: 0, p: 2, fontWeight: 600 }} id="customized-dialog-title">
                      THÔNG BÁO TỪ CHỦ TRỌ
                    </DialogTitle>
                    <IconButton
                      aria-label="close"
                      onClick={handleClose}
                      sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                      }}
                    >
                    </IconButton>
                    <DialogContent dividers>
                      <Typography gutterBottom sx={{fontStyle: 'italic'}}>
                        {INFO.timeNotice}
                      </Typography>
                      <Typography gutterBottom>
                        {INFO.notice}
                      </Typography>
                    </DialogContent>
                    <DialogActions>
                      <Button autoFocus onClick={handleClose}>
                        Xong
                      </Button>
                    </DialogActions>
                  </BootstrapDialog>
                </Grid>
                <Grid item xs={1} sx={{display: 'flex', justifyContent: 'end'}}>
                <IconButton sx={{color: 'white'}} onClick={() => {
                    if (window.confirm("Bạn có chắc chắn muốn đăng xuất ?")) {
                      navigate('/loginUser');
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