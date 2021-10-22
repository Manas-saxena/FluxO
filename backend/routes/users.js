const router = require("express").Router();
const User = require("../models/User");
const verify = require("../verifyToken");
const bcrypt = require("bcryptjs"); 

//update

router.put("/:id", verify,async(req , res)=>{

    if(req.user.id === req.params.id || req.user.isAdmin){
        if(req.body.password){
             req.body.password = await bcrypt.hash(req.body.password, 10);
        }

        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id , {
                $set:req.body,
            },{new:true})
            res.status(200).json(updatedUser)
        } catch (error) {
            res.status(500).json(error);
        }
    }
    else
    {
        res.status(403).json("youcan update only your account");
    }
})
//delete
// get
// getall
// getuserstats

module.exports = router;