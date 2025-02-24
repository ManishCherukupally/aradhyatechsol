import React from 'react';
import { Text, Spoiler, Image, Button } from '@mantine/core';
import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import { useWindowScroll } from '@mantine/hooks';
import Autoplay from 'embla-carousel-autoplay';
import { createStyles, getStylesRef } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks'; // Importing the hook
import '../Homepage/Affix1.css';

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

const Homepage2 = () => {
  const [scroll, scrollTo] = useWindowScroll();
  const { classes } = useStyles();
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

  const autoplay = useRef(Autoplay({ delay: 2000 }));

  // Using the media query to detect if the screen is mobile or tablet
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  return (
    <div
      ref={sectionRef}
      style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '1.5rem',
        paddingBottom: '0.5rem',
        justifyContent: 'center',
        alignItems: 'center',


        overflow: 'hidden',
      }}
    >

      <div
        style={{
          display: isMobile || isTablet ? 'block' : 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '2.5rem',
          borderBottom: 'none',
        }}
      >
        <div
          style={{
            flex: 0.9,
            borderBottom: 'none',
            marginRight: '1rem',
            animation: isVisible ? 'slideInLeftToRight 2.5s ease-out' : 'none',
            order: isMobile || isTablet ? 1 : 0, 
          }}
        >
          <Text
            style={{
              fontSize: isMobile ? '32px' : '54px',
              fontWeight: 'bold',
              lineHeight: isMobile ? '2.6rem' : '2.5rem',
              fontFamily: '"Marcellus", Sans-serif',
            }}
          >
            Welcome to Aaradhya Techno Solutions
          </Text>
          <Spoiler
            maxHeight={154}
            mt={isMobile ? 'md' : "3rem"}
            style={{ fontFamily: '"Open Sans", Sans-serif' }}
            showLabel={
              <Button
                variant="outline"
                style={{ borderRadius: '5rem', fontFamily: '"Open Sans", Sans-serif' }}
                color="gray"
                mt={"lg"}
                size="xs"
              >
                READ MORE
              </Button>
            }
            hideLabel={
              <Button style={{ borderRadius: '5rem' }} variant="outline" color="gray" size="sm" mt="lg">
                Hide
              </Button>
            }
          >
            <Text style={{ fontFamily: '"Open Sans", Sans-serif' }} fz={isMobile ? 'md' : 'none'}>
              To provide excellent service, unbeatable pricing, and high-quality components within the technology
              sector, Aaradhya Techno Solutions strives to help customers not only in finding products but also in finding
              solutions. Our customers build products of all types, of all quantities, and of all specifications. We take
              pride in playing a vital role in helping their businesses achieve their goals.
            </Text>
          </Spoiler>
        </div>

        <div
          style={{
            flex: 1,
            borderBottom: 'none',
            order: isMobile || isTablet ? 2 : 0,
            marginTop: isMobile || isTablet ? '5rem' : '0',
          }}
        >
          <Carousel
            style={{
              animation: isVisible ? 'slideInLeftToRight 2.5s ease-out' : 'none',
            }}
            classNames={classes}
            slideGap="xl"
            mt={isMobile ? 'xl' : 'none'}
            withControls={false}
            slideSize={isMobile ? '42%' : '60%'}
            slidesToScroll={1}
            plugins={[autoplay.current]}
            align='center'
            loop
            height={isMobile ? '200' : '230'}
            onMouseEnter={() => autoplay.current.play()}
            onMouseLeave={() => autoplay.current.play()}
          >
            <Carousel.Slide>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWXG_r2oHdZERaiNByCyiNKPFsDEOJZwKaNA&s"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src="https://tse2.mm.bing.net/th?id=OIP.sx6zyPbQbbFWn4PIWPuPBwHaEK&pid=Api&P=0&h=180"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src="https://tse1.mm.bing.net/th?id=OIP.dPW3MK7recePDt5tBoXYYgHaEK&pid=Api&P=0&h=180"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                src="https://tse3.mm.bing.net/th?id=OIP.3RgJ1NPaPus31jfcPAxtngHaEK&pid=Api&P=0&h=180"
              />
            </Carousel.Slide>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Homepage2;
