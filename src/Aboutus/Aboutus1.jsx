import React from 'react'
import {
    Text,
  } from '@mantine/core';

const Aboutus1 = () => {
  return (
    <div style={{
        height:'60vh',
        backgroundColor:'black',
        border:'none' ,
        boxShadow:'none'
      }}>
       <Text style={{ fontSize: '34px', fontWeight: 'bold',color:'white' }} p='5.2rem' pb={0}>
        About 
       </Text>
       <hr style={{marginLeft:'3.5rem', marginRight:'3rem'}}/>

       <Text color='white' fw='bold' fs='italic' p='4.7rem' pt='1.5rem'  fz='30px' pb='1rem'>Bandi Venkat Rao</Text>
       <Text pl='4.7rem' fz='20px' pr='3rem' pb='0' color='white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

         </div>
  )
}

export default Aboutus1
