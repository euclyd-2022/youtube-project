import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import {demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl, demoChannelTitle} from "../utils/constants/constant";



const VideoCard = ({video: {id:{videoId},snippet}}) => {
    console.log(videoId, snippet)
  return (
    <Card sx={{width:{xs:'100%', sm:'358px', md:'320px' }, boxShadow:'None', borderRadius: 0}}>
       
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>

        <CardMedia image={snippet?.thumbnails?.high?.url} 
        alt={snippet?.title}
        sx={{width: {xs: '100%', sm:'358px'}, height:180}}/>

        
        </Link>
        <CardContent sx={{backgroundColor:'#111', height:'102px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color="#f5f5f5">
                {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
                </Link>

        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
                {snippet?.channelTitle.slice(0,60) || demoChannelTitle.slice(0,60)}
            </Typography>
        </Link>
        </CardContent>
       
        </Card>
  )
}

export default VideoCard