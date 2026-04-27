import jwt  from "jsonwebtoken"
import { User } from "../models/user.model.js"
import bcrypt from 'bcrypt'



export const register = async(req,res)=>{

try {
const {name,email,password} = req.body

const existingUser =  await User.findOne({email})
if(existingUser){
    return res.status(400).json({message:'user already exist '})
}
let hashpassword = bcrypt.hashSync(password,10)
const user = await User.create({
    name,
    email,
    password :hashpassword
})
res.status(201).json({message:'user created successfully'})
}
catch(error){
res.status(401).json({message:error.message})
}

}
export const login = async(req,res)=>{
try {
const {email,password} = req.body
const user = await User.findOne({email})
if(!user){
    return res.status(400).json({message:'Invalid credentials'}) 
}
const ismatch = await bcrypt.compare(password,user.password)
if(!ismatch){
    return res.status(400).json({message:'Invalid credentials'}) 
}
const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
 res.json({token})
}catch(error){

res.status(401).json({message:error.message})
}



}