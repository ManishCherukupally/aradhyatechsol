import React from 'react'
import Product1 from './Product1'
import ProductMobile from './ProductMobile'
import { useMediaQuery } from '@mantine/hooks';


const ProductsMain = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (




    <>{isMobile ? <ProductMobile /> : <Product1 />}</>
  )
}

export default ProductsMain
