import type { CartRepositoryType } from "../types/repository.type.js";
import { DB } from "../db/db-connection.js";
import { cartsTable } from "../db/schema.js"


const createCart = async (input:any):Promise<{}> =>{
    //conect to db
    //perform db operations
    const result = await DB.insert(cartsTable).values({
        customerId:1234
    }).returning({cartId:cartsTable.id})

    return Promise.resolve({});


}

const findCart = async (input:any):Promise<{}> =>{
    return Promise.resolve({})
}

const updateCart = async (input:any):Promise<{}> =>{
    return Promise.resolve({})
}

const deleteCart = async (input:any):Promise<{}> =>{
    return Promise.resolve({})
}

export const CartRepository :CartRepositoryType = {

   create:createCart,
   find:findCart,
   update:updateCart,
   delete:deleteCart,

}