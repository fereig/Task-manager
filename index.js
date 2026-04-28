
// login feature
import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import TaskRouter from './src/routes/task.route.js'
import authrouter from './src/routes/auth.routes.js'

dotenv.config()
const app = express()
app.use(express.json())

const port = process.env.port||3000
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log('MongoDB connected'))
.catch((err)=>console.log('mongodb Error',err))
app.use('/tasks',TaskRouter)
app.use('/auth',authrouter)

app.get('/', (req, res) => res.send('servers is running!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// Task Manager API