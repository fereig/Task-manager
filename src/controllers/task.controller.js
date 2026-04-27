import { Task } from "../models/task.model.js";




export const getTasks = async (req,res)=>{
try {
    const tasks = await Task.find({userId:req.user._id})
res.json({tasks})
}
catch(error){
    res.status(500).json({message:error.message})
}


}

export const createTask = async(req,res)=>{
    try {
const {title ,description} =req.body
const task = await Task.create({
    title,
    description,
    userId:req.user._id
}) 
res.status(201).json({task})
    }catch(error){
    res.status(500).json({ message: error.message })

    }
}

export const getTaskById = async(req,res)=>{
    try{
    const task = await Task.findOne({
        _id:req.params.id,
        userId:req.user._id
    })
    if(!task){
      return  res.status(404).json({message:'task not found'})
    }
    res.json({task})

    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { title: req.body.title, description: req.body.description, status: req.body.status },
      { new: true }
    )

    if (!task) {
      return res.status(404).json({ message: 'task not found' })
    }

    res.json({ task })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
export const deleteTask = async(req,res)=>{
    try{
     const task = await Task.findOneAndDelete({
        _id:req.params.id,
        userId:req.user._id
    })
    if(!task){
        return res.status(404).json({message:'task not found'})
    } 
    res.json({message:'task deleted success',task})
    }catch(error){
    res.status(500).json({message:error.message})

    }
}