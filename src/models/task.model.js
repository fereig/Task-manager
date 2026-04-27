import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
title:{
type:String,
required:true,
trim:true
},
description:{
type:String,
trim:true
},
status:{
  type:String,
  enum:['pending','in-progress','done'],
  default:'pending'
},
userId:{
    type:mongoose.Types.ObjectId,
    ref:'user',
    required:true
}
},{timestamps:true})
export const Task = mongoose.model('Task',TaskSchema)