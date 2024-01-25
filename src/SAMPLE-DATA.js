import Avatar from '@mui/material/Avatar';
import AvatarUser1 from './assets/clients/user1.jpg';
import AvatarUser2 from './assets/clients/user2.jpg';

function RandomPhoneNumber(phone) {
  let phoneNumber = '';
  const digits = '0123456789';

  if(phone) {
    phoneNumber = '0';
  }
  for (let i = 0; i < 9; i++) {
    phoneNumber += digits[Math.floor(Math.random() * 10)];
  }
  return phoneNumber;
}

export const INFO = {
    nameMotel: "nhà trọ 479",
    nameOwn: "Huỳnh Tấn Thành",
    phoneNumber: "0969815312",
    phoneNumberUser: "0862551211",
    address: 'số nhà 479, khu phố Hưng Lộc, phường Hưng Định, thành phố Thuận An, tỉnh Bình Dương',
    userName: 'Nguyễn Văn A',
    notice: 'Cúp điện từ 12:00 đến 20:00. Vui lòng tắt hết các thiết bị điện trước giờ khi cúp điện. Xin cảm ơn !', 
    timeNotice: '20:30 - 12/01/2024'
};

export const NOTIFY = [
  { id: 1, Title: 'THÔNG BÁO SỐ 1', Time: '2:30 17/01/2024', Content: 'Cúp điện từ 2:00 AM đến 2:00 PM' },
  { id: 2, Title: 'THÔNG BÁO SỐ 2', Time: '3:30 18/01/2024', Content: 'Mất nước từ 3:00 PM đến 4:00 PM' },
  { id: 3, Title: 'THÔNG BÁO SỐ 3', Time: '3:30 17/01/2024', Content: 'Mất nước từ 3:00 PM đến 4:00 PM' },
  { id: 4, Title: 'THÔNG BÁO SỐ 4', Time: '3:30 17/01/2024', Content: 'Mất nước từ 3:00 PM đến 4:00 PM' },
  { id: 5, Title: 'THÔNG BÁO SỐ 5', Time: '3:30 17/01/2024', Content: 'Mất nước từ 3:00 PM đến 4:00 PM' },
  { id: 6, Title: 'THÔNG BÁO SỐ 6', Time: '3:30 17/01/2024', Content: 'Mất nước từ 3:00 PM đến 4:00 PM' }
]

export const USERS = [
  { fullName: 'Nguyễn Văn A', homeTown: 'Bình Dương', id: RandomPhoneNumber(), phoneNumber: RandomPhoneNumber(1), image: <Avatar sx={{m: 'auto'}} alt="" src={AvatarUser1} />, notice: 'X' },
  { fullName: 'Nguyễn Văn B', homeTown: 'Bình Dương', id: RandomPhoneNumber(), phoneNumber: RandomPhoneNumber(1), image: <Avatar sx={{m: 'auto'}} alt="" src={AvatarUser2} />, notice: 'O' },
  { fullName: 'Nguyễn Văn C', homeTown: 'Bình Dương', id: RandomPhoneNumber(), phoneNumber: RandomPhoneNumber(1), image: <Avatar sx={{m: 'auto'}} alt="" src={AvatarUser1} />, notice: 'O' },
  { fullName: 'Nguyễn Văn D', homeTown: 'Bình Dương', id: RandomPhoneNumber(), phoneNumber: RandomPhoneNumber(1), image: <Avatar sx={{m: 'auto'}} alt="" src={AvatarUser2} />, notice: 'X' },
  { fullName: 'Nguyễn Văn E', homeTown: 'Bình Dương', id: RandomPhoneNumber(), phoneNumber: RandomPhoneNumber(1), image: <Avatar sx={{m: 'auto'}} alt="" src={AvatarUser1} />, notice: 'O' },
  { fullName: 'Nguyễn Văn F', homeTown: 'Bình Dương', id: RandomPhoneNumber(), phoneNumber: RandomPhoneNumber(1), image: <Avatar sx={{m: 'auto'}} alt="" src={AvatarUser2} />, notice: 'X' },
  { fullName: 'Nguyễn Văn G', homeTown: 'Bình Dương', id: RandomPhoneNumber(), phoneNumber: RandomPhoneNumber(1), image: <Avatar sx={{m: 'auto'}} alt="" src={AvatarUser2} />, notice: 'X' },
  { fullName: 'Nguyễn Văn H', homeTown: 'Bình Dương', id: RandomPhoneNumber(), phoneNumber: RandomPhoneNumber(1), image: <Avatar sx={{m: 'auto'}} alt="" src={AvatarUser2} />, notice: 'X' },
]
