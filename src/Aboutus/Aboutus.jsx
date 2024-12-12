import React from 'react'
import {
    BackgroundImage,
    Text,
    AppShell    
  } from '@mantine/core';
  import CustomHeader from '../Header/CustomHeader'

const Aboutus = () => {
  return (
    <AppShell
  header={
    <div style={{ backgroundColor: 'black', }}>
      <CustomHeader />
    </div>
  }
  styles={{
    main: {
      padding: 0, 
      
    },
  }}
>
    
      <div style={{ backgroundColor: 'black' ,border:'none',boxShadow:'none'}}>
    
    <BackgroundImage
      src="https://www.services.bis.gov.in/php/BIS_2.0/BISBlog/wp-content/uploads/2023/07/360_F_608825085_MuQopoWCJQJ8BUa4u2z1DECXtkuoVLmj.jpg" >
        
       

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '60vh',
            textAlign: 'center',
            zIndex: 1,
            boxShadow:'none',
            border:'none'
          }}
        >
          <Text
            color="white"
            fz="55px"
            fw="bolder"
            style={{ width: '50rem', zIndex: 1, wordSpacing: '2px' }}
          >
          About Us
          </Text>
        </div>  
        
        
     
    </BackgroundImage>
    
    <Text style={{ fontSize: '44px', fontWeight: 'bold',color:'white' }} p='4.7rem' pb='0'>Company Overview</Text> 
    <Text color='white' p='4.7rem' pb='1rem' pt='lg' fz='xl' ><b style={{fontSize:'26px'}} >Aaradhya Techno Solutions</b> is a leading provider for PCB design and manufacturing services. With nearly a decade of experience, we've honed our expertise to deliver innovative and reliable solutions. Our team of skilled engineers is dedicated to transforming your ideas into tangible products. From concept to production, we offer comprehensive services tailored to your specific needs. Partner with us to elevate your electronics projects to new heights.</Text>
    </div>
    </AppShell>

  )
}

export default Aboutus
