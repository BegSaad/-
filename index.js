import dotenv from "dotenv"
import app from './src/app.js'

dotenv.config();

const port = process.env.PORT
console.log(port)
app.listen(port,()=>{
    console.log(`running on port number ${port}`)
})