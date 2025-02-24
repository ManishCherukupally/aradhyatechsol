import React from 'react';
import { Burger, Header, Image, Menu, Tabs } from '@mantine/core';
import Image1 from '../assets/ats 1.png';
import { Link, useLocation } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import './CustomHeader.css';
import { useMediaQuery } from '@mantine/hooks';


const CustomHeader = () => {
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const activeTab = () => {
    if (location.pathname === '/') return 'home';
    if (location.pathname.startsWith('/product')) return 'product';
    if (location.pathname.startsWith('/service')) return 'services';
    if (location.pathname === '/aboutus') return 'aboutus';
    if (location.pathname === '/contactus') return 'connectus';
    return '';
  };

  return (
    <Header className="custom-header" >
      <Image src={Image1} height={isMobile ? '4.5rem' : "6rem"} width={isMobile ? '12rem' : "12rem"} alt="Logo" />

      {/* Desktop Navigation */}
      <div className="nav-tabs">
        <Tabs value={activeTab()} styles={{
          tab: {
            fontSize: '19px',
            fontWeight: '600',
            fontFamily: '"Alata",Sans-serif',
            color: '#0082FF',
            '&[data-active]': {
              color: 'white',
              borderBottom: '2px solid white',
            },
            '&:hover': {
              backgroundColor: 'transparent',
              borderBottom: '2px solid white',
              boxShadow: 'none',
              color: 'white',
            },
            '&[data-active]:hover': {
              borderBottom: '2px solid white',
            },
          },
          tabsList: { borderBottom: 'none' },
        }}>
          <Tabs.List>
            <Tabs.Tab value="home" component={Link} to='/'>Home</Tabs.Tab>
            <Tabs.Tab value="services" component={Link} to='/service'>Services</Tabs.Tab>
            <Tabs.Tab value="product" component={Link} to='/product'>Products</Tabs.Tab>
            <Tabs.Tab value="aboutus" component={Link} to='/aboutus'>About us</Tabs.Tab>
            <Tabs.Tab value="connectus" component={Link} to='/contactus'>Contact us</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>

      {/* Mobile Navigation - Burger Dropdown */}
      <Menu opened={opened} onOpenChange={toggle} color='white' >
        <Menu.Target>
          <Burger mt='xl' mr='md' className="burger-menu" opened={opened} onClick={toggle} aria-label="Toggle menu" />
        </Menu.Target>
        <Menu.Dropdown className="dropdown-menu">
          <Menu.Item
            component={Link}
            to="/"
            onClick={() => toggle(false)}
            className={activeTab() === 'home' ? 'active-menu-item' : ''}
          >
            Home
          </Menu.Item>
          <Menu.Item
            component={Link}
            to="/service"
            onClick={() => toggle(false)}
            className={activeTab() === 'services' ? 'active-menu-item' : ''}
          >
            Services
          </Menu.Item>
          <Menu.Item
            component={Link}
            to="/product"
            onClick={() => toggle(false)}
            className={activeTab() === 'product' ? 'active-menu-item' : ''}
          >
            Products
          </Menu.Item>
          <Menu.Item
            component={Link}
            to="/aboutus"
            onClick={() => toggle(false)}
            className={activeTab() === 'aboutus' ? 'active-menu-item' : ''}
          >
            About us
          </Menu.Item>
          <Menu.Item
            component={Link}
            to="/contactus"
            onClick={() => toggle(false)}
            className={activeTab() === 'connectus' ? 'active-menu-item' : ''}
          >
            Contact us
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>

    </Header>
  );
};

export default CustomHeader;