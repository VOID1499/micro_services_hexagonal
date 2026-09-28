import request from "supertest";
import express from "express";
import { faker } from "@faker-js/faker";
import catalogRoutes, { catalogService } from "../catalog.routes.js";
import { ProductFactory } from "../../../utils/fixtures/index.js";
import { jest } from "@jest/globals";

const app = express();

app.use(express.json());
app.use(catalogRoutes);

const mockRequest = ()=>{
     return {
        name:faker.commerce.productName(),
        description:faker.commerce.productDescription(),
        stock:faker.number.int({min:0,max:100}),
        price:+faker.commerce.price(),
    }
}



describe.only("Catalog routes suite",()=>{


    describe("POST /products",()=>{

        test("crear el producto", async()=>{

            const requestBody = mockRequest();
            const product = ProductFactory.build();

            jest
            .spyOn(catalogService,"createProduct")
            .mockImplementationOnce(()=>Promise.resolve(product))

            const res = await request(app)
            .post("/products")
            .send(requestBody)
            .set("Accept","application/json");

            expect(res.status).toBe(201);
            expect(res.body).toEqual(product);
        });



        test("respuesta con error 404", async()=>{

            const requestBody = mockRequest();

            const product = ProductFactory.build();

            jest
            .spyOn(catalogService,"createProduct")
            .mockImplementationOnce(()=>Promise.resolve(product))

            const res = await request(app)
            .post("/products")
            .send({...requestBody,name:""})
            .set("Accept","application/json");

            expect(res.status).toBe(400);
            expect(res.body).toEqual("nombre no deberia estar vacio");
        });

    });

    describe("PATCH /productos/:id",()=>{



        test("deberia actualizar producto", async()=>{

            const product = ProductFactory.build();
            const requestBody = {
                name:product.name,
                price:product.price,
                stock:product.stock
            }

            jest
            .spyOn(catalogService,"updateProduct")
            .mockResolvedValue(product);

            const response = await request(app)
            .put(`/products/${product.id}`)
            .send(requestBody)
            .set("Accept","application/json")

            expect(response.status).toBe(200);
            


        });

    })

});



