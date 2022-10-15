import axios from "axios"
// const axios = require('axios').default
const BASE_URL = "https://fakestoreapi.com/products"

const getAllProducts = async () => {
    const resp = await axios.get(BASE_URL)
    // console.log("RESP");
    // console.log(resp);
    return resp.data
}
export {getAllProducts}