import type { Product } from "./product.js"

export interface ProducRepository {

    create(data:Product):Promise<Product>
    update(product:Product):Promise<Product>
    delete(id:any):Promise<void>
    find():Promise<Product[]>
    findOne(id:number):Promise<Product>

}