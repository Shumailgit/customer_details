const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: String,
  address: String,
  email: String,
  product: String,
  date: Date,
  mobile: String
});

module.exports = mongoose.model("Customer", customerSchema);
