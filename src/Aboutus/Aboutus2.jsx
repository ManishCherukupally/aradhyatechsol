import React from 'react';
import { Image, Text, Affix, rem, Transition, Button } from '@mantine/core';
import Image1 from '../assets/avatar.jpg';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';
import { FaArrowUp } from "react-icons/fa6";

const Aboutus2 = () => {
  const sectionRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery('(max-width: 1024px)');

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

  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div
      ref={sectionRef}
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: isMobile ? "1rem" : "2rem",
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '3rem'
      }}
    >
      {/* Title */}
      <Text
        align="center"
        size="2rem"
        weight={700}
        style={{
          color: "white",
          marginBottom: isMobile ? '2rem' : "5rem",
          fontSize: "3rem",
          marginTop: isMobile ? '15rem' : isTablet ? '5rem' : '2rem',
          fontFamily: '"Marcellus", Sans-serif',
          animation: isMobile ? isVisible ? "slideInLeftToRight 3s ease-out" : "none" : isVisible ? "slideInLeftToRight 3s ease-out" : "none"
        }}
      >
        Team
      </Text>

      {/* Team Members */}
      <div
        style={{
          display: 'flex',

          alignItems: 'center',
          justifyContent: isMobile? 'center': 'space-evenly',
          
          gap: isMobile ? '2rem' : 'none',
          flexDirection: isMobile ? 'column' : 'row',
          animation: isMobile ? isVisible ? "slideInLeftToRight 3s ease-out" : "none" : isVisible ? "slideInLeftToRight 3s ease-out" : "none"
        }}
      >
        {/* CEO Section */}
        <div style={{ flex: isMobile ? 0.4 : isTablet ? 0.4 : 0.2, justifyItems: 'center', alignItems: 'center', textAlign: 'center', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "none" }}>
          <Image src={Image1} alt="Bandi Venkat Rao"
            width={isMobile ? '15rem' : 'none'}
          />
          <Text
            fz={'34px'}
            fw={700}
            style={{ wordSpacing: '0.001rem', fontFamily: '"Marcellus", Sans-serif' }}
          >
            Bandi Venkat Rao

          </Text>
          <Text
            fz={'18px'}
            fw={700}
            color='#A2A2A2'
            style={{ fontFamily: '"Marcellus", Sans-serif' }}
          >
            Chief Executive Officer (CEO)
          </Text>
        </div>

        {/* COO Section */}
        <div style={{ flex: isMobile ? 0.4 : isTablet ? 0.4 : 0.2, justifyItems: 'center', alignItems: 'center', textAlign: 'center', animation: isVisible ? "slideInBottomToTop 3s ease-out" : "none" }}>
          <Image src={Image1} alt="Name of the COO"
            width={isMobile ? '15rem' : 'none'}

          />
          <Text
            fz={'34px'}
            fw={700}
            style={{ wordSpacing: '0.001rem', fontFamily: '"Marcellus", Sans-serif' }}
          >
            COO Name
          </Text>
          <Text
            fz={'18px'}
            fw={700}
            color='#A2A2A2'
            style={{ fontFamily: '"Marcellus", Sans-serif' }}
          >
            Chief Operations Officer (COO)
          </Text>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Affix position={{ bottom: rem(20), right: rem(20) }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              className="affix-btn"
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              <FaArrowUp size="1rem" />
            </Button>
          )}
        </Transition>
      </Affix>
    </div>
  );
};

export default Aboutus2;
