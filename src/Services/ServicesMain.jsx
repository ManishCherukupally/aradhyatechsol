import React from 'react'
import Services1 from './Services1'
import ServiceMobile from './ServiceMobile'
import { useMediaQuery } from '@mantine/hooks';

const ServicesMain = () => {

  const isMobile = useMediaQuery("(max-width: 768px)");
  return (




    <>{isMobile ? <ServiceMobile /> : <Services1 />}</>


  )
}

export default ServicesMain
