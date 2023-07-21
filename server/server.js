const express=require('express');
const dotenv=require("dotenv")
const {chats}=require("./data/data");
const connectDB=require("./config/db")
const colors=require("colors")
dotenv.config();
connectDB();

const app=express();


// app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send("hello bro")
})

app.get('/api/chat',(req,res)=>{
    res.send(chats)
})

app.get('/api/chat/:id',(req,res)=>{
// console.log(req.params.id);

const signleChat=chats.find(c=>c._id===req.params.id);
res.send(signleChat)
})

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`SERVER IS STARTED AT ${PORT}`.yellow.bold);
})


