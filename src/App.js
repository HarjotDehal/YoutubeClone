import React from 'react'

import {BrowserRouter,Routes,Route} from 'react-router-dom';

import {Box} from '@mui/material'
// import Navbar from './components/Navbar';
// import { Feed } from '@mui/icons-material';
// import VideoDetail from './components/VideoDetail';
// import ChannelDetail from './components/ChannelDetail';
// import SearchFeed from './components/SearchFeed';


import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components';


// rafce this creates the initial app start
// a box is a div element. 

const App = () => (
//  use a browser router to wrap entire element. 

<BrowserRouter>

<Box sx = {{backgroundColor: '#000'}}>

<Navbar />
<Routes>

<Route path = "/" exact element ={<Feed/>}/>

{/* this is fine.  */}
<Route path ="/video/:id" element ={<VideoDetail/>} />
<Route path ="/channel/:id" element ={<ChannelDetail/>} />
<Route path ="/search/:searchTerm" element ={<SearchFeed/>} />

{/* create our components in a new folder.  */}
{/* this allows us a specific video adderwss */}



</Routes>

</Box>


</BrowserRouter>

  
);

export default App


