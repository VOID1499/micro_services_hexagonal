import { Router, type NextFunction,type Request,type Response } from "express";
import { CatalogService } from "../../services/catalog.service.js";
import { CatalgoRepository } from "../repositories/CatalogRepository.js";



const router = Router();

export const catalogService = new CatalogService(new CatalgoRepository())

router.post("/products", async (req:Request,res:Response,next:NextFunction)=>{
    const data = await catalogService.createProduct(req.body);

    return res.status(201).json(data);
})


router.patch("/products/:id", async (req:Request,res:Response,next:NextFunction)=>{
    const data = await catalogService.updateProduct(req.body);

    return res.status(201).json(data);
})



export default router;

