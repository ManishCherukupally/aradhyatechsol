import React from 'react';
import {
  Text,
  Grid,
  Center,
  AppShell,
  Transition,
  rem,
  Affix,
  Button,
} from '@mantine/core';
import { SlLocationPin } from 'react-icons/sl';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
import { GrSend } from 'react-icons/gr';
import CustomHeader from '../Header/CustomHeader';
import { FaArrowUp } from 'react-icons/fa6';
import { useWindowScroll } from '@mantine/hooks';
import '../Contactus/Contact11.css';

const Contactus = () => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <AppShell
      header={
        <div style={{ backgroundColor: 'black' }}>
          <CustomHeader />
        </div>
      }
      styles={{
        main: {
          padding: 0,
          marginTop: '4rem',
          overflowX: 'hidden',
        },
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          height: '65vh',
          marginTop: '2rem',
          overflowX: 'hidden',
        }}
      >
        <div
          style={{
            backgroundImage:
              'url(https://torchsauce.com/wp-content/uploads/2016/04/contact-us-banner.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
            }}
          >
            <Text
              color="white"
              fz="55px"
              fw="bolder"
              textAlign="center"
              style={{
                textAlign: 'center',
                fontFamily: '"Marcellus", Sans-serif',
                animation: 'fadeSlideUp 1.5s ease-out',
              }}
            >
              Contact us
            </Text>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div style={{ padding: '6rem 0', backgroundColor: 'black', height: '55vh', justifyContent: 'center', alignContent: 'center' }}>
        <Grid justify="center" align="center" gutter="lg">
          <Grid.Col span={12} md={4}>
            <Center>
              <div
                style={{
                  textAlign: 'center',
                  animation: 'slideInLeftToRight 2s ease-out',
                }}
              >
                <SlLocationPin size={40} color="#1976d2" />
                <Text
                  weight={700}
                  size="lg"
                  mt="xs"
                  color="white"
                  style={{ fontFamily: '"Open Sans", Sans-serif' }}
                >
                  Aaradhya Techno Solutions
                </Text>
                <Text
                  color="white"
                  size="sm"
                  mt="xs"
                  style={{ fontFamily: '"Open Sans", Sans-serif' }}
                >
                  11-06-188/A, POCHAMMABAGH COLONY, <br />
                  SAROORNAGAR, HYDERABAD - 500035.
                </Text>
              </div>
            </Center>
          </Grid.Col>

          <Grid.Col span={12} md={4}>
            <Center>
              <div
                style={{
                  textAlign: 'center',
                  animation: 'slideInLeftToRight 1.5s ease-out 0.5s',
                  animationFillMode: 'both',
                }}
              >
                <TfiHeadphoneAlt size={40} color="#1976d2" />
                <Text
                  color="white"
                  weight={700}
                  size="lg"
                  mt="xs"
                  style={{ fontFamily: '"Open Sans", Sans-serif' }}
                >
                  Call Us
                </Text>
                <Text
                  color="white"
                  size="sm"
                  mt="xs"
                  style={{ fontFamily: '"Open Sans", Sans-serif' }}
                >
                  Phone: +918008357293
                </Text>
              </div>
            </Center>
          </Grid.Col>

          <Grid.Col span={12} md={4}>
            <Center>
              <div
                style={{
                  textAlign: 'center',
                  animation: 'slideInLeftToRight 1.5s ease-out 1s',
                  animationFillMode: 'both',
                }}
              >
                <GrSend size={40} color="#1976d2" />
                <Text
                  style={{ fontFamily: '"Open Sans", Sans-serif' }}
                  color="white"
                  weight={700}
                  size="lg"
                  mt="xs"
                >
                  Email Us
                </Text>
                <Text
                  color="white"
                  size="sm"
                  mt="xs"
                  style={{ fontFamily: '"Open Sans", Sans-serif' }}
                >
                  aaradhyatechsol1233@gmail.com
                </Text>
              </div>
            </Center>
          </Grid.Col>
        </Grid>
      </div>

      {/* Scroll-to-Top Button */}
      <Affix position={{ bottom: rem(20), right: rem(20) }} zIndex={1000}>
        <Transition transition="fade" mounted={scroll.y > 0}>
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
    </AppShell>
  );
};

export default Contactus;
