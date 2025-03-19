import './ManageUser.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {__userapi} from '../API_URL';
import {useNavigate} from 'react-router-dom';

function ManageUser() {
  const navigate = useNavigate();
 
 const [userDetail,setUserDetail]=useState([]);
 
 useEffect(()=>{
   axios.get(__userapi+"fetch?role=user").then((response)=>{
       setUserDetail(response.data)
   }).catch((error)=>{
     console.log(error)
   })
 })
 
 const changeStatus=(_id,s)=>{
   if(s=='verify')
   {
     let updateDetails ={"condition_obj":{"_id":_id},"content_obj":{"status":1}};
     axios.patch(__userapi+"update",updateDetails).then((response)=>{
       navigate("/manageusers");
     }).catch((error)=>{
       console.log(error);
     });    
   } 
   else if(s=='block')
   {
     let updateDetails ={"condition_obj":{"_id":_id},"content_obj":{"status":0}};
     axios.patch(__userapi+"update",updateDetails).then((response)=>{
       navigate("/manageusers");
     }).catch((error)=>{
       console.log(error);
     });    
   } 
   else
   {
       //alert(_id);navigate("/manageusers");
       let deleteUser ={"data":{"_id":_id}};
       // console.log(deleteUser);
       axios.delete(__userapi+"delete",deleteUser).then((response)=>{
         navigate("/manageusers");
       }).catch((error)=>{
           console.log(error);
       });
   }
 }
 
   return (
     <>
 
     <div class="container-fluid overflow-hidden py-5 px-lg-0">
                 <div class="col-lg-12 about-text wow fadeInUp" data-wow-delay="0.3s">
                   <h1 class="mb-5">View And Manage userDetail</h1>
                   <table class="table table-borderd" border="2px">
                     <tr>
                       <th>regid</th>
                       <th>name</th>
                       <th>email</th>
                       <th>mobile</th>
                       <th>city</th>
                       <th>gender</th>
                       <th>address</th>
                       <th>info</th>
                       <th>status</th>
                       <th>action</th>
                     </tr>
                     {
                        userDetail.map((row)=>(
                         <tr>
                           <td>{row._id}</td>
                           <td>{row.name}</td>
                           <td>{row.email}</td>
                           <td>{row.mobile}</td>
                           <td>{row.city}</td>
                           <td>{row.gender}</td>
                           <td>{row.address}</td>
                           <td>{row.info}</td>
                           <td>
                             {
                               row.status==0 && <a style={{"color":"green"}} onClick={()=>{changeStatus(row._id,'verify')}}>Verify User</a>
                             }
                             {
                               row.status==1 && <a style={{"color":"orange"}} onClick={()=>{changeStatus(row._id,'block')}} >Block User</a>
                             }
                            </td>
                           <td><a style={{"color":"red"}} onClick={()=>{changeStatus(row._id,'delete')}}>Delete</a></td>
                         </tr>
                       ))  
                     }
              
                   </table>
                 </div>
             </div>
            
 
 
     </>      
   
   );
 }
 

export default ManageUser;