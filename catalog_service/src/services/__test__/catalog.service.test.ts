import { jest } from "@jest/globals";
import { Factory } from "rosie";
import type { ProducRepository } from "../../domain/models/product/product-repository.js";
import { Product } from "../../domain/models/product/product.js";
import { MockCatalogRepository } from "../../infraestructure/repositories/MockCatalogRepository.js";
import { CatalogService } from "../catalog.service.js";
import { faker } from "@faker-js/faker";
import { ProductFactory } from "../../utils/fixtures/index.js";


const mockProduct = (rest?:any)=>{

    return {
        name:faker.commerce.productName(),
        description:faker.commerce.productDescription(),
        stock:faker.number.int({min:0,max:100}),
        price:+faker.commerce.price(),
        ...rest
    }
}

describe("suite calatog service",()=>{

    let repository:ProducRepository;
    
    beforeEach(()=>{
        repository = new MockCatalogRepository();
    });
    
    afterEach(()=>{
        repository = {} as MockCatalogRepository;
    });



    //suite product cases
    describe("create product cases",()=>{



        test("deberia crear un producto", async ()=>{

            const service = new CatalogService(repository);

            const result = await service.createProduct(mockProduct());

            expect(result).toMatchObject({
                id:expect.any(Number),
                name:expect.any(String),
                description:expect.any(String),
                price:expect.any(Number),
                stock:expect.any(Number),
            });

        });


        test("deberia lanzar un error al no poder crear el producto", async ()=>{
            const service = new CatalogService(repository);
           jest
            .spyOn(repository, "create")
            .mockResolvedValue({} as Product);

            await expect(
            service.createProduct(mockProduct())
            ).rejects.toThrow("No se pudo crear el producto");
        });


        
        test("deberia lanzar un error el producto ya existe", async ()=>{
            const service = new CatalogService(repository);
            jest
            .spyOn(repository,"create")
            .mockImplementationOnce(()=> Promise.reject(new Error("El producto ya existe"))); 
            //expect
            await expect(service.createProduct(mockProduct())).rejects.toThrow("El producto ya existe");
        });


    });


    describe("update product cases",()=>{

        test("deberia actualizar el producto", async()=>{
            const service = new CatalogService(repository);
            
            let reqBody = mockProduct({
                id:faker.number.int({min:10,max:1000})
            });
            
            const result = await service.updateProduct(reqBody);

            expect(result).toMatchObject(reqBody);
        });



        test("deberia lanzar un error porque el id de producto no existe", async () => {
            const service = new CatalogService(repository);

            const reqBody = mockProduct({
                id: faker.number.int({ min: 10, max: 1000 })
            });

            //mockea la el metodo del repositorio
            jest
                .spyOn(repository, "update")
                .mockRejectedValue(new Error("el producto no existe"));

            await expect(
                service.updateProduct(reqBody)
            ).rejects.toThrow("el producto no existe");
        });

    })


    describe("get products cases",()=>{
        
        
        test("deberia retornar un arreglo de productos por offset y limit", async()=>{
            
            const service = new CatalogService(repository);
            const randomList = faker.number.int({min:1,max:50});
            const products = ProductFactory.buildList(randomList);
    
            jest
            .spyOn(repository,"find")
            .mockResolvedValue(products)

            const result = await service.getProducts(randomList,0)

            expect(result.length).toEqual(randomList);
            expect(result).toMatchObject(products)

        });

    });

   

    describe("get one product cases",()=>{


        test("deberia obtener un producto por su id",async ()=>{
           
            const service = new CatalogService(repository);
            const product = ProductFactory.build();

            jest
            .spyOn(repository,"findOne")
            .mockResolvedValue(product)

            const result = await service.getProduct(product.id!);

            expect(result).toMatchObject(product)
            
        });

    })




    describe("delect product cases",()=>{

       
        test("deberia retornar el id del producto eliminado",async ()=>{
            const service = new CatalogService(repository);
            const product = ProductFactory.build();

            jest
            .spyOn(repository,"delete")
            .mockResolvedValue({id:product.id!});

            const result = await service.deletProduct(product.id!)

            expect(result).toMatchObject({
                id:product.id!
            })
        })

    });

})