
const express= require("express")
const { Register } = require("../controller/Register")
const Login = require("../controller/Login");
const Logout = require("../controller/Logout");

const router = express.Router()

router.post("/register",Register);
router.post("/login",Login);

router.get('/logout',Logout);

module.exports = router