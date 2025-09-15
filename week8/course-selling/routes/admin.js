const {Router } = require("express")
const adminRouter = Router();
const {adminModel} = require("../db");
const {z, email} = require("zod")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



adminRouter.post("/signup", async (req, res)=>{



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
    await adminModel.create({
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


adminRouter.post("/signin", async (req, res)=>{

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

  const user = await adminModel.findOne({
    email : parsedData.data.email
  })

  if(!user){
    res.json({
      message: "User does not exist",
    })
    return
  }


  


  try{

    await bcrypt.compare(user.password, parsedData.data.password);

    const token = jwt.sign({
      id : user._id
    }, process.env.JWT_SECRET)

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


// adminRouter.use(adminMiddleware);

adminRouter.post("/",(req, res)=>{
  res.send({
    message: "admin end point"
  })
})


adminRouter.put("/",(req, res)=>{
  res.send({
    message: "admin end point"
  })
})

adminRouter.get("/bulk",(req, res)=>{
  res.send({
    message: "admin end point"
  })
})














module.exports = {
  adminRouter: adminRouter
}