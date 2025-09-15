const express = require("express")
const mongoose  = require("mongoose")


const app = express();
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const { adminRouter } = require("./routes/admin");





app.use("api/v1/user", userRouter);
app.use("api/v1/course", courseRouter);
app.use("api/v1/admin", adminRouter);







async function main(){
  await mongoose.connect("mongodb+srv://raushankcse_db_user:01032003@cluster0.igfpjot.mongodb.net/course");

  app.listen(3000);

}


main();