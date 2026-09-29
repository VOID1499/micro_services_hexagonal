import type { CartRepositoryType } from "../types/repository.type.js"


export const createCart = async (input:any,repo:CartRepositoryType)=>{
    const data = await repo.create(input);
    return { message :"method not implemented"}
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