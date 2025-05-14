const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config();

const PORT=process.env.PORT||8000;

const app=express();
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MONGODB CONNECTED"))
.catch((err)=>console.log("CONNECTION FAILED",err))

app.get('/',(req,res)=>{
    res.send("restaurant api running")
})

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})