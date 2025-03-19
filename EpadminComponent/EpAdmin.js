import './Epadmin.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {__userapi} from '../API_URL'; 
import { useNavigate } from 'react-router-dom';
   
function EpAdmin() {
      const navigate = useNavigate();
      const [output,setOutput]=useState();
	    const [name,setName]=useState();
      const [email,setEmail]=useState();
	    const [mobile,setMobile]=useState();
	    const [address,setAddress]=useState();
	    const [city,setCity]=useState();
      const [ M , setM ] = useState();
      const [ F , setF ] = useState();
	    const [gender,setGender]=useState();
    
      useEffect(()=>{
        axios.get(__userapi+"fetch?email="+localStorage.getItem("email")).then((response)=>{
          var userDetail=response.data[0];
          setName(userDetail.name);
          setEmail(userDetail.email);
          setMobile(userDetail.mobile);
          setCity(userDetail.city);
          setAddress(userDetail.address);
          if(userDetail.gender=="male")
              setM("checked");
          else
            setF("Checked"); 
        }).catch((error)=>{
          console.log(error)
        })

},[]);

const handleSubmit=()=>{
  let userDetails= {"condition_obj":{"email":email},"content_obj":{"name":name,"mobile":mobile,"city":city,"address":address,"gender":gender}}; 
 
  axios.patch(__userapi+"update",userDetails).then((response)=>{
      setOutput("Edit Profile Success Full");
      navigate("/cpadmin");
  }).catch((error)=>{
    console.log(error);
  });
};
    
  return (
    <>
        {/* About Start */}
        <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-12">
                    <div class="section-title mb-4">
                        <h1 class="display-5 mb-0">Edit Profile!!!!!!!</h1>
                        <br />
                    <span style={{"color":"red"}}>{output}</span>
                    <br />
                      <form>
                      <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" class="form-control" value={name} onChange={e=>setName(e.target.value)} />
                      </div>
                        <br /> 
                     
                      <div class="form-group">
                        <label for="email">Email address:</label>
                        <input type="email" class="form-control" value={email} onChange={e=>setEmail(e.target.value)} />
                      </div>   
                      <br />             
                      <div class="form-group">
                        <label for="mobile">Mobile:</label>
                        <input type="text" class="form-control" value={mobile} onChange={e=>setMobile(e.target.value)}/>
                      </div>
                      <br />
                      <div class="form-group">
                        <label for="address">Address:</label><br />
                        <textarea class="form-control" value={address} onChange={e=>setAddress(e.target.value)}></textarea>
                     </div>
                      <br />  
                      <div class="form-group">
                        <label for="city">City:</label><br />
                        <select class="form-control" value={city} onChange={e=>setCity(e.target.value)}>
                          <option>Select City</option>
                          <option>Indore</option>
                          <option>Bhopal</option>
                          <option>Ujjain</option>  
                        </select>
                      </div>
                      <br />  
                      <div class="form-group">
    <label for="gender">Gender:</label>
    &nbsp;&nbsp;
    Male <input type="radio" value="male" checked={ M } name="gender" onChange={ e => setGender(e.target.value) } />
    &nbsp;&nbsp;
    Female <input type="radio" value="female" checked={ F } name="gender" onChange={ e => setGender(e.target.value) } />
  </div>
                      <br />
                      <button onClick={handleSubmit} type="button" class="btn btn-info">Edit Profile</button>
                      </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* About End */}

    </>
  );
}

export default EpAdmin;
