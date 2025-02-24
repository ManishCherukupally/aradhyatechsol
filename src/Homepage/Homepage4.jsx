import React from 'react';
import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import { Text, Container, Card, Title, BackgroundImage, Affix, Button, Transition, rem } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { FaArrowUp } from 'react-icons/fa6';
import Autoplay from 'embla-carousel-autoplay';
import '../Homepage/Affix1.css';
import { createStyles, getStylesRef } from '@mantine/core';



const useStyles = createStyles(() => ({
  controls: {
    ref: getStylesRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  root: {
    '&:hover': {
      [`& .${getStylesRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
}));
const Homepage4 = () => {
  const sectionRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

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
  const { classes } = useStyles();
  const autoplay = useRef(Autoplay({ delay: 2000 }));

  return (
    <>
      <BackgroundImage src="https://image.freepik.com/free-photo/handshake-of-businessmen_1098-742.jpg">
        <div ref={sectionRef} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '2rem 0', paddingBottom: '4rem' }}>
          <Container mt="3rem" mb="3rem">
            <Text
              align="center"
              size="2rem"
              weight={700}
              style={{
                color: 'white',
                marginBottom: '3rem',
                fontSize: '3rem',
                fontFamily: '"Marcellus", Sans-serif',
                animation: isVisible ? "slideInBottomToTop 1.5s ease-out" : "none",
              }}
            >
              Our Clients
            </Text>

            <Carousel
              style={{
                animation: isVisible ? "slideInBottomToTop 1.5s ease-out" : "none",
              }}
              classNames={classes}
              slideSize="50%"
              slideGap="lg"
              align="center"
              withControls={false}
              plugins={[autoplay.current]}
              loop
              height={330}
              onMouseEnter={() => autoplay.current.play()}
              onMouseLeave={() => autoplay.current.play()}
            >
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <Carousel.Slide key={index}>
                  <Card
                    shadow="sm"
                    padding="lg"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '10px',
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',

                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Title color="white" order={3} >{`Client ${index}`}</Title>
                  </Card>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Container>
        </div>
      </BackgroundImage>

      <Affix position={{ bottom: rem(30), right: rem(20) }}>
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
    </>
  );
};

export default Homepage4;
