const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserRoute = require("./routes/UserRoute");
const JobRoute = require("./routes/JobRoute");
const cors = require("cors");

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cors());

mongoose
 .connect("mongodb://localhost:27017/Project", {
     useUnifiedTopology: true,
     useNewUrlParser: true,
})
.then(() =>{
    console.info("Mongo DB successfully conected");
})
.catch(() =>{
    console.error("Mongo Db Failed Connection");
});
app.use(UserRoute);
app.use ("/job", JobRoute);


const PORT = 4000;

app.listen(PORT, () => {
    console.log(`MY server is running on port ${PORT}`);
});