import React from 'react';
import {Stack} from '@mui/material';
import {Link} from 'react-router-dom';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SearchBar from './SearchBar';


const Navbar = () => (

  
   <Stack direction="row" alignItems="center" p={2} sx={{postion:"sticky", top: 0, justifyContent:"space-between", color:"#fff", backgroundSize: "10px 10px",backgroundImage: "repeating-linear-gradient(45deg, #222 0, #222 1px, #000 0, #000 50%)" }}>
    <Link to='/'>
    <p className="logo"><PlayCircleIcon fontSize="large"/></p>
    </Link>
    <SearchBar />
    </Stack>
    
  )


export default Navbar




