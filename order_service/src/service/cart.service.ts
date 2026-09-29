import type { CartRepositoryType } from "../types/repository.type.js"



//metodos del servicio que se inyecta el repositorio mediante parametro

export const createCart = async (input:any,repo:CartRepositoryType)=>{
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

