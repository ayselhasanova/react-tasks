import React from 'react'
import img from './assets/img/image.png'
import ProductName from './ProductName'
import ProductPrice from './ProductPrice'
import './product.css'

const Product = () => {
  return (
    <div className='container'>
        <img src={img} alt="img" />
        <ProductName/>
        <ProductPrice/>
    </div>
  )
}

export default Product