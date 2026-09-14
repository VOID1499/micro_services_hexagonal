import { Router } from "express";
import type  { Request ,Response,NextFunction} from "express";

const router = Router();


router.post("/product" , async (req:Request,res:Response,next:NextFunction)=> {

    res.status(201).json({
        
    })
});

export default router;