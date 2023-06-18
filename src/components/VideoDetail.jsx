import React from 'react'

import { useState,useEffect } from 'react'

import { Link,useParams } from 'react-router-dom'

import ReactPlayer from 'react-player'

import { Typography, Box,Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import{Videos} from './'
import { fetchFromApi } from '../utils/fetchFromAPI'


// this is where we actually watch out video. 
const VideoDetail = () => {

  const {id} = useParams();


const [videoDetail, setVideoDetail] = useState(null)
const [videos, setVideos] = useState(null)

useEffect(() =>{

fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
.then((data)=> setVideoDetail(data.items[0]));


fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items));
  },[id]);


  if(!videoDetail?.snippet) return 'Loading...';

  const{snippet: {title, channelId,channelTitle}, 
  statistics:{viewCount,likeCount}} = videoDetail;

// this fetches our video we need. 
  return (

<Box minHeight= "95vh">

<Stack direction={{xs:'column',md:'row'}}>

<Box flex={1}>

<Box sx={{width:'100%',position:'sticky', top:'86px'}}>

{/* react player accepts a url. so immediately fetch data url. Need id of video */}
<ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}

className="react-player" controls />


<Typography color="white" variant="h5" fontweight="bold" p={2}>
{title}

</Typography>
{/* controls gives properties to control  */}

<Stack direction="row" justifyContent='space-between' sx={{color:'white'}} py={1} px={2}>

<Link to={`/channel/${channelId}`}>

<Typography variant={{sm:'subtitle1',md:'h6'}}
color='white'>

{channelTitle}
<CheckCircle sx={{fontSize:'12px',color:'gray',ml:'5px'}}/>

</Typography>



</Link>

<Stack direction="row" gap="20px" alignItems="center">

<Typography variant="body1" sx={{opacity :0.7}}>


  {parseInt(viewCount).toLocaleString()} views
</Typography>
<Typography variant="body1" sx={{opacity :0.7}}>


  {parseInt(likeCount).toLocaleString()} likes
</Typography>


</Stack>




</Stack>

</Box>

</Box>
 
<Box px={2} py={{md:1 , xs:5}} justifyContent="center" alignItems="center">

<Typography px={1} py={{md:1 , xs:5}} justifyContent="center" alignItems="center" color='white' fontSize='25px' fontWeight='bold' >

Related Content

</Typography>

<Videos videos={videos} direction="column" /> 


 </Box> */


</Stack>



</Box>



    )
}

export default VideoDetail