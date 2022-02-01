import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomesDisplay from './Pages/HomesDisplay';
import MainPage from './Pages/MainPage';
import Error from './Pages/Error';

import Navbar from './Components/Navbar';

import './main.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route exact path='/homes' element={<HomesDisplay />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
