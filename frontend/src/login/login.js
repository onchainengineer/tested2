
import React, { useState } from "react"
import axios from "axios";
import Auth from '../auth/auth'
import {useNavigate, withRouter} from "react-router";

const API_URL = "http://localhost:3000";

export default function (props) {
  let [authMode, setAuthMode] = useState("signin");
  let navigate = useNavigate();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [name,setName] = useState();
  const [isSeller,setIsSeller] = useState(false);
  const [isManufacturer,setIsManufacturer] = useState(false);


  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const registerUser = async()=>{

  axios.post(API_URL+'/users/register',
   {name,email,password,isSeller})
  .then(()=>{
    props.history.push("/login");  
  })
  .catch(err=>{console.log(err)})
 }

  const loginUser = async(e)=>{
    e.preventDefault();
    axios.post(API_URL+'/users/login',
    {email,password})
    .then(async(res)=>{
        console.log(res.data);
        localStorage.setItem('user',res.data.token);
        console.log(props.history);
        await getUser();
        
    })
    .catch(err=>{
        console.log(err);
    })
}

const getUser = ()=>{
  axios.get(API_URL+'/users/getuser',{headers:{
    Authorization:'Bearer '+ localStorage.getItem("user")
}})
.then((res)=>{
  console.log(res.data.isSeller)
  // if(res.data.isSeller===true){
  //   localStorage.setItem('isSeller',true)
  // }
  // if(res.data.isManufacturer===true){
  //   localStorage.setItem('isManufacturer',true)
  // }
  localStorage.setItem('isSeller',res.data.isSeller)
  localStorage.setItem('isManufacturer',res.data.isManufacturer)
  navigate("/");
        window.location.reload();
})
.catch((err)=>{console.log(err)})
}

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} className="form-control mt-1"
                placeholder="Enter email"></input>
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input type="password" name="password" id="password" className="form-control mt-1"
                placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={loginUser}>Login</button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input type="email" name="email" id="email" 
            onChange={(e) => setEmail(e.target.value)}
            className="form-control mt-1"
                placeholder="Enter email"></input>
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input type="password" name="password" id="password" className="form-control mt-1"
                placeholder="Enter password" 
                onChange={(e) => setPassword(e.target.value)}></input>
          </div>
          <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary" onClick={registerUser}>Sign Up</button>
          </div>
          {/* <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p> */}
        </div>
      </form>
    </div>
  )
}
