const express = require("express")
const mongoose  = require("mongoose")
const dotenv = require("dotenv")

const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const { adminRouter } = require("./routes/admin");

// dotenv
dotenv.config({
  path: "./.env"
})


const app = express();
app.use(express.json());





app.get("/", (req, res)=>{
  res.json({
    message: "hi",
  })
})



// routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);








// server start
async function main(){
  await mongoose.connect(process.env.DATABASE_URL);

  app.listen(3000);

}


main();