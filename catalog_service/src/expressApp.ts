import express from "express";
import router from "./routes.js";


const app = express();

app.use(express.json());

app.use(router);

app.get("/",(req,res,next)=>{
    res.json({message:"message"});
});

export default app;