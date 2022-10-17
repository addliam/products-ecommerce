import React,{useState, useEffect} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiFillStar} from 'react-icons/ai'
import {RiMoneyDollarCircleLine} from 'react-icons/ri'

import { useSelector, useDispatch } from 'react-redux'
import {applyFilters} from '../features/products/productsSlice'

const ProductFilter = () => {
  const [minimumRate, setMinimumRate] = useState(1)
  const [priceRange, setPriceRange] = useState({
    minimum: 0,
    maximum: 99999,
  })
  const [categories, setCategories] = useState({
    mensClothing: true,
    womensClothing: true,
    jewelery: true,
    electronics: true,
  })
  const {products} = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("CATEGORIES ON EFFECT");
    console.log(categories);
    dispatch(applyFilters({
      minimumRate: minimumRate,
      priceRange: priceRange,
      categories: Object.keys(categories).filter((category) => categories[category] === true)
    }))
    return () => {
    }
  }, [minimumRate, priceRange, categories ])

  const handleCategoriesCheck = (checked, category) => {
    setCategories((prevValue)=> ({...prevValue, [category]: checked}))
  }

  const rangePriceHandler = (type, value) => {
    // TODO check not negative and not more than 999'999'999
    if (type==='max'){
      setPriceRange((prevValue)=> {
        let priceRange = {
          minimum: prevValue.minimum,
          maximum: value
        } 
        return priceRange
      } )  
    }
    if (type==='min'){
      setPriceRange((prevValue)=> {
        let priceRange = {
          minimum: value,
          maximum: prevValue.maximum
        } 
        return priceRange
      } )  
    }
  }

  const minimumRateHandler = (value) =>{
    let nextValue = value
    setMinimumRate((prevValue)=>{
      if (nextValue < 1){
        return 1
      }else if (nextValue > 5){
        return 5
      }else{
        return nextValue
      }
    })
  }

  const filterByNameHandler = () =>{
    console.log("BY NAME");
  }
  return (
    <div className='border-r-2 border-gray max-w-[25%] px-4 py-4'>
        <h2 className='text-[20px] font-semibold '>FILTERS</h2>
        <div className='mt-4'>
          <h4 className='text-[18px] font-medium text-blackGray'>Search keyword</h4>
          <div className='flex box-content flex-row gap-2 mt-1'>
            <input list="products-list" placeholder='Type a word' className='border-[1px] px-1 border-gray text-[15px] py-[6px]' type="search" />
            <datalist id='products-list'>
              {
                products.map((product)=>(
                  <option key={product.id} value={product.title}></option>
                ))
              }
            </datalist>
            <button className='hidden bg-lightBlue px-2 py-2 rounded-md ' onClick={filterByNameHandler}>
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
            <input className='border-[1px] py-1 px-1 border-gray ' type="number" name="minimumPrice" id="minimumPrice" value={priceRange.minimum} placeholder='Minimum'
            onChange={(e)=>rangePriceHandler("min",e.target.value)}/>
            <input className='border-[1px] py-1 px-1 border-gray ' type="number" name="maximumPrice" id="maximumPrice" value={priceRange.maximum} placeholder='Maximum'
            onChange={(e)=>rangePriceHandler("max",e.target.value)} />
          </div>
        </div>
        <div className='mt-4'>        
          <div className='flex flex-row gap-2 items-center'>
            <h4 className='text-[18px] font-medium text-blackGray'>Minimum rate</h4>
            <AiFillStar />
          </div>
          <div className='mt-2 flex flex-col gap-2'>
            <input className='border-[1px] py-1 px-1 border-gray ' type="number" name="minimumRate" id="minimumRate" value={minimumRate}
            onChange={(e)=>minimumRateHandler(e.target.value)} placeholder='Stars number' />
          </div>
        </div>
        <div className='mt-4'>        
          <h4 className='text-[18px] font-medium text-blackGray'>Category</h4>
          <div className='mt-2 flex flex-col gap-2'>
            <div className='flex flex-row gap-2 items-center'>
              <input className='w-[18px] h-[18px] border-gray ' type="checkbox" name="men_clothing" id="men_clothing" placeholder='men_clothing' defaultChecked
              value={categories.mensClothing} onChange={(e)=>handleCategoriesCheck(e.target.checked, "mensClothing")} />
              <label htmlFor="men_clothing">Men's clothing</label>              
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <input className='w-[18px] h-[18px] border-gray ' type="checkbox" name="women_clothing" id="women_clothing" placeholder='women_clothing' defaultChecked
              value={categories.womensClothing} onChange={(e)=>handleCategoriesCheck(e.target.checked, "womensClothing")} />
              <label htmlFor="women_clothing">Women's clothing</label>              
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <input className='w-[18px] h-[18px] border-gray ' type="checkbox" name="jewelery" id="jewelery" placeholder='jewelery'
              value={categories.jewelery} onChange={(e)=>handleCategoriesCheck(e.target.checked, "jewelery")} defaultChecked />
              <label htmlFor="jewelery">Jewelery</label>              
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <input className='w-[18px] h-[18px] border-gray ' type="checkbox" name="electronics" id="electronics" placeholder='electronics'
              value={categories.electronics} onChange={(e)=>handleCategoriesCheck(e.target.checked, "electronics")} defaultChecked />
              <label htmlFor="electronics">Electronics</label>              
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductFilter