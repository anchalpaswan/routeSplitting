import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/user.js'
import {config} from 'dotenv'

export const app = express();
config({
    path: './data/config.env'
})
//middleware
app.use(express.json());
// todo because we had the users in all our routes so we gave it here so we don't need to write it in userRouter
app.use('/users', userRouter);

