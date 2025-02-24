import {
  AppShell,
  BackgroundImage,
  Text,
  Button,
} from '@mantine/core';
import CustomHeader from '../Header/CustomHeader'
import React from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mantine/hooks';


const Homepage1 = () => {

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div style={{ position: 'relative', height: '65vh' }}>
      <BackgroundImage
        src="https://www.levisonenterprises.com/wp-content/uploads/2023/10/What-Can-Cause-Printed-Circuit-Boards-to-Fail-jpg.jpeg"
        h="65vh"
        mt='6rem'
      >

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        ></div>


        <AppShell
          header={
            <div style={{ backgroundColor: 'black', display: 'flex' }}>
              <CustomHeader />
            </div>
          }
        >

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: 'calc(100vh - 18rem)',
              textAlign: 'center',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Text
              color="#0082FF"
              fz={isMobile ? '30px' : "55px"}
              fw="bolder"
              className="heartbeat-text"
              style={{
                fontFamily: '"Marcellus", Sans-serif',
                wordSpacing: '2px',
                animation: 'fadeSlideUp 1.5s ease-out',
              }}
            >
              Expert PCB Solutions, Delivered.
            </Text>

            <Button
              fw={700}
              h={isMobile ? "3rem" : "3.5rem"}
              w={isMobile ? "9rem" : "12rem"}
              fz="20px"
              sx={{
                marginTop: "2rem",
                borderRadius: "5rem",
                backgroundColor: "#0082FF",
                color: "#ffffff",
                fontFamily: '"Marcellus", Sans-serif',
                animation: "fadeSlideUp 1.5s ease-out",
                transition: "background-color 0.3s ease, color 0.3s ease",

                "&:hover": {
                  backgroundColor: "#ffffff",
                  color: "#0082FF",
                },
              }}
              component={Link}
              to="/aboutus"
            >
              About Us
            </Button>

          </div>
        </AppShell>
      </BackgroundImage>
    </div>
  );
};

export default Homepage1;
