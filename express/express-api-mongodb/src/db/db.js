const mongoose = require("mongoose");

const username = "root";
const password = "AjGfW8z5fvQZpqvM";
const cluster = "realmcluster.zmek8";
const dbname = "OA_MERN_NOV_11-12";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose;
