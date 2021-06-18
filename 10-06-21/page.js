const { response } = require("express");
const express = require("express");
const { request } = require("http");
const { CLIENT_RENEG_LIMIT } = require("tls");
const page = express();
const axios = require("axios");

page.use(express.urlencoded({ extended: false}));
page.use(express.json());

page.get("/", (req,res) => {
    res.status(200).send("HEllo world")

});

page.get("/about-us", (req,res) => {
    res.status(200).send("This is about us page");

});
page.post("/login", (req , res)=>{
    const email = req.body.email;
    const password = req.body.password;
    if (password==="123456789"){

    return res.status(200).send("Password is correct");
    }
    return res.status(401).send("Password is Incorrect");
});

page.get("/pokemon", (req , res) =>{
axios
    .get("https://pokeapi.co/api/v2/ability/7/")
    .then((response) =>{
        console.log(response.data);
        return res.status(200).send(response.data);
    })
    .catch((error) =>{
        return res.status(500).send("error");
    });
});

const PORT = 8000;
page.listen(PORT, () => {
    console.log(`MY server is running on port ${PORT}`);
});
