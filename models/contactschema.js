const mongoose = require("mongoose");

//schemema for contact page
const contactschema = new mongoose.Schema(
{
  name:{
      type:String,
      unique:false
  },
  email:{
      type:String,
      unique:false
    },
  telephone: {
      type:Number,
  },
  textarea: {
      type:String,
  },
  updated:{
      type: Date, default: Date.now 
  }, 
 });

const contact = mongoose.model("contact", contactschema); //making collection with name contact in database rk

module.exports = contact;