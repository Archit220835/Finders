import './Login1.css';
import { useState } from 'react';
import axios from 'axios';
import { __userapi } from '../API_URL';
import {useNavigate} from 'react-router-dom';

function Login1() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [output, setoutput] = useState();
   const navigate=useNavigate();
  const handleSubmit =()=>{

    if(email=="")
    {
      setoutput("Email is required");
    }
    else if(password=="")
    {
      setoutput("Password is required");
    }  
    else
    {
      var userDetail={"email":email,"password":password}
      axios.post(__userapi+"login",userDetail).then((response)=>{
        var users=response.data.userList;
       // console.log(users);
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("name",users.name);
        localStorage.setItem("email",users.email);
        localStorage.setItem("password",users.password);
        localStorage.setItem("mobile",users.mobile);
        localStorage.setItem("city",users.city);
        localStorage.setItem("address",users.address);
        localStorage.setItem("gender",users.gender);
        localStorage.setItem("role",users.role);
        localStorage.setItem("status",users.status);
        localStorage.setItem("info",users.info);
        
       if(users.role=="user") 
        navigate('/user');
       else
        navigate('/admin');

      }).catch((error)=>{
        console.log(error);
        setoutput("Invlid Email and Passwor , or verify your ccount");
        setEmail("");
        setPassword("");
      });
    }
  }
  return (
    <>
            {/* About Start */}
            <div class="container-fluid overflow-hidden py-5 px-lg-0">
                <div class="col-lg-12 about-text wow fadeInUp" data-wow-delay="0.3s">
                <h1 class="text-secondary text-uppercase mb-3">Login Here!!!!</h1>
          <br />
            <font style={{"color":"red"}}>{output}</font>
         <br /><br />
         <form>
            <div class="form-group">
              <label for="email">Email address:</label>
              <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <br />
            <div class="form-group">
              <label for="pwd">Password:</label>
              <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <br />
            <button type="button" onClick={handleSubmit} class="btn btn-danger">Login Here</button>
          </form>
                    
                </div>
            </div>
           
    {/* About End */}

    </>      
  
  );
}

export default Login1;
