import './register.css';
import { useState } from 'react'; 
import axios from 'axios';
import { __userapi } from '../API_URL';
import { Navigate, useNavigate } from 'react-router-dom';

function Register() {

const Navigate =useNavigate()
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [output, setoutput] = useState();

  const handleSubmit =()=>{
    
    var userDetail = {"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"cty":city,"gender":gender};  
     
  axios.post(__userapi+"save",userDetail).then((response)=>{
        setoutput("User Created successfully");
        setName("");
        setEmail("");   
        setPassword("");
        setMobile("");
        setCity("");
        setAddress("");
      

        alert("User created successfully!");
      
      {/**   Navigate('/login');**/}
  }).catch((error)=>{
    console.log(error);
  })
  }

  return (
    <>
<section class="h-100 h-custom" style={{"background-color":" #8fc4b7;"}} >
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-8 col-xl-6">
        <div class="card rounded-3">
          
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Register here </h3>

            <form class="px-md-2">
            
            <font style={{"color":"red"}}>{output}</font>


            
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="text" id="form3Example1q" class="form-control"  value={name} onChange={e => setName(e.target.value)} />
                <label class="form-label" for="form3Example1q">Name</label>
              </div>
              <div data-mdb-input-init class="form-outline mb-4">
                <input type="email" id="formName"  value={email}  onChange={e => setEmail(e.target.value)} class="form-control" />
                <label class="form-label" for="form3Example1q">Email</label>
              </div>



              <div class="form-group">
              <label for="mobile">Mobile:</label>
              <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
            </div>

            <div class="form-group">
              <label for="address">Address:</label>
              <textarea class="form-control" rows="5" value={address} onChange={e => setAddress(e.target.value)}></textarea>
            </div>

              <div data-mdb-input-init class="form-outline mb-4">
                <input type="password" id="form3Example1q"  value={password}   onChange={e => setPassword(e.target.value)} class="form-control" />
                <label class="form-label"  for="form3Example1q">Password</label>
              </div>
              <div class="row">
                <div class="col-md-6 mb-4">

                </div>
                <div class="col-md-6 mb-4">

                <div class="form-group">
              <label for="gender">Gender:</label>
              &nbsp;&nbsp;
              male : <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)}/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              female : <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/>
            </div>

                </div>
              </div>

              <div class="mb-4">

                <select data-mdb-select-init  class="form-control" value={city} onChange={e => setCity(e.target.value)}>
                  <option >City</option>
                  <option >Indore</option>
                  <option >Ujjain</option>
                  <option >Bhopal</option>
                </select>

              </div>

              <button type="button" onClick={handleSubmit} class="btn btn-danger">Register Here</button>

            </form>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>
  )
}

export default Register;