const mongoose = require("mongoose");

require("dotenv").config();   //For loading all the env file in process

const dbConnect = () => {    //It is put in fn so that it can be called from anywhere
    mongoose.connect(process.env.DATABASE_URL,{   //process
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(() => console.log("DB connection successful"))
    .catch((error) => {
        console.log("Issue in DB connection");
        console.error(error.message);
        process.exit(1);
        //process.exit( code ) Parameter: This function accepts single parameter as 
        //mentioned above and described below: Code: It can be either 0 or 1. 0 means end
        // the process without any kind of failure and 1 means end the process with some 
        //failure.
    });
}

module.exports = dbConnect;  //It exports  the dbConnect function