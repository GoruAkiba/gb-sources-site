const express = require("express");
const app = express();
const _Port = process.env.PORT || 3000;

// static
app.use(express.static("public"));

// routing
app.get("/", (req, resp) => {
    resp.sendFile(__dirname+"/views/index.html");

})


app.listen(_Port, ()=>{
    console.log("listening to port : "+_Port);
})