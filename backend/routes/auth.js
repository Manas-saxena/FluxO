const router = require("express").Router();
const User = require("../models/User");

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
         res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error);
    }
   
    
})


module.exports = router;