import Header from './header'
import Footer from '../components/footer'
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Grid, Typography, 
          Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField  } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import FilterNoneIcon from '@mui/icons-material/FilterNone';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
const { NOTIFY, USERS} = require('../../SAMPLE-DATA.js');

const TableRowEdit = ({fullName, homeTown, id, phoneNumber, notice, image, fw, color}) => {
  return(
    <TableRow>
      <TableCell sx={{ fontWeight: fw === 1 ? 600 : null, color }} align ='center'>{fullName}</TableCell>
      <TableCell sx={{ fontWeight: fw === 1 ? 600 : null, color }} align ='center'>{homeTown}</TableCell>
      <TableCell sx={{ fontWeight: fw === 1 ? 600 : null, color }} align ='center'>{id}</TableCell>
      <TableCell sx={{ fontWeight: fw === 1 ? 600 : null, color }} align ='center'>{phoneNumber}</TableCell>
      <TableCell sx={{ fontWeight: fw === 1 ? 600 : null, color }} align ='center'>{image}</TableCell>
      <TableCell sx={{ fontWeight: fw === 1 ? 600 : null, color }} align ='center'>{notice}</TableCell>
    </TableRow>
  );
}

const NotifyCard = ({Title, Content, Time}) => {
  return(
    <Box>
      <Typography sx={{fontWeight: 600, fontSize: 20}}>
        {Title}
      </Typography>
      <Typography sx={{fontStyle: 'italic'}}>
        {Time}
      </Typography>
      <Typography>
        {Content}
      </Typography>
    </Box>
  );
}

const CardEdit = ({Title, Time, Content, id, onDelete}) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return(                  
    <Card sx={{m: 'auto', borderRadius: 5, width: 400, mb: 5}}>
      <CardContent>
        <NotifyCard Title={Title} Time={Time} Content={Content}/>
      </CardContent>
      <CardActions sx={{
        display: "flex",
        justifyContent: "center",
        mb: 2,
      }}>
        <Button variant="outlined" color="secondary" onClick={handleDelete}>
          XÓA
        </Button>
      </CardActions>
    </Card>
  );
}


const MainScreen = () => {
  const [cards, setCards] = React.useState(NOTIFY);
  const [openDialog, setOpenDialog] = useState(false);
  const [newContent, setNewContent] = useState('');
  const [newTitle, setNewTitle] = useState('');

  const users = USERS

  const handleDeleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  const handleCreateNotification = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleDialogConfirm = () => {
    const newNotification = {
      id: cards.length + 1,
      Title: newTitle.toUpperCase(),
      Time: new Date().toLocaleString(undefined, { hour: 'numeric', minute: 'numeric', day: 'numeric', month: 'numeric', year: 'numeric' }),
      Content: newContent
    };
    setCards([...cards, newNotification]);
    setOpenDialog(false);
    setNewContent('');
    setNewTitle('');
  };
    return (
      <div>
        <Box>
            <Header color={'#9c27b0'}/>
            <Grid container sx={{
              position: 'fixed',
              top: 100,
              width: '100%'}}>
              <Grid item xs={1}></Grid>
              <Grid item xs={5}>
              <Typography sx={{fontSize: 30, fontWeight: 600, mb: 5}} color={'secondary'}>
                THÔNG TIN NGƯỜI THUÊ TRỌ
              </Typography>
                <TableContainer component={Paper} sx={{maxHeight: 550, border: '5px solid #cccccc', borderRadius: 3}}>
                  <Table>
                    <TableHead sx={{ backgroundColor: '#9c27b0'}}>
                      <TableRowEdit 
                        fullName={'HỌ VÀ TÊN'} 
                        homeTown={'QUÊ QUÁN'} 
                        id={'SỐ CCCD'} 
                        phoneNumber={'SỐ ĐIỆN THOẠI'} 
                        notice={'GHI CHÚ'} 
                        image={'ẢNH 3X4'} 
                        fw={1} 
                        color={'white'}
                        bg/>
                    </TableHead>
                    <TableBody sx={{ position: 'sticky', overflowY: 'auto'}}>
                    {users.map((user) => (
                      <TableRowEdit 
                        fullName={user.fullName}
                        homeTown={user.homeTown}
                        id={user.id}
                        phoneNumber={user.phoneNumber}
                        image={user.image}
                        notice={user.notice}
                      />
                    ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Grid sx={{position:'fixed', bottom: 80, left: 210}}>
                  <Button variant="contained" color="error" sx={{m: 3, width: 180, height: 50}}>
                    <PrintIcon sx={{mr: 1}}/>
                    In file PDF
                  </Button>
                  <Button variant="contained" sx={{m: 3, width: 180, height: 50}}>
                    <TextSnippetIcon sx={{mr :1}}/>
                    In file Word
                  </Button>
                  <Button variant="contained" color="success" sx={{m: 3, width: 180, height: 50}}>
                    <FilterNoneIcon sx={{mr :1}}/>
                    In file Excel
                  </Button>
                </Grid>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid item xs={4}>
                <Typography sx={{fontSize: 30, fontWeight: 600, mb: 5}} color={'secondary'}>
                  CÁC THÔNG BÁO CHUNG
                </Typography>
                <Box fullWidth sx={{height: 550, borderRadius: 5, position: 'sticky', overflowY: 'auto'}}>
                {cards.map((card) => (
                  <CardEdit
                    key={card.id}
                    id={card.id}
                    Title={card.Title}
                    Time={card.Time}
                    Content={card.Content}
                    onDelete={handleDeleteCard}
                  />
                ))}
                </Box>
                <Grid sx={{position:'fixed', bottom: 80, right: 375}}>
                  <Button variant="outlined" color="secondary" sx={{m: 3, width: 180, height: 50, border: 2, fontWeight: 600}} onClick={handleCreateNotification}>
                    Tạo thông báo
                  </Button>
                  <Dialog open={openDialog} onClose={handleDialogClose} fullWidth>
                    <DialogTitle sx={{fontSize: 25, fontWeight: 600, color: '#9c27b0'}}>
                      TẠO THÔNG BÁO MỚI
                    </DialogTitle>
                    <DialogContent>
                    <TextField
                        label="Tiêu đề"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        fullWidth
                        color={'secondary'}
                        variant="filled"
                        height={100}
                      />
                      <TextField
                        label="Nội dung"
                        multiline
                        rows={4}
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        fullWidth
                        color={'secondary'}
                        variant="filled"
                      />
                    </DialogContent>
                    <DialogActions>
                      <Button color={'secondary'} onClick={handleDialogClose}>Hủy</Button>
                      <Button color={'secondary'} onClick={handleDialogConfirm}>ĐĂNG</Button>
                    </DialogActions>
      </Dialog>
                </Grid>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            <Footer color={'#9c27b0'}/>
        </Box>
      </div>
    );
  }
  
  export default MainScreen;