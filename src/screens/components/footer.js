import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, Grid } from '@mui/material';
const { INFO } = require('../../SAMPLE-DATA.js');

function Footer({color}) {

  const { nameOwn, phoneNumber, address } = INFO;
  const colorBg = color

    return (
      <div>
        <Box  
            component="footer"
            sx={{
                backgroundColor: colorBg,
                color: 'primary.contrastText',
                padding: '1rem',
                textAlign: 'center',
                position: 'fixed',
                left: 0,
                bottom: 0,
                width: '100%',
            }}
          >
            <Grid container spacing={0}>
                <Grid  item xs={6} variant="body1">
                    <PhoneIcon sx={{mb: -0.5, fontSize: 20 }}/>{' '} Thông tin liên hệ : Chủ nhà trọ {nameOwn} (Điện thoại hoặc Zalo : {phoneNumber})
                </Grid>
                <Grid item xs={6} variant="body1">
                    <LocationOnIcon sx={{mb: -0.5, fontSize: 20 }}/> Địa chỉ : {address}
                </Grid>
            </Grid>
        </Box>
      </div>
    );
  }
  
  export default Footer;