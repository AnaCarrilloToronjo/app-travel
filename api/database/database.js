const mongoose = require("mongoose");

const db_host = process.env.DB_HOST || "localhost";
console.log("DB_HOST:", db_host);

const URI = `mongodb://${db_host}/visits`;

mongoose
  .connect(URI, { useNewUrlParser: true })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));

module.exports = mongoose;
