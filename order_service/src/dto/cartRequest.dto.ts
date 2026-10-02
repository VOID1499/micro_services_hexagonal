import { Type , type Static } from "@sinclair/typebox"



// create schema 
export const CartRequestSchema = Type.Object({

    productId:Type.Integer(),
    customerId:Type.Integer(),
    qty:Type.Integer()

});

export type CartRequestInput = Static<typeof CartRequestSchema>


//edit eschema
export const CartEditRequestSchema = Type.Object({

    productId:Type.Integer(),
    customerId:Type.Integer(),
    qty:Type.Integer()

});


export type CartEditRequestInput = Static<typeof CartEditRequestSchema>