import { Carousel } from '@mantine/carousel';
import { Text, Container, Card, Title, BackgroundImage, Affix, Button,  Transition, rem  } from "@mantine/core";
import { useWindowScroll } from '@mantine/hooks';
import { FaArrowUp } from "react-icons/fa6";
import  '../Homepage/Affix1.css'

const Homepage4 = () => {
  
  const [scroll, scrollTo] = useWindowScroll();


  return (

    <>
    <BackgroundImage src="https://image.freepik.com/free-photo/handshake-of-businessmen_1098-742.jpg">
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '2rem 0', paddingBottom: '4rem' }}>
        <Container mt='3rem' mb='3rem'>
          <Text
            align="center"
            size="2rem"
            weight={700}
            style={{
              color: "white",
              marginBottom: "3rem",
              fontSize: "3rem",
            }}
          >
            Our Clients
          </Text>

          <Carousel
            slideSize="30%"
            slideGap="lg"
            align="center"
            withIndicators
            slidesToScroll={3}
            height={330}
            controlsOffset='xl'
           
          >
          
            <Carousel.Slide>
              <Card
                shadow="sm"
                padding="lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "10px",
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Title color='white' order={3}>Client 1</Title>
                
              </Card>
            </Carousel.Slide>

           
            <Carousel.Slide>
            <Card
                shadow="sm"
                padding="lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "10px",
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Title color='white' order={3}>Client 2</Title>
                
              </Card>
            </Carousel.Slide>

           
            <Carousel.Slide>
            <Card
                shadow="sm"
                padding="lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "10px",
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Title color='white' order={3}>Client 3</Title>
                
              </Card>
            </Carousel.Slide>

          
            <Carousel.Slide>
            <Card
                shadow="sm"
                padding="lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "10px",
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Title color='white' order={3}>Client 4</Title>
                
              </Card>
            </Carousel.Slide>

            
            <Carousel.Slide>
            <Card
                shadow="sm"
                padding="lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "10px",
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Title color='white' order={3}>Client 5</Title>
                
              </Card>
            </Carousel.Slide>

            <Carousel.Slide>
            <Card
                shadow="sm"
                padding="lg"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  borderRadius: "10px",
                  textAlign: "center",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Title color='white' order={3}>Client 6</Title>
                
              </Card>
            </Carousel.Slide>
          </Carousel>
        </Container>
      </div>
    </BackgroundImage>
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

  </>
  );
};

export default Homepage4;
