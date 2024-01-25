import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Footer from '../components/footer'
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
const { INFO } = require('../../SAMPLE-DATA.js');


const defaultTheme = createTheme();
const nameMotel = INFO.nameMotel
const phoneNumberSample = '0862551211'
const passwordSample = '0862551211'

const SignInSide = () => {
  const navigate = useNavigate();

  const [error1,setError1] = React.useState();
  const [error2,setError2] = React.useState();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  };

  function closeError(){
    setError1();
    setError2();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const phoneNumber = data.get('phonenumber');
    const password = data.get('password');

    if (!phoneNumber) {
      setError1('Vui lòng điền số điện thoại');
      return;
    }
    
    else if (!password) {
      setError2('Vui lòng điền mật khẩu');
      return;
    }

    else {

      if(phoneNumber !== phoneNumberSample){
        setError1('Số điện thoại chưa đăng ký');
      }

      else if(password !== passwordSample){
        setError2('Mật khẩu không đúng');
      }

      else{
        alert("Đăng Nhập Thành Công !")
        navigate('/mainAdmin');
      }
    }
  };

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  function isPhoneNumberValid(phoneNumber, code) {
    const phoneNumberRegex = /^0\d{9,10}$/;
    if (phoneNumberRegex.test(phoneNumber)) {
      if(code === 1){
        alert("Đổi mật khẩu thành công !")
        handleClose1();
      }
      else{
        alert("Đăng ký thành công !")
        handleClose();
      }
    } else {
      alert("Số điện thoại của bạn không hợp lệ! Vui lòng kiểm tra lại.");
    }
  }
  
  const handlePhoneNumberValidation = (code) => {
    const phoneNumberInput = document.getElementById("sdt2");
    const phoneNumber = phoneNumberInput.value;
    isPhoneNumberValid(phoneNumber, code);
  };

  const handlePhoneNumberValidation1 = (code) => {
    const phoneNumberInput = document.getElementById("sdt1");
    const phoneNumber = phoneNumberInput.value;
    isPhoneNumberValid(phoneNumber, code);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }} onClick={closeError}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://wallpapercave.com/wp/wp5911082.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography color='secondary' variant="h3" sx={{mb: 10, fontWeight: 'bold', width: 600, textAlign: 'center'}}>
              <HomeIcon sx={{fontSize: 55, marginBottom: -1}}/>
              {' '}
              {nameMotel.toUpperCase()}
              <hr style={{height: 2}}/>
            </Typography>
            
            <Typography component="h1" variant="h5" sx={{mb: 1, fontSize: 30}}>
              ĐĂNG NHẬP {' '}<PersonIcon sx={{fontSize: 35, mb: -1}} />
            </Typography>
            <Typography sx={{fontSize: 15, mb: 5, color: '#9c27b0', fontStyle: 'italic' }}>
              Phiên bản dành cho người quản lý
            </Typography>
            
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="phonenumber"
                label="Số điện thoại"
                name="phonenumber"
                autoComplete="phonenumber"
                color='secondary'
                autoFocus
                sx={{width: 500}}
              />
              <Typography sx={{position: 'absolute', color: 'red', fontSize: 15, right: 160, top: 405}}>{error1 && <ErrorOutlineIcon sx={{mb: -0.75}}/>} {error1}</Typography>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                color='secondary'
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="password"
                sx={{width: 500, display: 'block'}}
              />
              <Typography sx={{position: 'absolute', color: 'red', fontSize: 15, right: 160, top: 485}}>{error2 && <ErrorOutlineIcon  sx={{mb: -0.75}}/>} {error2}</Typography>
              <Typography sx={{position: 'absolute', color: '#9c27b0', fontSize: 16, right: 490, top: 535}}>
              <Checkbox color='secondary' sx={{mt: -0.5}} checked={showPassword} onChange={handleCheckboxChange}/>
                HIỆN MẬT KHẨU
              </Typography>
              <Grid item xs>
                  <Typography href="#" variant="body2" sx={{ml: 42  }}>
                  <React.Fragment>
                        <Button variant="text" onClick={handleClickOpen1} color='secondary'>
                          <Typography>Quên mật khẩu ?</Typography>
                        </Button>
                        <Dialog open={open1} onClose={handleClose1}>
                          <DialogTitle>Nhập số điện thoại của bạn</DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              Chúng tôi sẽ gửi mật khẩu thông qua tin nhắn. Hãy check tin nhắn sau khi bấm nút gửi.
                            </DialogContentText>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="sdt1"
                              type="string"
                              variant="standard"
                              color='secondary'
                              fullWidth
                            />
                          </DialogContent>
                          <DialogActions>
                            <Button color='secondary' onClick={handleClose1}>Đóng</Button>
                            <Button color='secondary' onClick={() => handlePhoneNumberValidation1(1)}>Gửi</Button> 
                          </DialogActions>
                        </Dialog>
                      </React.Fragment>
                  </Typography>
              </Grid>
              <Grid item sx={{textAlign: 'center'}}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color='secondary'
                  sx={{ mt: 5, mb: 5, fontSize: 15, width: 200, height: 50}}
                >
                  ĐĂNG NHẬP
                </Button>
              </Grid>

              <Grid container justifyContent="center" sx={{mt: 12}}>
                <Grid item sx={{textAlign: 'center'}}> 
                  <Typography>
                    Nếu chưa có tài khoản ? Vui lòng
                    
                      <React.Fragment>
                        <Button variant="text" color='secondary' onClick={handleClickOpen} sx={{fontSize: 20, mt: -0.1}}>
                          <Typography>Liên Hệ</Typography>
                        </Button>
                        <Dialog open={open} onClose={handleClose}>
                          <DialogTitle>Nhập số điện thoại của bạn</DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              Chúng tôi sẽ gửi thông tin liện hệ thông qua tin nhắn.
                            </DialogContentText>
                            <TextField
                              autoFocus
                              margin="dense"
                              id="sdt2"
                              type="string"
                              variant="standard"
                              color='secondary'
                              fullWidth
                            />
                          </DialogContent>
                          <DialogActions>
                            <Button color='secondary' onClick={handleClose}>Đóng</Button>
                            <Button color='secondary' onClick={() => handlePhoneNumberValidation(2)}>Gửi</Button>
                          </DialogActions>
                        </Dialog>
                      </React.Fragment>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Footer color={'#9c27b0'}/>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;