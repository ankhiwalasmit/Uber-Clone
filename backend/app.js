import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './db/db.js';
import userRoutes from './routes/user.routes.js'
import captainRoutes from './routes/captain.routes.js'
import cookieParser from 'cookie-parser';

const app = express();

dotenv.config({
    path: './.env'
})

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.use('/users', userRoutes)
app.use('/captains', captainRoutes)

export {app};