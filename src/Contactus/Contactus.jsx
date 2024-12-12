import React from 'react'
import {
    Text,Grid,Container,Center,
    AppShell,Transition,rem,Affix,Button
  } from '@mantine/core';
  import { SlLocationPin } from "react-icons/sl";
  import { TfiHeadphoneAlt } from "react-icons/tfi";
  import { GrSend } from "react-icons/gr";
import CustomHeader from '../Header/CustomHeader';
import { FaArrowUp } from "react-icons/fa6";
import { useWindowScroll } from '@mantine/hooks';

  

const Contactus = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <AppShell
  header={
    <div style={{ backgroundColor: 'black', }}>
      <CustomHeader />
    </div>
  }
  styles={{
    main: {
      padding: 0, 
      
    },
  }}
>
  
    <div
      style={{
        height: '100vh',
        backgroundColor: 'black',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100vh - 350px)',
          textAlign: 'center',
          backgroundColor: '#0168CB5C', 
          margin: 0, 
        }}
      >
        <Text
          color="white"
          fz="55px"
          fw="bolder"
          style={{ width: '50rem', wordSpacing: '2px' }}
        >
          Let's Talk !
        </Text>
      </div>
  
      <div style={{ padding: '6rem 0', backgroundColor: 'black'}} >
       
          <Grid justify="center" align="center" >
            <Grid.Col span={4}>
              <Center>
                <div style={{ textAlign: 'center' }}>
                  <SlLocationPin size={40} color="#1976d2" />
                  <Text weight={700} size="lg" mt="xs" color='white'>
                    ATS Technologies
                  </Text>
                  <Text color='white' size="sm" mt="xs">
                    11-06-188/A, POCHAMMABAGH COLONY, <br />
                    SAROORNAGAR, HYDERABAD - 500035.
                  </Text>
                </div>
              </Center>
            </Grid.Col>
  
            <Grid.Col span={4}>
              <Center>
                <div style={{ textAlign: 'center' }}>
                  <TfiHeadphoneAlt size={40} color="#1976d2" />
                  <Text color='white' weight={700} size="lg" mt="xs">
                    Call Us
                  </Text>
                  <Text color='white' size="sm" mt="xs">
                    Phone: +918008357293
                  </Text>
                </div>
              </Center>
            </Grid.Col>
  
            <Grid.Col span={4}>
              <Center>
                <div style={{ textAlign: 'center' }}>
                  <GrSend size={40} color="#1976d2" />
                  <Text color='white' weight={700} size="lg" mt="xs">
                    Email Us
                  </Text>
                  <Text color='white' size="sm" mt="xs">
                    aaradhyatechsol1233@gmail.com
                  </Text>
                </div>
              </Center>
            </Grid.Col>
          </Grid>
       
      </div>
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
    </div>
  </AppShell>
  
  
  )
}

export default Contactus
