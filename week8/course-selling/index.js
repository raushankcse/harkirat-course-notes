const express = require("express")
const mongoose  = require("mongoose")
const dotenv = require("dotenv")


dotenv.config({
  path: "./.env"
})


const app = express();
app.use(express.json());
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const { adminRouter } = require("./routes/admin");


app.get("/", (req, res)=>{
  res.json({
    message: "hi",
  })
})


app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);







async function main(){
  await mongoose.connect(process.env.DATABASE_URL);

  app.listen(3000);

}


main();