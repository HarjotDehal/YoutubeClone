
import {Stack} from '@mui/material';

import React from 'react'

import {categories2} from '../utils/constants';
import { Link } from 'react-router-dom';


// const selectedCategory='New';
// static variable. 


const Sidebar2 = ({selectedCategory, setSelectedCategory}) => {
    return (



        <Stack

            direction="row"
            sx={{
                // backgroundColor:'gray',
                overflowY: "auto",
                height: { sx: 'auto', md: '95%' },
                flexDirection: { md: 'column' },
            }}>

{/* this is making sure that the buttons are in columns slash rows for depending devices. It also organizes and makes everything clean.  */}
            {categories2.map((category) => (
                // this is for all of our buttons. Makes sense. 
               
               
            
                <button 
                className="category-btn2"

                // this makes our click actually hit something. 
                onClick={() => setSelectedCategory (category.name)}
                    style={{ background: category.name === selectedCategory && 'blue', backgroundColor:'black', color: 'white' }}
                    key={category.name}>

                    {/* <span style={{ color: category.name === selectedCategory ? 'white' : 'red', marginRight: '15px' }}>
                        {category.icon}</span> */}

                    {/* this will make it slightly more greyed out when you clicking on it.  */}
                    <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}> {category.name}</span>

                </button>

            ))}


        </Stack>


    );
}

export default Sidebar2