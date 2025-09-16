const jwt = require("jsonwebtoken");


// function middleware(password){
//   const token = req.headers.authorization
//   try {
//     const decodeToken = jwt.verify(token, password);
    
//     req.id = decodeToken.id;

//     next();
    
//   } catch (error) {
//     res.status(403).json({
//       message: "authentication expire login again!"
//     })
//   }
// }



async function adminAuthMiddleware(req, res, next){

  const token = req.headers.authorization
  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET_ADMIN);
    
    req.id = decodeToken.id;

    next();
    
  } catch (error) {
    res.status(403).json({
      message: "authentication expire login again!"
    })
  }

}


module.exports = {
  adminAuthMiddleware: adminAuthMiddleware
}