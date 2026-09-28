import type { ProducRepository } from "../../domain/models/product/product-repository.js";
import type { Product } from "../../domain/models/product/product.js";



export class MockCatalogRepository implements ProducRepository {


    create(data: Product): Promise<Product> {
       const mockProduct = {
        id:1,
        ...data
       } as Product;

       return Promise.resolve(mockProduct);

    }

    update(data:Product): Promise<Product> {
        return Promise.resolve(data as unknown as Product);
    }

    delete(id: any): Promise<void> {
        return Promise.resolve(id);
    }

    find(): Promise<Product[]> {
        return Promise.resolve([]);
    }

    findOne(id: number): Promise<Product> {
       return Promise.resolve({} as Product);
    }

    
    
}