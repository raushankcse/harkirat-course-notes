const { Router } = require("express");
const { userAuthMiddleware } = require("../middleware/user.auth");
const { purchaseModel, courseModel } = require("../db");

const courseRouter = Router();courseRouter


courseRouter.post("/purchase", userAuthMiddleware, async (req, res)=>{
  const userId = req.id;
  const courseId = req.body.courseId;

  await purchaseModel.create({
    userId,
    courseId
  })


  res.json({
    message: "you purchase the course successfully"
  })
})


courseRouter.get("/preview", async(req, res)=>{


  const courses = await courseModel.find();



  res.json({
    message: "All courses",
    courses: courses

  })
})


module.exports  = {
  courseRouter: courseRouter
}