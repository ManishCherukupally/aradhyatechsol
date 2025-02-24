import React from 'react'
import {
  BackgroundImage,
  Text,
  AppShell
} from '@mantine/core';
import CustomHeader from '../Header/CustomHeader'
import { useMediaQuery } from '@mantine/hooks';
import './AboutUs.css'

const Aboutus = () => {
  const sectionRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <AppShell
      header={
        <div ref={sectionRef} style={{ backgroundColor: 'black', }}>
          <CustomHeader />
        </div>
      }
      styles={{
        main: {
          padding: 0,

        },
      }}
    >

      <div style={{ backgroundColor: 'black', border: 'none', boxShadow: 'none', marginTop: '6rem' }}>

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
              boxShadow: 'none',
              border: 'none'
            }}
          >
            <Text
              color="white"
              fz="55px"
              fw="bolder"
              style={{ width: '50rem', zIndex: 1, wordSpacing: '2px', fontFamily: '"Marcellus", Sans-serif', animation: 'fadeSlideUp 1.5s ease-out' }}
            >
              About Us
            </Text>
          </div>



        </BackgroundImage>

        <div style={{ animation: isVisible ? "slideInTopToBottom 3.5s ease-out" : "none" }}>
          <Text p={isMobile ? '2rem' : '4rem'} style={{ fontSize: '25px', fontWeight: 'bold', color: 'white', fontFamily: '"Marcellus", Sans-serif', }} pb='0'>Company Overview</Text>
          <Text color='white' p={isMobile ? '2rem' : '4rem'} pb='1rem' pt='lg' fz='17.5px'  ><b style={{ fontSize: '19.5px', fontFamily: '"Open Sans", Sans-serif', }} >Aaradhya Techno Solutions</b> is a leading provider for PCB design and manufacturing services. With nearly a decade of experience, we've honed our expertise to deliver innovative and reliable solutions. Our team of skilled engineers is dedicated to transforming your ideas into tangible products. From concept to production, we offer comprehensive services tailored to your specific needs. Partner with us to elevate your electronics projects to new heights.</Text>
        </div>
      </div>
    </AppShell>

  )
}

export default Aboutus
