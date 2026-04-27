import express from 'express'
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from '../controllers/task.controller.js'
import { protect } from '../middlewares/auth.middleware.js'
const TaskRouter = express.Router()



TaskRouter.get('/',protect,getTasks)
TaskRouter.post('/',protect,createTask)
TaskRouter.get('/:id',protect,getTaskById)
TaskRouter.put('/:id',protect,updateTask)
TaskRouter.delete('/:id',protect,deleteTask)



export default TaskRouter