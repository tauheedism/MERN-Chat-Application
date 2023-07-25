const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn=await mongoose.connect(process.env.MONGO_URI, {
    //   useNewUriParser: true,
      useUnifiedTopology: true,
    //   useFindAndModify:true,
    });
    console.log(`MongoDB Connected :${conn}`.cyan.underline);
  } catch (error) {
    console.log(`Error :${error.message}`.red.bold);
    process.exit();
  }
};
 
module.exports=connectDB;