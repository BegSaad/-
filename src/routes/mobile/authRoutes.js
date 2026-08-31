import {Router} from "express";



const authRouter= Router()

authRouter.post('/register',(req,res)=>{
    const {name,email}=req.body
    console.log(name);
    console.log(email)

})
export default authRouter