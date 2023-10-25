const userModel = require("./../models/user.model");
const bcrypt = require("bcryptjs");
exports.register = function(req,res){
    res.render("auth/register");
};
exports.postRegister = async function(req,res){
    const data = req.body;    
    try {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(data.password,salt);
        data.password = hashed;
        const u = new userModel(data);
        await u.save();
        res.send("Done");
    } catch (error) {
        res.send(error);
    }    
};
exports.login =  function(req,res){
   res.render("auth/login");     
}
exports.postLogin = function(req,res){
    
}