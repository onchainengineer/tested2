const mongoose = require('mongoose');
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const auth = require('../auth/auth');


exports.login = async(req,res,next)=>{
    // console.log(req.body);
    passport.authenticate('login',async(err,user,info)=>{
        try{
            if(err){
                console.log(err.toString());
                return res.status(400).json({'err':err.toString()});
            }
            if(!user){
                console.log('User not found');
                return res.status(404).json({'err':'User not found'});
            }
            req.login(user,{session:false},async(err)=>{
                if(err){
                    console.log(err.toString());
                    return res.status(400).json({'err':err.toString()});
                }
                const body = {_id:user._id.toString(),email:user.email.toString()};
                const token = jwt.sign({user:body},process.env.AUTH_SECRET);
                // console.log(token)
                return res.json({'token':token});
            })
        }
        catch(err){
            return res.status(500).json({'err':err.toString()});
        }
    })(req,res);
}

exports.logout = async(req,res)=>{
        req.logout((err)=>{
            if(err){
                return res.json({'err':err});
            }
            return res.json({'msg':'Logged out successfully'});
        });
        
}

exports.getUsers = async(req,res)=>{
    try{
        const users = await User.find({});
        if(!users){
            res.status(400).json({'err':'Users not found'});
        }   
        res.json(users);
      }
      catch(err){
        res.status(500).json({'err':err.toString()});
      }
}
exports.getUser = async(req,res)=>{
    try{
        console.log(req);
        const id = req.user._id
        console.log(id);
        var user = await User.findById(id);
        //console.dir(user);
        if(!user){
            return res.status(404).json({'err':'User not found'});
        }
        return res.json(user);
        
    }
    catch(err){
        res.json({'err':err.toString()});
    }
}