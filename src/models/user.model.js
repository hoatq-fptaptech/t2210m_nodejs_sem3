const mongoose = require("mongoose");
const user_schema = new mongoose.Schema({
    // _id
    full_name: String,
    email: String,
    password:String
});
module.exports = mongoose.model("User",user_schema);// users