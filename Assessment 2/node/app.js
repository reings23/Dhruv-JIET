const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.get("/data", (req,res) => {
    axios
     .get("https://jsonplaceholder.typicode.com/posts")
     .then((response) => {
         console.log(response.data);
         return res.status(200).send(response.data);
     })
     .catch((error) => {
         return res.status(404).send("error");
     });
});




const PORT = 5000;

app.listen(PORT, () => {
    console.log(`MY server is running on port ${PORT}`);
});