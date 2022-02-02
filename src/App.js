import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomesForSale from './Pages/HomesForSale';
import HomesForRent from './Pages/HomesForRent';

import MainPage from './Pages/MainPage';
import Error from './Pages/Error';

import './main.css';

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route exact path='/homesForSale' element={<HomesForSale />} />
          <Route exact path='/homesForRent' element={<HomesForRent />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
