const express = require("express") ; 
const mongoose = require("mongoose"); 

const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course"); 
const {adminRouter} = require("./routes/admin");

const app = express(); 

// we have better ways to route using express

app.use("/user",userRouter); 
app.use("/course" , courseRouter); 
app.use("/admin", adminRouter);


// createUserRoutes(app);
// createCourseRoutes(app); 

async function main(){
mongoose.connect("")

app.listen(3000);
console.log("listening on port 3000")
}
main()
