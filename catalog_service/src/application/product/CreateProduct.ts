import type { ProducRepository } from "../../domain/models/product/product-repository.js";



export class CreateProduct {


    constructor(
        private productRepository:ProducRepository
    ){}

    
    async execute(name:string,description:String,price:number,stock:number):Promise<void>{
        
    }

}