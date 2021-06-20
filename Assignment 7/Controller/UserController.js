const User = require("../Model/user");
const Blog = require("../Model/blog");
const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");



exports.signUp = (req, res) => {
    let{ firstName, lastName, email, password, DOB } = req.body;
    let user = new User({
        firstName,
        lastName,
        email,
        password,
        DOB
    });
    user
    .save()
    .then(() => {
        return res.status(200).send(user);
    })
    .catch((error) => {
        console.error(error);
        return res.status(500).send("ERROR");
      });
};
exports.login = (req, res) => {
    let { email, password } = req.body;
    User.findOne({ email: email })
      .then((user) => {
        console.info(`User with email: ${email} was successfully found`);
        if (password === user.password) {
            const token = getToken(user);
          console.info("Login successful");
          return res.status(200).send(user);
        }
        console.warn("Password incorrect");
        return res.status(401).send("Password was incorrect");
      })
      .catch((error) => {
        console.error(`User with email: ${email} does not exist!`);
        return res.status(404).send(`User with email: ${email} doesn't exist!`);
      });
  };
  exports.getUserById = (req, res) => {
    let id = req.params.id;
    id = mongoose.Types.ObjectId(id);
    User.findOne({ _id: id })
      .then((user) => {
        if (user) {
          console.info("User found");
          return res.status(200).send(user);
        }
        console.error("User was not found!");
        return res.status(404).send("NOT FOUND");
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).send("ERROR");
      });
  };
  
  exports.postblog = (req, res) => {
    let { heading, blog } = req.body;
    if (!req.headers.token) {
      console.error("No token was sent");
      return res.status(403).send("Invalid token");
    }
    let decodedToken = JWT.verify(req.headers.token, "ssshhhItsASecretDontTellAnyone"); 
    let userId = decodedToken[ Object.keys(decodedToken)[0]];
    userId = mongoose.Types.ObjectId(userId);
    let blogPost = new Blog({
        heading,
        blog,
        userId
    });
    blogPost.save().then(() => {
        return res.status(200).send(blogPost);
    }).catch(() => {
        return res.status(500).send("an erroer Occured");
    });
};

  exports.getblog = (req, res) => {
    let  userId  = req.params.id;
    userId = mongoose.Types.ObjectId(userId);
    Blog.find({ userId })
    .then((blogPost) => {
        if (blogPost.length === 0) {
            return res.status(404).send("54456error")
        
        }
        console.log("Successfull")
        return res.status(200).send(blogPost);
    })
    .catch((error) => {
        console.log("Error")
        return res.status(404).send("error");
 
    });
};

const getToken = (user) => {
    return token = JWT.sign(
      {
        id: user._id,
        email: user.email,
      },
      "JIETSecretKey",
      {
        expiresIn: "1h",
      }
    );
  };