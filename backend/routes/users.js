var express = require('express');
var router = express.Router();
const userController = require('../controllers/user');
const passport = require('passport');
const auth = require('../auth/auth');

/* GET users listing. */
router.get("/",userController.getUsers);
router.post("/login",userController.login);
router.get("/logout",userController.logout);
router.post("/register",passport.authenticate('register',{session:false}),
async (req,res)=>{
  // console.log(req.body);
    res.json({
        message:'Signed up successfully',
        user:req.user
    });
  });
router.get("/getuser",auth.verifyUser,userController.getUser);

module.exports = router;