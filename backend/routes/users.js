const router = require("express").Router();
const User = require("../models/User");
const verify = require("../verifyToken");
const bcrypt = require("bcryptjs"); +


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
        res.status(403).json("you can update only your account");
    }
})
//delete
router.delete("/:id" , verify , async (req , res) =>{
    
    if (req.user.id === req.params.id || req.user.isAdmin) {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(403).json("you can delete only your account");
    }
})
// get
router.get("/find/:id" , verify , async (req,res) =>{

    if (req.user.id === req.params.id || req.user.isAdmin){
        try {
            const user = User.findById(req.param.id);
            res.status(200).json(user);
        } catch (error) {
            res.status(403).json("You can't get anothers data");
        }
    }

})
// getall
router.get("/", verify,async (req, res) => {
    const query = req.query.new;
 
    try {
         if (req.user.isAdmin) {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
      res.status(200).json(users);
         }
         else
         {
              res.status(403).json("You are not an admin");
         }
    } catch (error) {
      res.status(403).json("You are not an admin");
    }
 
});
// getuserstats
router.get("/stats" ,verify ,async (req,res) =>{
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear()-1);

    const months =[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    
    try {
        
        const data = await  User.aggregate([
            {
                $project:{
                    month :{$month :"$createdAt"}
                }
            },
            {
                $group:{
                    _id:"$month",
                    total:{$sum:1}
                } 
            }
        ])

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
        
    }
})
module.exports = router;