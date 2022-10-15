import React, {useEffect} from 'react'
import ProductFilter from './ProductFilter'
import ProductsList from "./ProductsList"
import {getProducts} from '../features/products/productsSlice'
import { useSelector, useDispatch } from 'react-redux'

const ProductsMain = () => {
    const dispatch = useDispatch()
    const {filterProducts} = useSelector((state) => state.products)
    useEffect(() => {
        dispatch(getProducts())
      return () => {
      }
    }, [])  

  return (
    <div className='flex flex-row content-between'>
        <ProductFilter  />
        <div className='flex flex-col'>
          <div className='mx-4 mt-2'>
            <p className='text-lightBlack font-medium '>Found {`${filterProducts.length}`} products</p>
          </div>
          <ProductsList products={filterProducts} />
        </div>
    </div>
  )
}

export default ProductsMain