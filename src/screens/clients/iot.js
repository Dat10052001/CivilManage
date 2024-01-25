import { Box, Grid, TextField, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";
import Switch from '@mui/material/Switch';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import CloudIcon from '@mui/icons-material/Cloud';
import LightModeIcon from '@mui/icons-material/LightMode';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import React, { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { FormControl } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import DvrIcon from '@mui/icons-material/Dvr';

const LogLine = ({date, activity}) => {
  return (
    <Grid container mb={2}>
      <Grid xs={6}>
        <Typography sx={{fontSize: 18, fontStyle: 'italic'}}>
          {date}
        </Typography>
      </Grid>
      <Grid xs={1}></Grid>
      <Grid xs={5}>
      <Typography sx={{fontSize: 18, fontWeight: 600}}>
          {activity}
        </Typography>
      </Grid>
    </Grid>
  );
};

const IoT = () => {

  const temp = '25'
  const humid = '55'
  const light = '400'

  const [log, setLog] = useState([]);
  const [switchAir, setSwitchAir] = useState(false);
  const [switchLight1, setSwitchLight1] = useState(false);
  const [switchLight2, setSwitchLight2] = useState(false);
  const [setting, setSetting] = useState(false);
  const [isSwitchDisabled, setIsSwitchDisabled] = useState(false);

  const stateAir = switchAir ? 'BẬT' : 'TẮT';
  const stateLight1 = switchLight1 ? 'BẬT' : 'TẮT';
  const stateLight2 = switchLight2 ? 'BẬT' : 'TẮT';

  const handleSwitchAir = () => {
    setSwitchAir(!switchAir);
    setIsSwitchDisabled(true);

    setTimeout(() => {
      setIsSwitchDisabled(false);
    }, 3000);
    const newLog = {
      date: new Date().toLocaleString(),
      activity: switchAir ? 'Tắt máy lạnh' : 'Bật máy lạnh'
    };
    setLog([...log, newLog]);
  };
  const handleSwitchLight1 = () => {
    setSwitchLight1(!switchLight1);
    setIsSwitchDisabled(true);

    setTimeout(() => {
      setIsSwitchDisabled(false);
    }, 1000);

    const newLog = {
      date: new Date().toLocaleString(),
      activity: switchLight1 ? 'Tắt đèn 1' : 'Bật đèn 1'
    };
    setLog([...log, newLog]);
  };
  const handleSwitchLight2 = () => {
    setSwitchLight2(!switchLight2);
    setIsSwitchDisabled(true);

    setTimeout(() => {
      setIsSwitchDisabled(false);
    }, 1000);

    const newLog = {
      date: new Date().toLocaleString(),
      activity: switchLight2 ? 'Tắt đèn 2' : 'Bật đèn 2'
    };
    setLog([...log, newLog]);
  };
  const handleSwitchSetting = () => {
    setSetting(!setting);
  };


  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [password, setPassword] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  React.useEffect(() => {
    if (!isDialogOpen) {
      setPassword('');
    }
  }, [isDialogOpen]);

  const handleSwitchChange = (event) => {
    setIsSwitchOn(event.target.checked);
    if (event.target.checked) {
      setIsDialogOpen(true);
    } else {
      setIsDialogOpen(false);
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setIsSwitchOn(false);
    setPassword('');
  };

  const handleDialogConfirm = () => {
    if (password === '0862551211') { 
      setIsDialogOpen(false);
    } else {
      alert('Mật khẩu không đúng!');
    }
  };
    return (
      <div>
        <Box sx={{
        position: 'fixed',
        top: 100,
        width: '100%',
        }}>
          <Grid container spacing={0} height={750} display={'flex'} justifyContent={'space-around'}>
            <Grid item xs={1/2}>
            </Grid>
            <Grid item xs={3}>
              <Typography sx={{fontSize: 30, color:'#1976d2', fontWeight: 600, mb: 5}}>
                THIẾT BỊ IOT
                <DvrIcon sx={{position:'fixed',fontSize: 30, mt: 1, ml: 2}}/>
              </Typography>
              <Grid container>
                <Grid item xs={6} container height={680} direction={'column'} justifyContent={'space-around'} alignItems={'center'} spacing={1}>
                  <CircularProgress size={170} variant="determinate" sx={{position: 'absolute', top: 105}} value={(parseFloat(temp)+5)*2}/>
                  <CircularProgress size={170} variant="determinate" sx={{position: 'absolute', top: 332}} value={humid}/>
                  <CircularProgress size={170} variant="determinate" sx={{position: 'absolute', bottom: 20}} value={parseFloat(light)/10}/>
                  <Grid container direction={'column'} item xs={3} 
                    sx={{border: 14, borderRadius: 25, width: 170,bgcolor: 'white', color: '#1976d2',borderColor: '#deeeee'}}>
                    <Grid item xs={12} sm={6} container justifyContent="center" alignItems="end">
                      <Typography sx={{fontSize: 18, fontWeight: 600}}>
                        <ThermostatIcon sx={{mb: -0.3}}/>
                         NHIỆT ĐỘ
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} container justifyContent="center" alignItems="start">
                      <Typography sx={{fontSize: 18}}>
                        {temp}°C
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container direction={'column'} item xs={3} sx={{border: 14, borderRadius: 250, width: 170 ,bgcolor: 'white', color: '#1976d2',borderColor: '#deeeee'}}>
                    <Grid item xs={12} sm={6} container justifyContent="center" alignItems="end">
                      <Typography sx={{fontSize: 18, fontWeight: 600}}>
                      <CloudIcon sx={{mb: -0.5, mr: 0.8}}/>
                        ĐỘ ẨM
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} container justifyContent="center" alignItems="start">
                      <Typography sx={{fontSize: 18}}>
                        {humid}%
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container direction={'column'} item xs={3} sx={{border: 14, borderRadius: 25, width: 170,bgcolor: 'white', color: '#1976d2',borderColor: '#deeeee'}}>
                    <Grid item xs={12} sm={6} container justifyContent="center" alignItems="end">
                      <Typography sx={{fontSize: 18, fontWeight: 600}}>
                      <LightModeIcon sx={{mb: -0.3, mr: 0.5}}/>
                        ÁNH SÁNG
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} container justifyContent="center" alignItems="start">
                      <Typography sx={{fontSize: 18}}>
                        {light} lux
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} container height={680} direction={'column'} justifyContent={'space-around'} alignItems={'center'} spacing={1}>
                  <Grid container direction={'column'} item xs={3} 
                  sx={{border: 5, borderRadius: 10, width: 200,bgcolor: 'white', color: '#1976d2',
                      borderTopColor: '#deeeee',
                      borderLeftColor: '#deeeee',
                    }}>
                    <Grid item xs={12} sm={6} container justifyContent="center" alignItems="end">
                      <Typography sx={{fontSize: 20, fontWeight: 600}}>
                      <AcUnitIcon sx={{mb: -0.3, mr: 0.5}}/>
                          MÁY LẠNH
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} container justifyContent="center" alignItems="start">
                      <Typography sx={{position: 'static', mt: 1}}>
                        {stateAir}
                      </Typography>
                      <Switch defaultChecked={switchAir} onChange={handleSwitchAir} disabled={isSwitchDisabled}/>
                    </Grid>
                  </Grid>
                  <Grid container direction={'column'} item xs={3} sx={{border: 5, borderRadius: 10, width: 200,bgcolor: 'white', color: '#1976d2',
                     borderTopColor: '#deeeee',
                    borderLeftColor: '#deeeee',}}>
                    <Grid item xs={12} sm={6} container justifyContent="center" alignItems="end">
                      <Typography sx={{fontSize: 20, fontWeight: 600}}>
                      <LightbulbIcon sx={{mb: -0.3, mr: 0.5}}/>
                        ĐÈN 1
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} container justifyContent="center" alignItems="start">
                      <Typography sx={{position: 'static', mt: 1}}>
                        {stateLight1}
                      </Typography>
                        <Switch defaultChecked={switchLight1} onChange={handleSwitchLight1} disabled={isSwitchDisabled}/>
                    </Grid>
                  </Grid>
                  <Grid container direction={'column'} item xs={3} sx={{border: 5, borderRadius: 10, width: 200,bgcolor: 'white', color: '#1976d2',
                     borderTopColor: '#deeeee',
                     borderLeftColor: '#deeeee',}}>
                    <Grid item xs={12} sm={6} container justifyContent="center" alignItems="end">
                      <Typography sx={{fontSize: 20, fontWeight: 600}}>
                      <LightbulbIcon sx={{mb: -0.3, mr: 0.5}}/>
                        ĐÈN 2
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} container justifyContent="center" alignItems="start">
                      <Typography sx={{position: 'static', mt: 1}}>
                        {stateLight2}
                      </Typography>
                      <Switch defaultChecked={switchLight2} onChange={handleSwitchLight2} disabled={isSwitchDisabled}/>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={0.75}></Grid>
            <Grid item xs={4}>
              <Typography sx={{fontSize: 30, color:'#1976d2', fontWeight: 600, mb: 8}}>
                CÀI ĐẶT
                <SettingsIcon sx={{position:'fixed',fontSize: 30, mt: 1, ml: 2}}/>
              </Typography>
              <Grid container direction={'row'} mb={4}>
                <Grid xs={8} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <Typography>
                    THIẾT LẬP NGƯỠNG AN TOÀN CHO THIẾT BỊ
                  </Typography>
                </Grid>
                <Grid xs={1}></Grid>
                <Grid xs={3} display={'flex'} justifyContent={'end'}>
                  <Switch defaultChecked={setting} onChange={handleSwitchSetting}/>
                </Grid>
              </Grid>
              <FormControl disabled={!setting}>
              <Grid container direction={'row'} mb={4}>
                <Grid xs={8} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <Typography>
                    YÊU CẦU MẬT KHẨU KHI THAY ĐỔI
                  </Typography>
                </Grid>
                <Grid xs={1}></Grid>
                <Grid xs={3} display={'flex'} justifyContent={'end'}>
                  <Switch checked={isSwitchOn} onChange={handleSwitchChange} />
                </Grid>
                <Dialog open={isDialogOpen} onClose={handleDialogClose}>
                  <DialogTitle>Xác nhận mật khẩu</DialogTitle>
                  <Typography></Typography>
                  <DialogContent>
                    <TextField
                      type="password"
                      label="Mật khẩu"
                      fullWidth
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleDialogClose}>Hủy</Button>
                    <Button onClick={handleDialogConfirm}>Xác nhận</Button>
                  </DialogActions>
                </Dialog>
              </Grid>
              <Grid container direction={'row'} mb={4}>
                <Grid xs={8} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <Typography>
                    THÔNG BÁO KHI VƯỢT NGƯỠNG AN TOÀN
                  </Typography>
                </Grid>
                <Grid xs={1}></Grid>
                <Grid xs={3} display={'flex'} justifyContent={'end'}>
                  <Switch defaultChecked />
                </Grid>
              </Grid>
              <Grid container direction={'row'} mb={4}>
                <Grid xs={8} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <Typography>
                    NGƯỠNG AN TOÀN NHIỆT ĐỘ (°C)
                  </Typography>
                </Grid>
                <Grid xs={1.5} display={'flex'} justifyContent={'start'} alignItems={'center'}> 
                  <TextField size="small" type="number" disabled={!setting}/>
                </Grid>
                <Grid xs={1} display={'flex'} alignItems={'center'} justifyContent={'center'}> đến </Grid>
                <Grid xs={1.5} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <TextField size="small" type="number" disabled={!setting}/>
                </Grid>
              </Grid>
              <Grid container direction={'row'} mb={4}>
                <Grid xs={8} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <Typography>
                    NGƯỠNG AN TOÀN ĐỘ ẨM (%)
                  </Typography>
                </Grid>
                <Grid xs={1.5} display={'flex'} justifyContent={'start'} alignItems={'center'}> 
                  <TextField size="small" type="number" disabled={!setting}/>
                </Grid>
                <Grid xs={1} display={'flex'} alignItems={'center'} justifyContent={'center'}> đến </Grid>
                <Grid xs={1.5} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <TextField size="small" type="number" disabled={!setting}/>
                </Grid>
              </Grid>
              <Grid container direction={'row'} mb={4}>
                <Grid xs={8} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <Typography>
                    NGƯỠNG AN TOÀN ÁNH SÁNG (lux)
                  </Typography>
                </Grid>
                <Grid xs={1.5} display={'flex'} justifyContent={'start'} alignItems={'center'}> 
                  <TextField size="small" type="number" disabled={!setting}/>
                </Grid>
                <Grid xs={1} display={'flex'} alignItems={'center'} justifyContent={'center'}> đến </Grid>
                <Grid xs={1.5} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <TextField size="small" type="number" disabled={!setting}/>
                </Grid>
              </Grid>
              <Grid container direction={'row'} mb={4}>
                <Grid xs={8} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <Typography>
                    MÁY LẠNH HOẠT ĐỘNG TỐI ĐA (phút)
                  </Typography>
                </Grid>
                <Grid xs={2} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <Switch />
                </Grid>
                <Grid xs={2} display={'flex'} justifyContent={'start'} alignItems={'center'}> 
                  <TextField size="small" type="number" disabled={!setting}/>
                </Grid>
              </Grid>
              <Grid container direction={'row'} mb={4}>
                <Grid xs={8} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <Typography>
                  ĐÈN 1 ĐỘNG TỐI ĐA (phút)
                  </Typography>
                </Grid>
                <Grid xs={2} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <Switch />
                </Grid>
                <Grid xs={2} display={'flex'} justifyContent={'start'} alignItems={'center'}> 
                  <TextField size="small" type="number" disabled={!setting}/>
                </Grid>
              </Grid>
              <Grid container direction={'row'} mb={4}>
                <Grid xs={8} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <Typography>
                    ĐÈN 2 HOẠT ĐỘNG TỐI ĐA (phút)
                  </Typography>
                </Grid>
                <Grid xs={2} display={'flex'} justifyContent={'start'} alignItems={'center'}>
                  <Switch />
                </Grid>
                <Grid xs={2} display={'flex'} justifyContent={'start'} alignItems={'center'}> 
                  <TextField size="small" type="number" disabled={!setting}/>
                </Grid>
              </Grid>
              </FormControl>
            </Grid>
            <Grid item xs={0.75}></Grid>
            <Grid item xs={2.5}>
              <Typography sx={{fontSize: 30, color:'#1976d2', fontWeight: 600, mb: 8}}>
                NHẬT KÝ
                <AccessTimeIcon sx={{position:'fixed',fontSize: 30, mt: 1, ml: 2}}/>
              </Typography>
              <Box sx={{position: 'sticky', overflowY: 'auto', maxHeight: 620}}>
              <Grid container mb={2}>
                <Grid xs={7}>
                  <Typography sx={{fontSize: 20}}>
                    THỜI GIAN
                  </Typography>
                </Grid>
                <Grid xs={5}>
                <Typography sx={{fontSize: 20}}>
                   HOẠT ĐỘNG
                  </Typography>
                </Grid>
              </Grid>
                <Grid container>
                  {log.map((logItem, index) => (
                    <LogLine key={index} date={logItem.date} activity={logItem.activity} />
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={1/2}></Grid>
          </Grid>
        </Box>
      </div>
    );
  }
  
  export default IoT;