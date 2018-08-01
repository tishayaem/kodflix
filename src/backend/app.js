const express = require("express");
const app = express();
const path = require("path");
const connectDb = require("./db");

connectDb().then((dbo) => {
  app.get("/rest/shows", (req, res) => {
      dbo.collection("shows").find({}).toArray(function (err, docs = []) {
          if (err) {
             console.log("error", err)
          }
          res.send(docs);
      });
  });

    app.use(express.static(path.join(__dirname, "../../build")));
    
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../../build", "index.html"));
    });
    
});



const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
