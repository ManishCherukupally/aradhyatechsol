import React from 'react';
import { Container, Grid, Text, Flex } from '@mantine/core';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer1 = () => {
  return (
    <div style={{ backgroundColor: '#002f5a', color: '#fff', padding: '20px 0' }}>
      <Container >
        <Grid>
          
          <Grid.Col md={5} sm={12}>
            <Text fw={700} mb={9}>
              Contact info
            </Text>
            <Text fz="md">Address: H.No.11-06-188/A, POCHAMMABAGH COLONY,</Text>
            <Text>SAROORNAGAR, HYDERABAD-500035.</Text>
            <Text fz="md">Phone: +918008357293</Text>
            <Text fz="md">Email: aaradhyatechsol1233@gmail.com</Text>
          </Grid.Col>

          
          <Grid.Col md={3} sm={12}>
            <Text fw={700} mb={10}>
              Quick Links
            </Text>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 ,paddingLeft:'1rem'}}>
              <li>
                <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>Home</Link>
              </li>
              <li>
                <Link to="/service" style={{ textDecoration: 'none', color: '#fff' }}>Services</Link>
              </li>
              <li>
                <Link to="/product" style={{ textDecoration: 'none', color: '#fff' }}>Product</Link>
              </li>
              <li>
                <Link to="/aboutus" style={{ textDecoration: 'none', color: '#fff' }}>About Us</Link>
              </li>
              <li>
                <Link to="/contactus" style={{ textDecoration: 'none', color: '#fff' }}>Contact Us</Link>
              </li>
            </ul>
          </Grid.Col>

          
          <Grid.Col md={4} sm={12}>
            <Text fw={700} mb={10}>
              Reach us through
            </Text>
            <Flex gap="md">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff' }}
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff' }}
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#fff' }}
              >
                <FaInstagram size={30} />
              </a>
            </Flex>
           
            
          </Grid.Col>
          
          
        
        </Grid>      
        
      </Container>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-5rem' }}>
          <Text fz="xs"  style={{ marginTop:'3rem', marginRight:'10rem'}}>
            Designed and Developed by AutoMac Technologies
          </Text>
        </div>
    </div>
  );
};

export default Footer1;
