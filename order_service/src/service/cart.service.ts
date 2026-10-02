import type { CartRepositoryType } from "../types/repository.type.js"
import { GetProductDetails } from "../utils/broker/api.js";



//metodos del servicio que se inyecta el repositorio mediante parametro

export const createCart = async (input:any,repo:CartRepositoryType)=>{

    const product = await GetProductDetails(input.productId)

    if(product.stock > input.qty ){
        throw new Error("product is out of stock");
    }

    const data = await repo.create(input);
    return data
}

export const getCart = async (input:any,repo:CartRepositoryType)=>{
    return { message :"method not implemented"}
}

export const editCart = async (input:any,repo:CartRepositoryType)=>{
    return { message :"method not implemented"}
}

export const deleteCart = async (input:any,repo:CartRepositoryType)=>{
    return { message :"method not implemented"}
}

