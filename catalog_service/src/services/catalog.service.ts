import type { ProducRepository } from "../domain/models/product/product-repository.js";
import type { Product } from "../domain/models/product/product.js";


export class CatalogService {


    constructor(
        private productRepository:ProducRepository
    ){}


    async createProduct(input:any){

        const data = await this.productRepository.create(input);
        if(!data.id){
            throw new Error("No se pudo crear el producto");
        }
        return data;
    }

    async updateProduct(input:any){
        const data = this.productRepository.update(input);
        //emit event to update record in Elastic search
        return  data;
    }
    

    async getProducts(limit:number,offset:number):Promise<Product[]>{

        const products = await this.productRepository.find(limit,offset);

        return products;

    }


    async getProduct(id:number){

        const product = await this.productRepository.findOne(id);

        return product;
    }


    async deletProduct(id:number){
        const result = await this.productRepository.delete(id);
        return result;
    }

}