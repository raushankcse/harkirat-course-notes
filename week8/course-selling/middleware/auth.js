

async function authMiddleware(req, res, next){
  const email = req.body.email;
  const password = req.body.password;
  

}


module.exports = {
  authMiddleware: authMiddleware
}