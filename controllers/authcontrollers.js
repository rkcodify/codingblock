const path = require("path");
const databaseschema = require("../models/databaseschema");
const contactschema  = require("../models/contactschema");
const jwt = require("jsonwebtoken");

//handle errors
const handleErrors = (err)=>{
    console.log(err.message,err.code);
    let errors={email:'',password:''}

            if (err.message==="Incorrect Email") {
                errors.email="incorrect email";
            }

            if (err.message==="Incorrect Password") {
                errors.password="incorrect password";
            }
            //duplicate errors
            if(err.code===11000){
            errors.email = 'that email is already registered';
            return errors;
            }

            //Validation error
            if(err.message.includes('user validation failed')){
                Object.values(err.errors).forEach(({properties}) => {
                    errors[properties.path]=properties.message;
                });;
                return errors;
            }
            return errors;
}

const maxAge = 3*24*60*60;//creating max timeout for cookie
const createtoken = (id) =>{
    return jwt.sign({ id },process.env.SECRET_KEY,{
        expiresIn: maxAge
    })
}

module.exports.signup_get = (req,res)=>{
    res.setHeader("Content-Type", "text/html");
    res.sendFile(path.join(__dirname,'../views/signuppage/signup.html'));
}

module.exports.signup_post = async(req,res)=>{
    res.setHeader("Content-Type", "application/json");
    var signupdata = req.body
    try {
        const signup = await databaseschema.create(signupdata);
        const token = createtoken(signup._id);
        res.cookie("jwt",token,{ httpOnly: true, maxAge : maxAge*1000});
        res.status(201).json({user : signup._id});
    } catch (err) {
       errors = handleErrors(err)
        res.status(400).json({errors})
    }
}

module.exports.signin_get = (req,res)=>{
    res.setHeader("Content-Type", "text/html");
    res.sendFile(path.join(__dirname,'../views/signinpage/signin.html'));
}

module.exports.signin_post = async(req,res)=>{
    const email = req.body.email;
    const password= req.body.password;
   try {
    const user = await databaseschema.login(email, password);
    const token = createtoken(user._id);
    res.cookie("jwt",token,{ httpOnly:true, maxAge : maxAge*1000});
    res.status(201).json({user : user.email});
   } catch (err) {
      const errors=handleErrors(err);
       res.status(400).json({errors});
   }
}

module.exports.contact_post = async(req,res)=>{
    res.setHeader("Content-Type", "application/json");
    var contactdata = req.body
    try {
        const signup = await contactschema.create(contactdata);
        res.status(201).json("Thankyou for contacting us");
    } catch (err) {
       errors =(err)
        res.status(400).json({errors})
    }
}
