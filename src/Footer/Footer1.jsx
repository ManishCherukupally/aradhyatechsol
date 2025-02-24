import React from 'react';
import { Container, Grid, Text, Flex } from '@mantine/core';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer1 = () => {
  return (
    <div style={{ backgroundColor: '#002f5a', color: '#fff', padding: '20px 0', }}>
      <Container >
        <Grid>

          <Grid.Col md={7} sm={12}>
            <Text style={{ fontFamily: '"Marcellus", Sans-serif', }} fw={700} mb={9}>
              Contact info
            </Text>
            <Text style={{ fontfamily: '"Open Sans", Sans-serif', }} fz="md">Address: H.No.11-06-188/A, POCHAMMABAGH COLONY,</Text>
            <Text>SAROORNAGAR, HYDERABAD-500035.</Text>
            <Text style={{ fontfamily: '"Open Sans", Sans-serif', }} fz="md">Phone: +918008357293</Text>
            <Text style={{ fontfamily: '"Open Sans", Sans-serif', }} fz="md">Email: aaradhyatechsol1233@gmail.com</Text>
            <Text fz="xs" style={{ fontfamily: '"Open Sans", Sans-serif', }}>
              Designed and Developed by Automac Technologies
            </Text>

          </Grid.Col>





          <Grid.Col md={4} sm={12}>
            <Text style={{ fontFamily: '"Marcellus", Sans-serif', }} fw={700} mb={10}>
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

    </div>
  );
};

export default Footer1;
