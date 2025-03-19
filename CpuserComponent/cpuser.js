import './cpuser.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {__userapi} from '../API_URL'; 
import { useNavigate } from 'react-router-dom';

function Cpuser() {

    const navigate =useNavigate();
    const [Opass,setOpass]=useState();
    const [Npass,setNpass]=useState();
    const [CNpass,setCNpass]=useState();
    const [output,setOutput]=useState();
    
    const handleSubmit =()=>{
      axios.get(__userapi+"fetch?email="+localStorage.getItem("email")+"&password="+Opass).then((response)=>{
         alert(response.data[0]._id);
      if(Npass==CNpass)
      {
        let updateDetails={ "condition_obj":{"email":localStorage.getItem("email")} , "content_obj":{"password":CNpass}};
        axios.patch(__userapi+"update",updateDetails).then((response)=>{
          setOutput("Password edited successfully....");
          setOpass("");
          setNpass("");
          setCNpass("");
        });
      } 
      else
      {
       setOutput("New and confirm password re not matched");
       setCNpass("");
       setNpass("");
      }
   }).catch((error)=>{
       setOutput("invalid password");
       setOpass("")
   });
  };

return (
    <>

    {/* About Start */}
    <div class="container-fluid overflow-hidden py-5 px-lg-0">
                <div class="col-lg-12 about-text wow fadeInUp" data-wow-delay="0.3s">
                    <h1 class="mb-5">Change Password Here !!!!</h1>
                    <span style={{"color":"red"}}>{output}</span>
                    <br />
                      <form>
                      <div class="form-group">
                        <label for="Opass">Old Password:</label>
                        <input type="text" class="form-control" value={Opass} onChange={e=>setOpass(e.target.value)} />
                      </div>
                        <br /> 
                      <div class="form-group">
                        <label for="npass">New Password:</label>
                        <input type="text" class="form-control" value={Npass} onChange={e=>setNpass(e.target.value)} />
                      </div>
                        <br /> 
                     <div class="form-group">
                        <label for="cnpass">Confirm Password:</label>
                        <input type="text" class="form-control" value={CNpass} onChange={e=>setCNpass(e.target.value)} />
                      </div>
                        <br /> 
                      <br />
                      <button onClick={handleSubmit} type="button" class="btn btn-info">Edit Profile</button>
                      </form>


                </div>
            </div>
           
    {/* About End */}


    </>      
  
  );
}

export default Cpuser;
