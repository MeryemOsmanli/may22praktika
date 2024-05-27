import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcrypt';
import { May22Blog } from './src/models/UserModel.js';
import { UserRouter } from './src/routes/UserRoutes.js';
import 'dotenv/config'
const app = express()
app.use(cors())
app.use(express.json())
app.use("/meryem",UserRouter)






mongoose.connect(process.env.DB_CONNECTION)
    .then(() => console.log('Connected!'));
app.listen(3001)