const { Router } = require("express");
const {adminModel} = require("../db"); 
const {adminModel , courseModel} = require("../db")
const adminRouter = Router(); 
const jwt = require("jsonwebtoken"); 
const { adminMiddleware } = require("../middleware/admin");


adminRouter.post("/signup" , async function(req , res){ 

    const{ email , password , firstName , lastName } = req.body ;
    await adminModel.create({
        email , 
        password ,
        firstName , 
        LastName 
    })



    res.json({
        message : "signup succeeded"
    })
})

adminRouter.post("/signin" , async function(req , res){ 

    const {email , password} = req.body ; 

    const admin = await adminModel.findOne({
        email , 
        password 
    })

    if(admin){ 
        const token = jwt.sign({
            id : admin._id 

        }, JWT_ADMIN_PASSWORD);

        res.json({
        token : token 
    })


    }
    
    else{
        res.status(403).json({
            message : " incorrect credentials "
        })
    }


    
})

adminRouter.post("/course" , adminMiddleware, async function(req , res){ 


    const adminId = req.userId ; 

    const { title, description, imageUrl, price } = req.body ; 

    const course = await courseModel.create({ 
        title: title, 
        description: description, 
        imageUrl: imageUrl, 
        price: price,
        creatorId : adminId 
    })
    res.json({
        message : "course created" ,
        courseId : course._id
    })
})

adminRouter.put("/course" ,adminMiddleware , async function(req , res){ 

    const adminId = req.userId;
    const { title, description, imageUrl, price, courseId } = req.body;

    const course = await courseModel.updateOne({
        _id : courseId , 
        creatorId : adminId
    }, { 
        title , 
        description , 
        imageUrl , 
        price
    })

    res.json({
        message : "Course Updated ",
        courseId : course._id
    })
})

adminRouter.get("/course/bulk" , adminMiddleware ,async function(req , res){ 

    const adminId = req.userId ; 

    const courses = await courseModel.find({
        creatorId : adminId
    })


    res.json({
        message : "course updated",
        courses
    })
})


module.exports = {
    adminRouter : adminRouter 
} 