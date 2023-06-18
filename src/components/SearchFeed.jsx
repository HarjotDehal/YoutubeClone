import React from 'react'

import { useState, useEffect } from 'react'

// we will use useeffect to call our api to find videos right when we load. 

import {Box, Typography} from '@mui/material'
import Videos from './Videos'
import { useParams } from 'react-router-dom';
import { fetchFromApi } from '../utils/fetchFromAPI'
// api data fecthing using rapidapi. 

// our feed consists of the sidebar and our main feed
const SearchFeed = () => {



// we need a used state which keeps track of our selected category. 


//  it recals whenever we change a category. 
  const [videos,setVideos] = useState([]);
  const{searchTerm} = useParams();

  useEffect(()=> {
// pass remainder of url
    fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  },[searchTerm]);
// this forces it to run at reload. 
  return (
   

<Box p={2} sx={{overflowY:'auto', height:'90vh',flex:2}} >
  <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:'white'}}>
    Search Results for:

{} <span style={{color:'#F31503'}}> {searchTerm}
{/* this new thing is hard coded in for now but we can change it later.  */}

</span> videos


</Typography>

{/* This is where we create our video section.  */}

<Videos  videos ={videos}         />

</Box>


  )
}

export default SearchFeed