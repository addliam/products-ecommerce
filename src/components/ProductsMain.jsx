import React, {useEffect, useState} from 'react'
import ProductFilter from './ProductFilter'
import ProductsList from "./ProductsList"
// import {getAllProducts} from '../lib/axiosRequest.js'
import {getProducts} from '../features/products/productsSlice'
import { useSelector, useDispatch } from 'react-redux'

const ProductsMain = () => {
    const dispatch = useDispatch()
    const {products} = useSelector((state) => state.products)
    useEffect(() => {
        dispatch(getProducts())
      return () => {
      }
    }, [])
    
    // const [productDataJSON, setProductDataJSON] = useState([]);
    // useEffect(() => {
    //     getAllProducts()
    //     .then((data)=>{
    //         console.log(data);
    //         setProductDataJSON(data)
    //     })
    //     .catch((err)=>{console.log(err)})
    //   return () => {
    //   }
    // }, [])    

  return (
    <div className='flex flex-row content-between'>
        <ProductFilter  />
        <ProductsList products={products} />
    </div>
  )
}

export default ProductsMain