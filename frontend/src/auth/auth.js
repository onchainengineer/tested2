import axios from 'axios';

class Auth{
    login(email,password){
        return axios
            .post(process.env.REACT_APP_API_URL+'login',{
                email,password
            })
            .then(resp =>{
                alert(resp.data.token);
                if(resp.data.token){
                    console.log(resp.data.token);
                    localStorage.setItem("user",JSON.stringify(resp.data.token));
                }
                return resp.data;
            })
            .catch(err=>{alert(err); console.log(err)});
    }

    logout(){
        localStorage.removeItem("user");
    }

    register(name,email,password,isSeller){
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(isSeller);
        return axios.post(API_URL+'register',{
            name,email,password,isSeller
        });
    }

    getCurrentUser(){
        return JSON.parse(localStorage.getItem("user")).token;
    }
    getUser(){
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new Auth();