import axios from "axios"
import { ApiError } from "../error/errors.js";

const CATALOG_BASE_URL = process.env.CATALOG_BASE_URL || "http://localhost:3000" 


export const GetProductDetails = async (productId:number)=>{

 
    try {
        
        const response = await axios.get(`${CATALOG_BASE_URL}/products7${productId}`);
        const product = response.data;
        return product
    } catch (error) {
        throw new ApiError("error al obtener producto");
    }

}