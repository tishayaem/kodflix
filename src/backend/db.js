const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/kodflixDB";

module.exports = function connectDb() {
  return MongoClient.connect(url)
    .then(function(db) {
      const dbo = db.db("kodflixDB");
      return dbo;
    })
    .catch(function(err) {});
};
