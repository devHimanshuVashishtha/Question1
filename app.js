mongoURI =
  "mongodb+srv://himanshuvashishtha001hp:heGHZfSxq86AKIir@userdatabase.jp4pdkc.mongodb.net/";
const PORT = 3000;

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(mongoURI).then(() => console.log("mongoose connected"));

const user =[]

app.get('/',(req,res)=>{
    res.json({message:'Connected with mongoes also',user})
})

app.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
});
