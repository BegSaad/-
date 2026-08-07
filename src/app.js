import express from 'express'
import authRouter from './routes/mobile/authRoutes.js'
import morgan from 'morgan'
import cors from "cors"
const app = express()

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/createtask")
app.use("api/auth", authRouter)
export default app