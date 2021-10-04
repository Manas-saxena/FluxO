const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
//Register
router.post("/register" ,async(req,res) =>{

    const userData = req.body;
    const newUser = new User({
        username:userData.username,
        email:userData.email,
        password:userData.password,

    })
    try {
         const user = await newUser.save();
         res.status(201).json(user)
    } catch (error) {
       
        res.status(500).json(error);
    }
   
    
})

router.post("/login" , async(req,res)=>{
    try {
        const {email ,password}= req.body;

        const user = await User.findOne({email});

        !user && res.status(401).json("Wrong Credentials");

         const isMatch = await bcrypt.compare(password, user.password);

         if(isMatch)
         {
            res.status(200).json(user);
         }
         else
         {
            res.status(401).json("Wrong Credentials");
         }
    } catch (error) {
       console.log(error);
        res.status(500).json(error);
    }
})


module.exports = router;