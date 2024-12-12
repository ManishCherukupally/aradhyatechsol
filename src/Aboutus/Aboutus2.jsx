import React from 'react'
import { Image, Text ,Affix,rem,Transition,Button} from '@mantine/core';
import Image1 from '../assets/c3525bb3c87169f8002b6aa93925da68.jpeg';
import { useWindowScroll } from '@mantine/hooks';
import { FaArrowUp } from "react-icons/fa6";




const Aboutus2 = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '2rem',justifyContent:'center',alignItems:'center', paddingBottom:'3rem'}}>
         <Text
          align="center"
          size="2rem"
          weight={700}
          style={{
            color: "white",
            marginBottom: "3rem",
            fontSize: "3rem",
            marginTop:'2rem'
          }}
        >
          Team
        </Text>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', margin:'1rem'}}>
   
    <div style={{ flex: 0.2, }}>

<Image src={Image1} alt="Name of the CEO" />
<Text fz='34px' align='center' fw={700} style={{wordSpacing:'0.001rem'}}>Bandi Venkat Rao</Text>
<Text fz='18px' fw={700} align='center' color='#A2A2A2'>Chief Executive Officer (CEO)</Text>
</div>
     
      <div style={{ flex: 0.2, }}>

      <Image src={Image1} alt="Name of the CEO" />
      <Text fz='34px' align='center' fw={700} style={{wordSpacing:'0.001rem'}}>Name of the COO</Text>
      <Text fz='18px' fw={700} color='#A2A2A2' align='center'>Chief Operations Officer (COO)</Text>
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
  </div>
  )
}

export default Aboutus2
