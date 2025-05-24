const {Schema} = require("mongoose"); 
const mongoose = require("mongoose"); 



console.log("connected to mongoose ")


 
const ObjectId = mongoose.Types.ObjectId ; 


const UserSchema = new Schema({
    email : {type : String  , unique : true} ,
    password : String , 
    firstname : String , 
    lastname : String 
});

const adminSchema = new Schema({
    email : {type : String  , unique : true} ,
    password : String , 
    firstname : String , 
    lastname : String 
});

const courseSchema = new Schema({
    title : String , 
    description : String , 
    price : Number , 
    imageUrl : String ,
    creatorId : ObjectId  
});

const purchaseSchema = new Schema({
    userId : ObjectId ,
    courseId : ObjectId , 
  
     
});

const userModel = mongoose.model("user" , UserSchema);
const adminModel = mongoose.model("admin" , adminSchema);
const courseModel = mongoose.model("course" , courseSchema);
const purchaseModel = mongoose.model("purchase" , purchaseSchema);

module.export = {
    userModel ,
    adminModel , 
    courseModel , 
    purchaseModel
}