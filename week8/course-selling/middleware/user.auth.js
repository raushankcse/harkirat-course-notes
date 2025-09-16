const jwt = require("jsonwebtoken");

async function userAuthMiddleware(req, res, next){

  const token = req.headers.authorization
  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET_USER);
    
    req.id = decodeToken.id;

    next();
    
  } catch (error) {
    res.json({
      message: "authentication expire login again!"
    })
  }

}


module.exports = {
  userAuthMiddleware: userAuthMiddleware
}