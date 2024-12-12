import {
  AppShell,
  BackgroundImage,
  Text,
  Button,
} from '@mantine/core';
import CustomHeader from '../Header/CustomHeader'
import React from 'react';
import { Link } from 'react-router-dom';

const Homepage1 = () => {
  return (
    <BackgroundImage
      src="https://www.levisonenterprises.com/wp-content/uploads/2023/10/What-Can-Cause-Printed-Circuit-Boards-to-Fail-jpg.jpeg"
      h="99vh"
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      ></div>

      <AppShell
        header={
          <CustomHeader />
        }>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'calc(100vh - 250px)',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          <Text
            color="#0082FF"
            fz="55px"
            fw="bolder"
            className="heartbeat-text" 
            style={{
              width: '50rem',
              zIndex: 1,
              wordSpacing: '2px',
            }}
          >
            Expert PCB Solutions,
            Delivered.
          </Text>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            top: '-6rem',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          <Button
            fw={700}
            h="3.5rem"
            w="12rem"
            fz="20px"
            style={{ borderRadius: '5rem', backgroundColor: '#0082FF' }}
            component={Link} to='/aboutus'
          >
            About Us
          </Button>
        </div>
      </AppShell>
    </BackgroundImage>
  );
};

export default Homepage1;
