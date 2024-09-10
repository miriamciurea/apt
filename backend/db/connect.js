
const mongoose = require('mongoose');

const connectDB = (url) => {
  mongoose
  .connect(url)
  .then(() => console.log('CONECTED TO THE DB'))
  .catch((err) => console.log(err));

}

module.exports = connectDB
