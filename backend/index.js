import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from "dotenv" 
import bodyParser from 'body-parser'
import Routes from './routes/route.js'

dotenv.config() 
const app = express() 


const port = process.env.PORT || 8000 

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json())
app.use(cors()); // Enable CORS   
 

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
})
.then(() => console.log("DB connected"))
.catch((err) => console.error("Error connecting to database:", err));

// Define Routes here
app.use("/api", Routes)



app.listen(port, () =>{
    console.log(`Server is running on port ${port}`) 
});