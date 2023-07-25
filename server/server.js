const express=require('express');
const dotenv=require("dotenv")
const {chats}=require("./data/data");
const connectDB=require("./config/db")
const colors=require("colors")
const userRoutes=require('./routes/userRoutes');
const chatRoutes=require('./routes/chatRoutes')

const { notFound, errorHandler } = require("./Middleware/errrorMiddleware");
dotenv.config();


connectDB();
const app=express();
app.use(express.json())
// app.use(bodyParser.json())
app.get('/',(req,res)=>{
    res.send("hello bro")
})

app.use('/api/user',userRoutes);
app.use('/api/chat',chatRoutes)

app.use(notFound);
app.use(errorHandler);

const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`SERVER IS STARTED AT ${PORT}`.yellow.bold);
})


