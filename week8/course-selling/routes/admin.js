const express = require("express")
const Router = express.Router;
const adminRouter = Router();
const {adminModel, courseModel} = require("../db");
const {z, email} = require("zod")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { adminAuthMiddleware } = require("../middleware/admin.auth");



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
    }, process.env.JWT_SECRET_ADMIN)

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


adminRouter.use(adminAuthMiddleware);

adminRouter.post("/course",(req, res)=>{

  const adminId = req.id;
  const {title, description, imageUrl,price } = req.body;

  const course = courseModel.create({
    title: title,
    description: description,
    imageUrl: imageUrl,
    price: price,
    creatorId: adminId
  })

  res.json({
    message: "course created",
    courseId: course._id
  })


})


adminRouter.put("/course",async (req, res)=>{

  const adminId = req.id;
  const {title, description, imageUrl, price ,id} = req.body;
  
  const findCourse = await courseModel.findOne({
    _id:id,
    creatorId: adminId
  })

  if(!findCourse){
    res.json({
      message: "no course found",

    })
    return;
  }



  const course = await courseModel.updateOne(
    {
      _id: id,
      creatorId: adminId
    },
    {
      title: title,
      description: description,
      imageUrl: imageUrl,
      price: price
    }
  )

  


  res.json({
    message: "data updated"
  })
})




adminRouter.get("/course/bulk", async (req, res)=>{
  const adminId = req.id

  const user = await courseModel.find({
    creatorId: adminId
  })

  res.send({
    user: user,
    message: "data fetched"
  })
})














module.exports = {
  adminRouter: adminRouter
}