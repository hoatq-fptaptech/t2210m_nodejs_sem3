const express = require("express");
const router = express.Router();
const controller = require("./../controllers/auth.controller");
const { check } = require("express-validator");
const validateRegister = ()=>{
    return [
        check("email","Vui lòng nhập email").not().isEmpty(),
        check("email","Vui lòng nhập đúng email").isEmail(),
        check("full_name","Vui lòng nhập họ và tên").not().isEmpty(),
        check("full_name","Tối thiểu 6 ký tự").isLength({min:6}),
        check("password","Vui lòng nhập mật khẩu").not().isEmpty(),
    ]
}
router.get("/register",controller.register);
router.post("/register",validateRegister(),controller.postRegister);
router.get("/login",controller.login);
router.post("/login",controller.postLogin);
module.exports = router;