const {Router } = require("express")
const adminRouter = Router();


adminRouter.post("/signup",(req, res)=>{
  res.send({
    message: "admin end point"
  })
})


adminRouter.post("/signin",(req, res)=>{
  res.send({
    message: "admin end point"
  })
})


adminRouter.use(adminMiddleware);

adminRouter.post("/course",(req, res)=>{
  res.send({
    message: "admin end point"
  })
})


adminRouter.put("/course",(req, res)=>{
  res.send({
    message: "admin end point"
  })
})

adminRouter.get("/course/bulk",(req, res)=>{
  res.send({
    message: "admin end point"
  })
})














module.exports = {
  adminRouter: adminRouter
}