import './ViewSubCategory.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { __subcategoryapi } from '../API_URL';
import { Link ,useParams} from 'react-router-dom';

function ViewSubCategory() {

  const [scDetails,setSCDetails]=useState([]);
  
  const parms=useParams();
  
  useEffect(()=>{
    axios.get(__subcategoryapi+"fetch?catnm="+parms.catnm).then((response)=>{
        setSCDetails(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  })
  
  return (
      <>
  
      <div class="container-fluid overflow-hidden py-5 px-lg-0">
                  <div class="col-lg-12 about-text wow fadeInUp" data-wow-delay="0.3s">
                    <h1>View Sub Category Here!!!!!</h1>      
                      <div id="scpart">
                          {
                            scDetails.map((row)=>(
                              <div className="mydiv1" >
                               <Link to ={`/viewpdetail/${row._id}`}> 
                               <img src={`../assets/uploads/subcaticons/${row.subcaticonnm}`} height="90%" width="90%"/>
                               <br />
                               <b>{row.catnm}</b>
                               </Link>
                             </div>
                           
  
                            ))
                          }
  
                      </div> 
                   
                   </div>
              </div>
             
  
  
      </>      
    
    );
  }
  
  export default ViewSubCategory;
  
