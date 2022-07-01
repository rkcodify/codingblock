const cookieparser = require("cookie-parser");
const jwt = require('jsonwebtoken');
const path = require("path");

const requireAuth = (res, req, next)=>{

  const token = req.cookies.jwt;
  console.log(token)

  //check token exist or not

  if(token){
    jwt.verify(token,'ramakantpandeyramakantpandeyramakant',(err, decodedToken)=>{
      if(err){
        res.redirect('/');
      }
      else{
          console.log(decodedToken);
          next();
      }
    })
  }
  else{
    console.log(err.message);
    return res.redirect('/');
  }
}

module.exports = { requireAuth };