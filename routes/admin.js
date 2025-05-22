const { Router } = require("express");
const {adminModel} = require("../db"); 

const adminRouter = Router(); 

adminRouter.post("/signup" , function(req , res){ 
    res.json({
        message : "signup endpoint"
    })
})

adminRouter.post("/signin" , function(req , res){ 
    res.json({
        message : "signin endpoint"
    })
})

adminRouter.post("/course" , function(req , res){ 
    res.json({
        message : "signup endpoint"
    })
})

adminRouter.post("/course" , function(req , res){ 
    res.json({
        message : "signup endpoint"
    })
})

adminRouter.get("/course/bulk" , function(req , res){ 
    res.json({
        message : "signup endpoint"
    })
})


module.exports = {
    adminRouter : adminRouter 
}