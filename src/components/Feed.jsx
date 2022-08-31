import React from 'react';
import {useState, useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import Sidebar from './SideBar';
import ResponsiveDrawer from './SideDrawer';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const Feed = () => {

  const [selected, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect( () => {fetchFromAPI(`search?part=snippet&q=${selected}`)
  .then((data) => setVideos(data.items))}, [selected])
  return (

    <Stack sx={{flexDirection: 
      {
      sx:"column",
      md:"row",
      background: '#222',
    }}}>
      <Box sx={{ height:{sx: 'auto',md:'92vh'},
      borderRight:'1px solid #555',
      px: {sx: 0, md: 2}
    }}>
  <Sidebar 
  selected={selected}
  setSelectedCategory={setSelectedCategory}/>

  <Typography className="copyright" variant="body2" sx={{mt:1.5,color:'#f5f5f5'}}>
  Copyright 2022
  </Typography>


      </Box>
      <Box p={2} sx={{overflowY:"auto", height:"90vh", flex:2}}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{color: "white"}}>
          {selected} <span style={{color: "#f70248" }}>
            videos
          </span>
        </Typography>
       <Videos videos={videos} />
      </Box>
      </Stack>
  )}


export default Feed