


import React from 'react'


import { Stack, Box } from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'



const Videos = ({videos,direction}) => {
  
//   if(videos.length>40)
// const x = videos.
//   console.log(videos);
  
if(!videos?.length) return 'Loading...';


    return (

<Stack direction = {direction ||"row"} flexWrap="wrap" 
justifyContent="start" gap={2}>


{videos.map((item,idx) =>(


<Box key={idx}>

    {/* need to create a video card for thumnails and channel logos.  */}
{/* this means it must be a video card.  */}
{/* we also need to create our components now.  */}
    {item.id.videoId && <VideoCard video={item} />}
    {item.id.channelId && <ChannelCard channelDetail={item} />}
{/* we pass the channel detail to our channel card. thats what we do.  */}


</Box>

))}


</Stack>




        )



}

export default Videos