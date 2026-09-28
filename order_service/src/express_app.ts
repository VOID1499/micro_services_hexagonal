import express from "express";
import cors from "cors";
import type { NextFunction, Request ,Response } from "express";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/",(req:Request,res:Response,_:NextFunction)=> {
    return res.status(200).json({message:"Im healthy!"})
} );

app.get("/",(req,res,next)=>{
    res.json({message:"message"});
});

export default app;