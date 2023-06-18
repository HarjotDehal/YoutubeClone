import React from 'react'
import { Stack} from '@mui/material'

import {Link} from 'react-router-dom';
import logo from '../utils/images/logsss.png';
import SearchBar from './SearchBar';
// import {Link} from 
// this is like a normal stack, its used for one dimensional layouts in a column or row. 



const Navbar = () => 
   (
    
    <Stack direction ="row" alignItems="center" p={2} 
    sx={{position: 'sticky', background: 'rgb(23, 85, 88)', top:0, justifyContent: 'space-between'}}>
{/* can check stack properties by just hovering and checking its link. learn reading documentation on own. */}
    
    <Link to="/" style ={{display:'flex',alignItems:'center'}}>

    <img src={logo} alt="logo" height={55} width={70}/>  

    <div className='headstuff'>Harjot's Youtube Clone </div>
    </Link>
{/* Link doesnt work so try link.  */}
   
   <SearchBar/>
   {/* create our search bar now.  */}
   
    </Stack>


  )

export default Navbar