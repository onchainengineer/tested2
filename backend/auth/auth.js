const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

const User = require('../models/user');

passport.use('register', new localStrategy(
    {
        usernameField:'email',
        passwordField:'password',
        passReqToCallback:true
    },
    async(req,email,password,done)=>{
        try{
            const userExists = await User.findOne({email});
            //console.dir(userExists);
            if(userExists){
                return done(null,false,{'message':'User already exists'});
            }
            // console.dir(req.body);
            const name = req.body.name;
            const isSeller = req.body.isSeller;
            const isManufacturer = req.body.isManufacturer;
            const user = await User.create({name,email,password,isSeller,isManufacturer});
            return done(null,user);
        }
        catch(err){
            return done(err);
        }
    }
));

passport.use('login', new localStrategy({
    usernameField:'email',
    passwordField:'password'
},
    async(email,password,done)=>{
        try{
            const user = await User.findOne({email});
            // console.log(user)
            if(!user){
                console.log('User not found');
                return done(null,false,{'message':'User not found'});
            }
            const validate = await user.isValidPassword(password);
            if(!validate){
                console.log('Wrong password');
                return done(null,false,{'message':'Wrong password'});
            }
            // console.log(user);
            return done(null,user,{'message':'Logged in successfully'});
        }
        catch(err){
            return done(err);
        }
    }
));


passport.use(new JwtStrategy({
    secretOrKey:process.env.AUTH_SECRET,
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken()
},
    async(token,done)=>{
        try{
            return done(null,token.user);
        }
        catch(err){
            return done(err);
        }
    }
));

exports.verifyUser = passport.authenticate('jwt',{session:false});

exports.verifySeller = async(req,res,next)=>{
    const user = await User.findOne({'_id':req.user._id});
    if(user.isSeller==false){
        return res.status(400).json({'err':'You are not authorized'});
    }
    next();
}

exports.verifyToken = async(token)=>{
    try{
        const decoded = await jwt.verify(token,process.env.AUTH_SECRET);
        if(!decoded){
            return null;
        }
        return decoded.user._id;
    }
    catch(err){
        return null;
    }
}