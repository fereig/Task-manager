import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema({
name:{
    type:String,
    trim:true,
    required:true
},
email:{
    type:String,
    trim:true,
    required:true,
    unique:true
},password:{
  type:String,
    required:true  
}
},{timestamps:true})
export const User = mongoose.model('user',UserSchema)