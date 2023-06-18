import React from 'react'

import { useState, useEffect } from 'react'

// we will use useeffect to call our api to find videos right when we load. 

import {Box, Stack, Typography} from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'

import Sidebar2 from './Sidebar2'

import { fetchFromApi } from '../utils/fetchFromAPI'
// api data fecthing using rapidapi. 

// our feed consists of the sidebar and our main feed
const Feed = () => {



// we need a used state which keeps track of our selected category. 

  const [selectedCategory, setSelectedCategory] = useState('New');
//  it recals whenever we change a category. 
  const [videos,setVideos] = useState([]);

  // console.log(channelDetail?.snippet?.thumbnails?.high?.url);
  useEffect(()=> {
// pass remainder of url
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  },[selectedCategory]);
// this forces it to run at reload. 
  return (
    
    <Stack className='main' sx={{ flexDirection: {sx:"column", md:"row"}}}>


    <Box sx={{height:{ sx:'auto', md:'92vh'},borderRight :'1px solid #3d3d3d', px: {sx:0,md:2}}}>




    <Typography className="copyright" variant ="body2" sx={{ fontSize:'18px' , fontWeight:'bold', mt:1.5,color:'#fff', alignSelf:'center', ml:{sx:2,md:1}}}>


{/* this is used for all text levels */}

    Content Sections


    </Typography>

    <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />


    </Box>


{/* a new box which is for our videos area.  */}

{/* this makes it h4.  */}
<Box p={2} sx={{overflowY:'auto', height:'90vh',flex:2}} >
<Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>

{selectedCategory} <span style={{color:'#F31503'}}> videos
{/* this new thing is hard coded in for now but we can change it later.  */}

</span>


</Typography>

{/* This is where we create our video section.  */}

<Videos  videos ={videos}         />

</Box>
<Box sx={{height:{ sx:'auto', md:'92vh'},borderRight :'1px solid #3d3d3d', px: {sx:0,md:2}}}>

<Typography className="copyright" variant ="body2" sx={{ fontSize:'18px' , fontWeight:'bold', mt:1.5,color:'#fff', alignSelf:'center', ml:{sx:2,md:1}}}>


{/* this is used for all text levels */}
Top Subscribed Channels
</Typography>


<Sidebar2 selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

</Box>

    </Stack>




  )
}

export default Feed