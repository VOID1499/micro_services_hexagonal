import app from "./express_app.js";
import 'dotenv/config';

const PORT = process.env.APP_PORT || 9000;



export const StartServer = async ()=> {
    await app.listen(3000,()=>{
        console.log(`Expres app on port : ${PORT}`);
    });

}


process.on("uncaughtException",async (err)=>{
    console.log(err);
    process.exit(1);
})

StartServer().then(()=>{
    console.log("ORDER_SERVICE ON!");
})