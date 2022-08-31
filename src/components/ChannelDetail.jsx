import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import Videos from './Videos'
import ChannelCard from './ChannelCard'
import {fetchFromAPI} from '../utils/fetchFromAPI'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const {id} = useParams();

  console.log(videos)
  useEffect( ( )=> {fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]));
                   fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data?.items));}, [id])

  return (
    <Box minHeight='95vh' >
      <Box>
      <div style={{background: 'pink', zIndex: 10, height: '300px' }}/>
      <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
    </Box>
    <Box display="flex" p="2">
    <Box sx={{mr: {sm: '100px'}}} />
      <Videos videos={videos}></Videos>
  
    </Box>
    </Box>
    
  )
}

export default ChannelDetail