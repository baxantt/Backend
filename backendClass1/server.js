const express = require('express');
const app = express(); //Take a instance of express and put in app
const mongoose = require('mongoose');

//Used to parse req.body in express -> POST or PUT
const bodyParser = require('body-parser');
//specifically parse JSON data and add it to request.Body object
app.use(bodyParser.json());

app.listen(3000, ()=>{
    console.log("Hello World")
})

app.get('/',(req, res)=>{
    res.send("From get protocol.")
})

app.post('/api/cars', (req, res)=>{
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    res.send("Added successfully");
})


mongoose.connect('mongodb://0.0.0.0:27017/Cars',{
    useNewurlParser:true,
    useUnifiedTopology:true
})  //This is a promise
.then(()=>{console.log("Database connected.")})
.catch((error)=>{console.log(error)});