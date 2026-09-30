import type { CartRepositoryType } from "../types/repository.type.js"
import *  as Repository from "../repository/cart.repository.js"
import * as Service from "./cart.service.js"
import { jest } from '@jest/globals';

describe("cartSercice suite",()=>{


    let repo :CartRepositoryType;


    beforeEach(()=>{
        repo = Repository.CartRepository;
    });

    afterEach(()=>{
        repo = {} as CartRepositoryType;
    });


    it("deberia retornar la data con el carro creado de forma exitosa",async ()=>{

        const mockCart = {
            item:"smart phone",
            amount:1200
        };

        jest.spyOn(Repository.CartRepository,"create")
        .mockResolvedValue(mockCart)

        const res = await Service.createCart(mockCart,repo);

        expect(res).toEqual(mockCart);

    });

}) 