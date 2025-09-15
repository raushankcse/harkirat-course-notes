const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next){

  const token = req.headers.authorization
  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET_ADMIN);
    
    req.id = decodeToken.id;

    next();
    
  } catch (error) {
    res.json({
      message: "authentication expire login again!"
    })
  }



}


module.exports = {
  authMiddleware: authMiddleware
}