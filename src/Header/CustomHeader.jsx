import React from 'react';
import { Header, Image, Tabs } from '@mantine/core';
import Image1 from '../assets/ats logo.png';
import { Link, useLocation } from 'react-router-dom';

const CustomHeader = () => {
  const location = useLocation();

  const activeTab = () => {
    if (location.pathname === '/') return 'home';
    if (location.pathname.startsWith('/product')) return 'product'; 
    if (location.pathname.startsWith('/service')) return 'services';
    if (location.pathname === '/aboutus') return 'aboutus';
    if (location.pathname === '/contactus') return 'connectus';
    return '';
      }

  return (
    <Header
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.01)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1rem',
        border: 'none',
        position: 'revert',
      }}
    >
      <Image pt="md" src={Image1} height="6rem" width="15rem" alt="Logo" />

      <Tabs
               value={activeTab()}
        
        styles={{
          tab: {
            fontSize: '19px',
            fontWeight: '700',
            color: '#0082FF',
            '&[data-active]': {
              color: 'white',
              borderBottom: '2px solid white',
            },
            '&:hover': {
              backgroundColor: 'transparent',
              borderBottom: '2px solid #0082FF',
              boxShadow: 'none',
            },
          },
          tabsList: {
            borderBottom: 'none',
          },
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="home" component={Link} to='/'>Home</Tabs.Tab>
          <Tabs.Tab value="services" component={Link} to='/service'>Services</Tabs.Tab>
          <Tabs.Tab value="product" component={Link} to='/product'>Products</Tabs.Tab>
          <Tabs.Tab value="aboutus" component={Link} to='/aboutus'>About us</Tabs.Tab>
          <Tabs.Tab value="connectus" component={Link} to='/contactus'>Contact us</Tabs.Tab>
        </Tabs.List>
      </Tabs>
    </Header>
  );
};

export default CustomHeader;
