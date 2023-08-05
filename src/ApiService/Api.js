import axios from 'axios';

// const BASE_URL = "https://fakestoreapi.com/"

export const getAllProducts =async()=>{
const response = await axios.get('https://fakestoreapi.com/products')
return response.data;
}

export const getProductId =async()=>{
    const response = await axios.get('https://fakestoreapi.com/products/${id}')
    return response.data;
    }

export const getProductImage =async()=>{
    const response = await axios.get('https://fakestoreapi.com/products/${id}/image')
    return response.data;
        }    