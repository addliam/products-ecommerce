import React,{useState, useEffect} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'
import {RiMoneyDollarCircleLine} from 'react-icons/ri'

import { useDispatch } from 'react-redux'
import {filterByRate} from '../features/products/productsSlice'

const ProductFilter = () => {
  const [minimumRate, setMinimumRate] = useState(5)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filterByRate({minimumRate}))
    return () => {
    }
  }, [minimumRate])

  const filterByNameHandler = () =>{
    console.log("BY NAME");
  }
  return (
    <div className='border-2 border-blue max-w-[25%] px-4 py-4'>
        <h2 className='text-[20px] font-semibold '>FILTERS</h2>
        <div className='mt-4'>
          <h4 className='text-[18px] font-medium text-blackGray'>Search keyword</h4>
          <div className='flex box-content flex-row gap-2 mt-1'>
            <input placeholder='Type a word' className='border-[1px] px-1 border-gray ' type="text" />
            <button className='bg-lightBlue px-2 py-2 rounded-md ' onClick={filterByNameHandler}>
              <AiOutlineSearch />
            </button>
          </div>
        </div>
        <div className='mt-4'>        
          <div className='flex flex-row gap-2 items-center'>
            <h4 className='text-[18px] font-medium text-blackGray'>Price range</h4>
            <RiMoneyDollarCircleLine size={22} />
          </div>
          <div className='mt-2 flex flex-col gap-2'>
            <input className='border-[1px] py-1 px-1 border-gray ' type="number" name="minimumPrice" id="minimumPrice" placeholder='Minimum' />
            <input className='border-[1px] py-1 px-1 border-gray ' type="number" name="maximumPrice" id="maximumPrice" placeholder='Maximum' />
          </div>
        </div>
        <div className='mt-4'>        
          <div className='flex flex-row gap-2 items-center'>
            <h4 className='text-[18px] font-medium text-blackGray'>Minimum rate</h4>
            <AiFillStar />
          </div>
          <div className='mt-2 flex flex-col gap-2'>
            <input className='border-[1px] py-1 px-1 border-gray ' type="number" name="minimumRate" id="minimumRate" onChange={(e)=>setMinimumRate(e.target.value)} placeholder='Stars number' />
          </div>
        </div>
        <div className='mt-4'>        
          <h4 className='text-[18px] font-medium text-blackGray'>Category</h4>
          <div className='mt-2 flex flex-col gap-2'>
            <div className='flex flex-row gap-2 items-center'>
              <input className='w-[18px] h-[18px] border-gray ' type="checkbox" name="men_clothing" id="men_clothing" placeholder='men_clothing' defaultChecked />
              <label htmlFor="men_clothing">Men's clothing</label>              
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <input className='w-[18px] h-[18px] border-gray ' type="checkbox" name="women_clothing" id="women_clothing" placeholder='women_clothing' defaultChecked />
              <label htmlFor="women_clothing">Women's clothing</label>              
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <input className='w-[18px] h-[18px] border-gray ' type="checkbox" name="jewelery" id="jewelery" placeholder='jewelery' defaultChecked />
              <label htmlFor="jewelery">Jewelery</label>              
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <input className='w-[18px] h-[18px] border-gray ' type="checkbox" name="electronics" id="electronics" placeholder='electronics' defaultChecked />
              <label htmlFor="electronics">Electronics</label>              
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductFilter