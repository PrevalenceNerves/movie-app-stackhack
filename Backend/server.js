require('dotenv').config();
const express = require ('express');
const app= express();

express.json();

app.get('/',(req,res)=>{
    res.send("Server is running");
})


const port=process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('app running on ${port}');
})