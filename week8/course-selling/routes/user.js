const express = require("express")
const Router = express.Router;
const {userModel, purchaseModel} = require("../db");
const {z} = require("zod")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { userAuthMiddleware } = require("../middleware/user.auth");



const userRouter = Router();

userRouter.post("/signup", async (req, res)=>{
const requireBody = z.object({
    email: z.string().min(3).max(100),
    password : z.string().min(6).max(100),
    firstName : z.string().min(1).max(100), 
    lastName: z.string()

  })

  const parsedData = requireBody.safeParse(req.body);
  if(!parsedData.success){
    res.json({
      message: "not correct format",
      error: parsedData.error
    })
    return
  }

  const hashedPassword = await bcrypt.hash(parsedData.data.password,8);


  try {
    await userModel.create({
      email: parsedData.data.email,
      password: hashedPassword,
      firstName: parsedData.data.firstName,
      lastName: parsedData.data.lastName
    })

    res.json({
      message: "user data saved!"
    })


  } catch (error) {
    res.json({
      message: "failed to save data",
      error: error
    })
  }

})


userRouter.post("/signin", async (req, res)=>{


  const requireBody = z.object({
    email: z.string().min(3).max(100),
    password: z.string().min(6)
  })

  const parsedData = requireBody.safeParse(req.body);

  if(!parsedData.success){
    res.json({
      message: "invalid format"
    })
    return
  }

  const user = await userModel.findOne({
    email : parsedData.data.email
  })

  if(!user){
    res.status(403).json({
      message: "User does not exist",
    })
    return
  }


  try{

    await bcrypt.compare(user.password, parsedData.data.password);

    const token = jwt.sign({
      id : user._id
    }, process.env.JWT_SECRET_USER)

    // do cookie logic

    
    res.json({
      message: "user logged in",
      token: token
    })

  }catch(e){
    res.json({
      message: "password is incorrect!"
    })
  }


})





userRouter.get("/purchases", userAuthMiddleware , async (req, res)=>{

  const userId = req.id;

  const myCourse = await purchaseModel.find({
    userId: userId
  })

  res.json({
    message: "user purchases courses",
    course : myCourse
  })
})



module.exports = {
  userRouter: userRouter
}