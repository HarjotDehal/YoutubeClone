// this will be for the middle main search bar.


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Paper,IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';


import React from 'react'

// we can accept inputs
const SearchBar = () => {


    const navigate = useNavigate();
   const[searchTerm,setSearchTerm] = useState('');

    const handleSubmit = (e) =>{

        e.preventDefault();

        if(searchTerm){
            
            // check if it exists already
        
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }

    }
   return (
    <Paper
        // name='jatt'
        component="form"
        onSubmit={handleSubmit}

        /* sx is our styles component stuff.  */

    sx = {{
        // width:50,
        borderRadius:20,
        borderRadius:{sm:0, md:20},
        border : '1-x solid #e3e3e3',
        backgroundColor:'black',
        pl:2,
        boxShadow: 'none',
        mr: {sm:5}
    }}
    >
{/* where we do our text input */}
        <input type="text"  className='search-bar' placeholder='Search Video' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>

        <IconButton type='submit' sx={{

            p: '10px',  color:'red'
        }}>
            <Search/>
        </IconButton>

        </Paper>
    // it appears like its floating. 
  )
}

export default SearchBar