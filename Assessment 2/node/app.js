const express = require("express");
const app = express();
const axios = require("axios");
const {Router} = require("express");

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

Router.get("/getdata/:postId", (req, res) => {
    let { postID } = req.params;
    postID = mongoose.Types.ObjectId(postID);
    axios.get(`https://jsonplaceholder.typicode.com/${postId}/comments`);
    Posts.find({ _id: postId })
      .then((post) => {
        console.info("Post has been found");
        return Post.find({ commets })
          .then((post) => {
            console.info("AVALAIBLE Comments ARE:");
            return res.status(200).send({ comments });
          })
          .catch(() => {
            console.error(" error");
            return res.status(500).send(" error");
          });
      })
      .catch(() => {
        console.error("error has occured");
        return res.status(500).send("No theater Found");
      });
    });




const PORT = 5000;

app.listen(PORT, () => {
    console.log(`MY server is running on port ${PORT}`);
});