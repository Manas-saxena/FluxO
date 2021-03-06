const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute =require("./routes/auth")
const dotenv = require("dotenv");
const usersRoute = require("./routes/users");
const moviesRoute = require("./routes/movie");
const listRoute = require("./routes/list");
const cors = require("cors")
dotenv.config();
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Data base connected");
}).catch((err)=>{
    console.log(err);
});
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use("/api/auth" , authRoute);
app.use("/api/users",usersRoute);
app.use("/api/movies" , moviesRoute);
app.use("/api/list" , listRoute);

app.listen(8000 , ()=>{
    console.log("Server is running at 8000...");
})