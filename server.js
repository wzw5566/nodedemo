const express = require("express");
const app = express();
const mongoose = require("mongoose");

//引入router
const users = require("./router/api/users");

//DB config
const db = require("./config/keys").mongoURI;

//Connect to mongodb
mongoose.connect(db)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));


//使用router
app.use("/api/users", users);


app.get("/", (req,res) => {
    res.send("hello world");
})



const port = process.env.PORT || 5000

app.listen(port,() => {

    console.log('Server running on port %s',port)

})



