import type { Product } from "./product.js"

export interface ProducRepository {

    create(data:Product):Promise<Product>
    update(product:Product):Promise<Product>
    delete(id:any):Promise<any>
    find(limit:number,offet:number):Promise<Product[]>
    findOne(id:number):Promise<Product>

}