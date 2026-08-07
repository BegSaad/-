import mongoose from  "mongoose";
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true
    },
},{
    timestamps:true
});

const authModel= mongoose.model("auth-table",userSchema)

export default authModel;