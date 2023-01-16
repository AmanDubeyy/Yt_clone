import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar, Feed, VDetail, CDetail, Search} from './components';

const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor: 'blue', background: 'radial-gradient(circle at 10% 20%, rgb(0, 0, 0) 0%, rgb(64, 64, 64) 90.2%)'}}>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/video/:id" exact element={<VDetail/>}/>
        <Route path="/channel/:id" exact element={<CDetail/>}/>
        <Route path="/search/:searchTerm" exact element={<Search/>}/>
      </Routes>
    </Box>
    </BrowserRouter>
  )
}

export default App;
