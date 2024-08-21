const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactnumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
  employeetype: {
    type: String,
    required: true,
  },
  employeedomain: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("users", usersSchema);
