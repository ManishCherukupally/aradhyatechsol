import React from 'react';
import { Text, Spoiler, Image,Button } from '@mantine/core';
import Image1 from '../assets/ats-products-technologies-overview-products.webp';

const Homepage2 = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', padding: '5rem',justifyContent:'center',alignItems:'center'}}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginTop:'2.5rem' }}>
      
        <div style={{ flex: 0.9, marginRight: '2rem' }}>
          <Text style={{ fontSize: '54px', fontWeight: 'bold',lineHeight:'3.5rem' }}>Welcome to ATS Technologies</Text>
          <Spoiler maxHeight={150} mt='3rem' showLabel={
              <Button variant="outline" style={{ borderRadius: '5rem' }} color="gray" mt="lg" size="xs">
              READ MORE
            </Button>
          } 
          hideLabel={
            <Button style={{ borderRadius: '5rem' }} variant="outline" mt='lg' color="gray" size="sm">
              Hide
            </Button>
            }>
            To provide excellent service, unbeatable pricing, and high-quality components within the technology sector, ATS Technologies strives to help customers not only in finding products, but also in finding solutions. Our customers build products of all types, of all quantities, and of all specifications. We take pride in playing a vital role in helping their businesses achieve their goals.To provide excellent service, unbeatable pricing, and high-quality components within the technology sector, ATS Technologies strives to help customers not only in finding products, but also in finding solutions. Our customers build products of all types, of all quantities, and of all specifications. We take pride in playing a vital role in helping their businesses achieve their goals.To provide excellent service, unbeatable pricing, and high-quality components within the technology sector, ATS Technologies strives to help customers not only in finding products, but also in finding solutions. Our customers build products of all types, of all quantities, and of all specifications. We take pride in playing a vital role in helping their businesses achieve their goals.
          </Spoiler>
        </div>

       
        <div style={{ flex: 1 }}>
          <Image src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWXG_r2oHdZERaiNByCyiNKPFsDEOJZwKaNA&s"} alt="ATS Products" />
        </div>
      </div>
    </div>
  );
};

export default Homepage2;
