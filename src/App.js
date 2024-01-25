import './App.css';
import SignInUser from './screens/clients/SignIn';
import SignInAdmin from './screens/admins/SignIn';
import MainScreenUser from './screens/clients/MainScreen';
import MainScreenAdmin from './screens/admins/MainScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Main from './screens/components/main'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/loginUser" element={<SignInUser />} />
          <Route path="/loginAdmin" element={<SignInAdmin />} />
          <Route path="/mainUser" element={<MainScreenUser />} />
          <Route path="/mainAdmin" element={<MainScreenAdmin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;