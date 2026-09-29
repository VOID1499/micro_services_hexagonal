import { Router ,type Request , type Response ,type NextFunction} from "express";


const router = Router();

router.post("/order", async (req: Request, res: Response, next: NextFunction)=>{
    return res.status(200).json({message :"cart create"})
});


router.get("/order", async (req: Request, res: Response, next: NextFunction)=>{
    return res.status(200).json({message :"cart create"})
});

router.patch("/order", async (req: Request, res: Response, next: NextFunction)=>{
    return res.status(200).json({message :"cart create"})
});


router.delete("/order", async (req: Request, res: Response, next: NextFunction)=>{
    return res.status(200).json({message :"cart create"})
});

export default router;
