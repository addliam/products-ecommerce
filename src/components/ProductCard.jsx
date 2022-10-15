import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'

const ProductCard = ({product}) => {
    const filledStars = Math.round(product.rating.rate)
    const outlinedStars = 5 - filledStars
  return (
    <div className='bg-white box-border w-[312px] flex flex-col px-[24px] py-[26px] shadow-lg '>
        <div className='w-[258px] h-[258px] mx-auto'>
            <img className='w-[100%] max-h-[100%] object-cover ' src={product.image} alt={`product_${product.title}}`} />
        </div>
        <p className='font-bold text-lightBlack leading-[30px] text-[28px] mt-4 '>
            ${product.price}
        </p>        
        <h4 className='font-medium text-lightBlack text-[20px] mt-2 '>
            {product.title}            
        </h4>
        <p className='font-semibold mt-1 text-[14px] text-blue '>
            {product.category}
        </p>
        <div className='rating flex flex-row gap-[2px] items-center content-center justify-end mt-4 '>
            { 
            Array(filledStars).fill(null).map((_,indx)=>(
                <AiFillStar key={indx} />
            ))
            }
            { 
            Array(outlinedStars).fill(null).map((_,indx)=>(
                <AiOutlineStar key={indx} />
            ))
            }
            <span className='font-semibold text-lightBlack ml-2 text-[14px] leading-[14px] '>
                {product.rating.rate}                
            </span>            
        </div>
        <div className='ml-auto mt-6 '>
            <button className='bg-[#FBBF23] rounded-md px-6 py-2 text-black font-medium text-[18px] hover:bg-[#F1B722] '>
                Add to cart
            </button>
        </div>

    </div>
  )
}

export default ProductCard