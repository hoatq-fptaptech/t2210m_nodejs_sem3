const userModel = require("./../models/user.model");
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");
exports.register = function(req,res){
    res.render("auth/register");
};
exports.postRegister = async function(req,res){
    const data = req.body;    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.send(errors.array());
    }
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
exports.postLogin = async function(req,res){
    const email = req.body.email;
    const pwd = req.body.password;
    try {
        // b1-  dùng email tìm user trong db -> nếu ko có báo lỗi email hoặc password ko đúng
        const u = await userModel.findOne({email:email});
        if(u == null){
            return res.send("Email or Password is not correct");
        }
        // b2 -  so sanh password - dùng cơ chế hash verify để so sánh
        const verify = bcrypt.compare(password,u.password);// return true/false
        if(!verify){
            return res.send("Email or Password is not correct");
        }
        // b3- phản hồi khi đúng
        return res.send("Log in successfully");

    } catch (error) {
        return res.send(error);
    }
}