const express = require("express");
const app = express();
const mongoose= require("mongoose");
const userRoute = require("./routes/UserRoute");
const cors = require("cors");
const taskRoute = require("./routes/TaskRoute");

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cors());

mongoose
 .connect("mongodb://localhost:27017/Dhruv", {
     useUnifiedTopology: true,
     useNewUrlParser: true,
})
.then(() =>{
    console.info("Mongo DB successfully conected");
})
.catch(() =>{
    console.error("Mongo Db Failed Connection");
});
app.use(userRoute);
app.use("/task", taskRoute);


const PORT = 8000;

app.listen(PORT, () => {
    console.log(`MY server is running on port ${PORT}`);
});


