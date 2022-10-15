import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {getAllProducts} from '../../lib/axiosRequest.js'

const initialState = {
  products: [],
  filterProducts: [],
}

// Get user goals
export const getProducts = createAsyncThunk(
    'products/getAll',
    async () => {
      try {
        return await getAllProducts()
      } catch (error) {
        console.log("ERROR ON ASYNC THINK GET PRODUCTS");
        console.log(error);
      }
    }
  )

const numberIsInRange = (number, min, max) => {
  return ((number > min) && (number < max))
}  
const fixCategoryName = (categoryName) => {
  // categoryName: men's clothing -> mensClothing
  let ft = categoryName.split(" ").map((word)=>[...word].filter( (c)=> (c.toUpperCase()!== c.toLowerCase()) ).join("") )
  let rs = ft.map((word,i)=>{
    if (i!==0){
      return word.charAt(0).toUpperCase() + word.slice(1);
    }else{
      return word
    }
  }).join("")
  return rs;  
}
export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    applyFilters: (state, action) => {
      let minRate = action.payload.minimumRate
      let minPrice = action.payload.priceRange.minimum
      let maxPrice = action.payload.priceRange.maximum
      let categories = action.payload.categories
      console.log("LIST OF CATEGORIES PASSED TO FILTER");
      console.log(categories);
      let filteredProducts = []
      state.products.forEach((product)=>{
        let fixedCategoryName = fixCategoryName(product.category)
        console.log(`Fix cat: ${fixedCategoryName}`);
        if ( categories.includes(fixedCategoryName) && (product.rating.rate >= minRate) && (numberIsInRange(parseInt(product.price), minPrice, maxPrice)) ){
          filteredProducts.push(product)
        }
      })
      state.filterProducts = filteredProducts
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload
            // set filtered Products initial value equal to products
            state.filterProducts = action.payload
        })    
        .addCase(getProducts.rejected, (state, action) => {
            console.log("REJECTED GET PRODUCTS");
        })    
  }
})

export const { applyFilters } = productsSlice.actions

export default productsSlice.reducer