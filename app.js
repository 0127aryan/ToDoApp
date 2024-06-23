require("express-async-errors");
const express   =   require("express");
const mongoose = require("mongoose");
const routes = require("./routes/ToDORoute");
const cors = require("cors");

require("dotenv").config();

const app = express ()
app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_URL,{})
.then(() =>{
    console.log("MongoDB Connection Successfull");
})
.catch(()=>{
    console.log("MongoDB connection failed");
});

app.use(routes);

app.listen(8000, () => {
    console.log("server started");
} );