import React from 'react'
import {
  Text,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const Aboutus1 = () => {

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
    <div ref={sectionRef} style={{
      height: '45vh',
      backgroundColor: 'black',
      border: 'none',
      boxShadow: 'none'
    }}>
      <Text style={{ fontSize: '22px', fontWeight: 'bold', color: 'white', fontFamily: '"Marcellus", Sans-serif', animation: isVisible ? "slideInBottomToTop 2.5s ease-out" : "none" }} p={isMobile ? '2.5rem' : '5.2rem'} pb={0}>
        About
      </Text>
      <hr style={{ marginLeft: isMobile ? '2.5rem' : '3.5rem', marginRight: '3rem' }} />

      <Text color='white' fw='bold' style={{ fontFamily: '"Marcellus", Sans-serif', animation: isVisible ? "slideInBottomToTop 3.5s ease-out" : "none" }} p={isMobile ? '2.5rem' : '4.7rem'} pt='1.5rem' fz={isMobile ? '18px' : '20px'} pb='1rem'>Bandi Venkat Rao
      </Text>
      <Text pl={isMobile ? '2.5rem' : '4.7rem'} fz='16' pr='2rem' pb='0' color='white' style={{ fontFamily: '"Open Sans", Sans-serif', animation: isVisible ? "slideInBottomToTop 2.5s ease-out" : "none" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>

    </div>
  )
}

export default Aboutus1
