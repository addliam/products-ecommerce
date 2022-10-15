import ProductCard from './ProductCard'

const ProductsList = ({products}) => {
  return (
    <div className='flex flex-row gap-4 max-w-[980px] flex-wrap'>
        {  
            products.map((product)=>(
                <ProductCard key={product.id} product={product} />
            ))
        }
    </div>
  )
}

export default ProductsList