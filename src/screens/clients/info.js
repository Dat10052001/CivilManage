import { Avatar, Box, Button, Grid, TextField, Typography, MenuItem } from "@mui/material";
import { styled } from '@mui/material/styles';
import React from "react";
const { INFO } = require('../../SAMPLE-DATA.js');

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

function Info() {

    const [selectedImage, setSelectedImage] = React.useState(null);
    const [selectedCCCD1, setSelectedCCCD1] = React.useState(null);
    const [selectedCCCD2, setSelectedCCCD2] = React.useState(null);
    const [selectedGender, setSelectedGender] = React.useState('Nam');
    const [editingEnabled, setEditingEnabled] = React.useState(false);

    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };

    const handleImageChange = (event, type) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        switch (type) {
            case "image3x4":
                setSelectedImage(imageUrl);
              break;
            case "CCCD1":
                setSelectedCCCD1(imageUrl);
              break;
            case "CCCD2":
                setSelectedCCCD2(imageUrl);
              break;
            default:
              break;
          }
    };

  return (
    <div>
      <Box sx={{
        position: 'fixed',
        top: 100,
        width: '100%',
        }}>
        <Grid container spacing={0}> 
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
                <Box>
                    <Box sx={{border: 1, borderRadius: 1, borderStyle:'dashed',p: 2, mb: 3}}>
                        <Typography>
                            Ảnh thẻ 3x4
                        </Typography>
                        <Avatar 
                            alt="" 
                            variant="rounded"
                            src={selectedImage}
                            sx={{
                                width: 150,
                                height: 200,
                                ml: 'auto',
                                mr: 'auto'
                            }}
                        >
                        </Avatar>
                        <Button component="label" variant="contained" sx={{mt: 2}}>
                            Thay đổi ảnh
                            <VisuallyHiddenInput type="file" onChange={(event) => handleImageChange(event, "image3x4")}/>
                        </Button>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <Box sx={{ border: 1, borderRadius: 1, borderStyle: "dashed",p: 2}}>
                            <Typography>CCCD mặt trước</Typography>
                            <Avatar
                                alt=""
                                variant="rounded"
                                src={selectedCCCD1}
                                sx={{
                                width: 305,
                                height: 190,
                                transform: 'rotate(90deg)',
                                mt: 8,
                                mb: 7,
                                ml: -6.7
                                }}
                            />
                            <Button component="label" variant="contained" sx={{ mt: 2 }}>
                                Thay đổi ảnh
                                <VisuallyHiddenInput type="file" onChange={(event) => handleImageChange(event, "CCCD1")} />
                            </Button>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ border: 1, borderRadius: 1, borderStyle: "dashed", p: 2 }}>
                            <Typography>CCCD mặt sau</Typography>
                            <Avatar
                                alt=""
                                variant="rounded"
                                src={selectedCCCD2}
                                sx={{
                                width: 305,
                                height: 190,
                                transform: 'rotate(90deg)',
                                mt: 8,
                                mb: 7,
                                ml: -6.7
                                }}
                            />
                            <Button component="label" variant="contained" sx={{ mt: 2 }}>
                                Thay đổi ảnh
                                <VisuallyHiddenInput type="file" onChange={(event) => handleImageChange(event, "CCCD2")} />
                            </Button>
                            </Box>
                        </Grid>
                        </Grid>
                </Box>
            </Grid>
            <Grid item xs={1}></Grid>
            
            <Grid item xs={6}>
                <Box>  
                    <Typography color='primary' sx={{fontSize: 30, fontWeight: 600, mb: 5, mt: 2}}>
                        THÔNG TIN CHI TIẾT
                    </Typography>
                    <Grid  container spacing={4} >
                        <Grid item xs={4}>
                            <Grid container direction={"column"} spacing={5}>
                                <Grid item xs={3}>
                                    <TextField label="HỌ VÀ TÊN" variant="outlined" defaultValue={INFO.userName} fullWidth InputLabelProps={{shrink: true }} disabled={!editingEnabled} inputProps={{ style: { textAlign: 'center' } }}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="QUÊ QUÁN" variant="outlined" defaultValue=" " fullWidth InputLabelProps={{shrink: true }} disabled={!editingEnabled} inputProps={{ style: { textAlign: 'center' } }}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="QUỐC TỊCH" variant="outlined" defaultValue=" " fullWidth InputLabelProps={{shrink: true }} disabled={!editingEnabled} inputProps={{ style: { textAlign: 'center' } }}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="SỐ CCCD" variant="outlined" defaultValue=" " fullWidth InputLabelProps={{shrink: true }} disabled={!editingEnabled} inputProps={{ style: { textAlign: 'center' } }}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="SỐ ĐIỆN THOẠI" variant="outlined" defaultValue={INFO.phoneNumberUser} fullWidth InputLabelProps={{shrink: true }} disabled={!editingEnabled} inputProps={{ style: { textAlign: 'center' } }}/>
                                </Grid>
                                <Grid item xs={3}>
                                <TextField
                                    label="GIỚI TÍNH"
                                    select
                                    value={selectedGender}
                                    onChange={handleGenderChange}
                                    variant="outlined"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    disabled={!editingEnabled} inputProps={{ style: { textAlign: 'center' } }}
                                    >
                                    <MenuItem value="Nam">Nam</MenuItem>
                                    <MenuItem value="Nữ">Nữ</MenuItem>
                                    <MenuItem value="Không xác định">Không xác định</MenuItem>
                                </TextField>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                        <Grid container direction={"column"} spacing={5}>
                                <Grid item xs={3}>
                                    <TextField label="CÔNG VIỆC HIỆN TẠI" variant="outlined" defaultValue=" " fullWidth InputLabelProps={{shrink: true }} disabled={!editingEnabled} inputProps={{ style: { textAlign: 'center' } }}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="NƠI LÀM VIỆC" variant="outlined" defaultValue=" " fullWidth InputLabelProps={{shrink: true }} disabled={!editingEnabled} inputProps={{ style: { textAlign: 'center' } }}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="TÊN NGƯỜI THÂN 1" variant="outlined" defaultValue=" " fullWidth InputLabelProps={{shrink: true }} disabled={!editingEnabled} inputProps={{ style: { textAlign: 'center' } }}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="QUAN HỆ VỚI NGƯỜI THÂN 1" variant="outlined" defaultValue=" " fullWidth InputLabelProps={{shrink: true }} disabled={!editingEnabled} inputProps={{ style: { textAlign: 'center' } }}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="TÊN NGƯỜI THÂN 2" variant="outlined" defaultValue=" " fullWidth InputLabelProps={{shrink: true }} disabled={!editingEnabled} inputProps={{ style: { textAlign: 'center' } }}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="QUAN HỆ VỚI NGƯỜI THÂN 2" variant="outlined" defaultValue=" " fullWidth InputLabelProps={{shrink: true }} disabled={!editingEnabled} inputProps={{ style: { textAlign: 'center' } }}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container direction={"column"} spacing={5}>
                            <Grid item xs={3}>
                                    <TextField label="GIẤY TỜ 1" variant="outlined" defaultValue=" " fullWidth InputLabelProps={{shrink: true }} disabled={!editingEnabled}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="SỐ HIỆU GIẤY TỜ 1" variant="outlined" defaultValue=" " fullWidth InputLabelProps={{shrink: true }} disabled={!editingEnabled}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="GIẤY TỜ 2" variant="outlined" defaultValue=" " fullWidth InputLabelProps={{shrink: true }} disabled={!editingEnabled}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="SỐ HIỆU GIẤY TỜ 2" variant="outlined" defaultValue=" " fullWidth InputLabelProps={{shrink: true }} disabled={!editingEnabled}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="GIẤY TỜ 3" variant="outlined" defaultValue=" " fullWidth InputLabelProps={{shrink: true }} disabled={!editingEnabled}/>
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField label="SỐ HIỆU GIẤY TỜ 3" variant="outlined" defaultValue=" " fullWidth InputLabelProps={{shrink: true }} disabled={!editingEnabled}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container
                        justifyContent="center"
                        spacing={5}
                        mt={1}
                        >
                        <Grid item xs={2}>
                            <Button type="button" variant="contained" fullWidth onClick={() => {setEditingEnabled(!editingEnabled)}}>
                                {!editingEnabled && 'Chỉnh sửa'} {editingEnabled && 'Lưu'}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={1}></Grid>

        </Grid>
      </Box>
    </div>
  );
}

export default Info;