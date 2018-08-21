const MongoClient = require("mongodb").MongoClient;
require('dotenv').config();

let url = process.env[`DB_URL_${process.env.NODE_ENV}`];
console.log(process.env.NODE_ENV)
module.exports = function connectDb() {
  return MongoClient.connect(url)
    .then(function(db) {
      const dbo = db.db("kodflixDB");
      return dbo;
    })
    .catch(function(err) {});
};
