import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import {Box} from '@mui/material';
import './index.css';
import VideoDetail from './components/VideoDetail';
import Feed from './components/Feed';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <Box sx={{ backgroundcolor: '#000'}}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Feed/>} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
     
    </Box>
    </BrowserRouter>
  )
}

export default App