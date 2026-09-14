import type { ProducRepository } from "../../domain/models/product/product-repository.js";
import type { Product } from "../../domain/models/product/product.js";


export class InMemoryProducRepository implements ProducRepository {
    
    product:any[]= [];

    create(data: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    update(product: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    delete(id: any): Promise<void> {
        throw new Error("Method not implemented.");
    }
    find(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
    findOne(id: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    

 



}