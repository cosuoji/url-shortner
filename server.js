import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import urlRoute from "./routes/url.routes.js"
import cors from "cors";

dotenv.config()
const app = express();
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI


app.use("/", urlRoute)


mongoose.connect(MONGODB_URI)
    .then(()=>{
        console.log("Connected to DB")
        app.listen(PORT, _ =>{
            console.log("app is running on PORT", PORT)
        })
    })

