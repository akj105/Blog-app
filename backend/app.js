import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router); 
app.use("/api/blog", blogRouter);
//http://localhost:5000/api/user/logon

mongoose.connect()
.then(()=>app.listen(5000))
.then(()=>{
    
    console.log("Connected TO Database and Listening TO Localhost")
})
.catch((err)=>console.log(err));



