import app from "./expressApp.js";

export const StartServer = async ()=> {

    
    await app.listen(3000,()=>{
        console.log("Express app up!");
    });

}




StartServer().then(()=>{
    console.log("Server on!");
})