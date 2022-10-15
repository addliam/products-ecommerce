import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {getAllProducts} from '../../lib/axiosRequest.js'

const initialState = {
  products: [],
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

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterByRate: (state, action) => {
      console.log("MINIMUM RATE");
      let minRate = action.payload.minimumRate
      console.log(minRate);
    //   state.products = state.products;
      let currentState = state.products;
      state.products = currentState.filter((product)=>product.rating.rate >= minRate)
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload
        })    
        .addCase(getProducts.rejected, (state, action) => {
            console.log("REJECTED GET PRODUCTS");
        })    
  }
})

export const { filterByRate } = productsSlice.actions

export default productsSlice.reducer