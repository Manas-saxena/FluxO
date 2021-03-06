const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); 

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
        default:"",
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
})

UserSchema.pre("save" , async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password,10);
    }
    next();
})


module.exports =mongoose.model('User',UserSchema);