



import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Card,CardContent, CardMedia } from '@mui/material';

import { Check, CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl,demoVideoTitle,demoVideoUrl,
    demoChannelTitle,demoChannelUrl } from '../utils/constants';




const VideoCard = ({video : {id: {videoId}, snippet}}) => {

// console.log(videoId, snippet);

  return (
 
<Card  sx={{width : {xs:'100%',sm:'358px', md: '400px', }, boxShadow: 'none', borderRadius:0}}>



<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>

<CardMedia 


image={snippet?.thumbnails?.high?.url}
alt={snippet?.title}
sx={{width:{xs:'100%', sm:'358px', md:'400px'}, height: 196}}
/>
</Link>

<CardContent className='cardd' sx={{backgroundColor: 'rgb(23, 85, 88)', height:'96px'}} >

<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>

<Typography variant="subtitle1" fontWeight="bold" color="white">

    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
</Typography>

</Link>

<Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : 'demoChannelUrl'}>

<Typography variant="subtitle1." fontWeight="bold" color="silver">

    {snippet?.channelTitle || demoChannelTitle}
    <CheckCircle sx={{fontSize: 12,color:'gray', ml:'5px'}}/>
</Typography>

</Link>


</CardContent>


</Card>


  )
}

export default VideoCard