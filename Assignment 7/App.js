const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

const userRoutes = require("./routes/UserRoute");
const adminRoutes = require("./routes/AdminRoute")

mongoose
 .connect("mongodb://localhost:27017/Dhruv",{
     useUnifiedTopology: true,
     useNewUrlParser: true,

 })
 .then(() => {
     console.info("MongoDB successfully connected");
 })
 .catch(() =>{
     console.error("MongoDB Failed Connection");
 });

app.use(userRoutes);
app.use(adminRoutes);


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`My Server is running on port ${PORT}`);
}); 