import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField, Typography } from "@mui/material";
import LOGO from '../../assets//admins//logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from "react";
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

    const [open, setOpen] = React.useState(false); 

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleAdminLogin = () => {
      navigate('/loginAdmin');
      handleClose();
    };
  
    const handleUserLogin = () => {
      navigate('/loginUser');
      handleClose();
    };
    return (
      <div>
        <Grid container>
          <Grid container item style={{backgroundColor: '#075755'}}>
            <Grid item xs={1/2}></Grid>

            <Grid item xs={5/2} sx={{display: 'flex', justifyContent: 'center'}}>
              <img width={220} src={LOGO} alt="logo" />
              <Typography sx={{color:'white', fontSize: 20, fontWeight: 600 ,position: 'fixed', top: 16, left: 380, borderLeft: 2, pl: 2}}>
              PHẦN MỀM QUẢN LÝ NHÀ TRỌ
              </Typography>
            </Grid>

            <Grid item xs={4}></Grid>

            <Grid item xs={1} sx={{display: 'flex', justifyContent: 'center'}}>
              <Button sx={{color: 'white', fontWeight: 600, fontSize: 18}}>
                trang chủ
              </Button>
            </Grid>
            <Grid item xs={1} sx={{display: 'flex', justifyContent: 'center'}}>
              <Button sx={{color: 'white', fontWeight: 600, fontSize: 18}}>
                liên hệ
              </Button>
            </Grid>
            <Grid item xs={1} sx={{display: 'flex', justifyContent: 'center'}}>
              <Button sx={{color: 'white', fontWeight: 600, fontSize: 18}}>
                giới thiệu
              </Button>
            </Grid>
            <Grid item xs={1} sx={{display: 'flex', justifyContent: 'center'}}>
              <Button sx={{color: 'white', fontWeight: 600, fontSize: 18}}>
                hỗ trợ
              </Button>
            </Grid>
            <Grid item xs={1}></Grid>

          </Grid>
            <Grid item xs={12} sx={{
            backgroundImage: `url(https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-031.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 815, 
            }}>
                <Typography variant="h4" align="center" sx={{fontWeight: 600, m: 'auto', width: 1000, mt: 15, color: '#075755'}}>
                    PHẦN MỀM QUẢN LÝ NHÀ TRỌ HIỆU QUẢ NHẤT 2024 !
                    CHÚNG TÔI KHÔNG KHIẾN BẬT THẤT VỌNG !
                </Typography>
                <Typography variant="h5" align="center" sx={{fontWeight: 600, color: 'gray', width: 1000, m: 'auto', mt: 5}}>
                    Phần mềm quản lý nhà trọ của chúng tôi cho phép bạn quản lý một cách logic hơn trong công việc, đơn giản nhưng hiệu quả, tối ưu và tiết kiệm thời gian.
                    Liên hệ ngay với chúng tôi để được tư vấn cũng như nhận được nhiều ưu đãi.
                </Typography>
                <Button sx={{m: "auto", display: 'block', mt: 15, fontSize: 20, fontWeight: 600, bgcolor:'#075755'}} variant='contained' size="large" onClick={handleOpen}>
                    ĐĂNG NHẬP
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>CHỌN TÀI KHOẢN ĐĂNG NHẬP VÀO HỆ THỐNG</DialogTitle>
                    <DialogContent>
                    <Button variant='contained' onClick={handleAdminLogin} sx={{display: 'block', m: 'auto', mb: 3, mt: 4, width: 200, bgcolor:'#075755'}}>
                        Người quản lý
                    </Button>

                    <Button variant="contained" onClick={handleUserLogin} sx={{display: 'block', m: 'auto', width: 200, bgcolor:'#075755'}}>
                        Người thuê trọ
                    </Button>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose}>Hủy</Button>
                    </DialogActions>
                </Dialog>
                <TextField variant='filled' label='Nhập email để đăng ký ngay' sx={{mt: 15, width: 500}}/>
            </Grid>
            <Grid container item style={{backgroundColor: '#075755', color: 'white', paddingBottom: 2, paddingTop: 2}}>
                <Grid item xs={3}>
                  <img width={120} src={LOGO} alt="logo" />
                  <Typography mt={-1}>
                  PHẦN MỀM QUẢN LÝ NHÀ TRỌ 
                  </Typography>
                </Grid>
                <Grid item xs={4}></Grid>

                <Grid item xs={1}>
                    <Typography m={0.1}>
                    Facebook
                    </Typography>
                    <FacebookIcon />
                </Grid>
                <Grid item xs={1}>
                <Typography m={0.1}>
                    YouTube
                    </Typography>
                    <YouTubeIcon />
                </Grid>
                <Grid item xs={1}>
                <Typography m={0.1}>
                    Twitter
                    </Typography>
                    <TwitterIcon />
                </Grid>
                <Grid item xs={1}>
                <Typography m={0.1}>
                    Instagram
                    </Typography>
                    <InstagramIcon />
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </Grid>
      </div>
    );
  }
  
  export default Main;