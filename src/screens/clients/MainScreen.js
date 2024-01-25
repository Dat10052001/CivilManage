import Header from './header'
import Footer from '../components/footer'
import Info from './info';
import IoT from './iot'
import React,{useState} from 'react';

const MainScreen = () => {

  const [Page, setPage] = useState(0);

  const handlePage = (state) => {
    setPage(state);
  }

  return (
    <div>
      <Header Page={handlePage} color={'#1976d2'}/>
      {(Page === 0) && <Info/>}
      {(Page === 1) && <IoT/>}
      <Footer color={'#1976d2'}/>
    </div>
  );
}

export default MainScreen;