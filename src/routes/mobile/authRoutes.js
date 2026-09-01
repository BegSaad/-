import {Router} from "express";



const authRouter= Router()

authRouter.post('/register',(req,res)=>{
    const {name,email}=req.body
    console.log(name);
    console.log(email)

})
authRouter.get('/query/:id', (req, res) => {
    const { id } = req.params;

    console.log(id);

    res.json({
        id: id
    });
});
//pass data via a body

authRouter.post("/body",(req,res)=>{
    const {name,age}=req.body;
    res.json({
        name,
        age
    })
    console.log(name);
    console.log(age)
})
//pass data via url parameters
authRouter.get("/params/:id",(req,res)=>{
    const{id}=req.params
res.json({
    id
})
console.log(id)
})


//pass data via query parameters
authRouter.get("/queryparameter",(req,res)=>{
    const {name}=req.query
console.log(name)
res.json({
    name
})
})
export default authRouter