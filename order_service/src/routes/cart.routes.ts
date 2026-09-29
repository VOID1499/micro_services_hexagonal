import { Router ,type Request , type Response ,type NextFunction} from "express";
import * as service from "../service/cart.service.js";
import { CartRepository } from "../repository/cart.repository.js";


const repo = CartRepository;

const router = Router();

router.post("/cart", async (req: Request, res: Response, next: NextFunction)=>{
    const result = await service.createCart(req.body,repo);
    return res.status(201).json(result)
});


router.get("/cart", async (req: Request, res: Response, next: NextFunction)=>{
    const result = await service.getCart(req.body,repo)

    return res.status(200).json({message :"cart create"})
});

router.patch("/cart", async (req: Request, res: Response, next: NextFunction)=>{
    const result = await service.editCart(req.body,repo);
    return res.status(200).json({message :"cart create"})
});


router.delete("/cart", async (req: Request, res: Response, next: NextFunction)=>{
    const result = await service.deleteCart(req.body,repo);
    return res.status(200).json({message :"cart create"})
});

export default router;
