import express from "express";
import cors from "cors";
import type { NextFunction, Request ,Response } from "express";
import cartRoutes from "./routes/cart.routes.js";
import orderRoutes from "./routes/order.routes.js"

const app = express();

app.use(cors());
app.use(express.json());


app.use(cartRoutes);
app.use(orderRoutes);

app.use("/",(req:Request,res:Response,_:NextFunction)=> {
    return res.status(200).json({message:"Im healthy!"})
} );


export default app;