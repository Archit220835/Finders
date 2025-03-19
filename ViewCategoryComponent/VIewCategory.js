import './ViewCategory.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { __categoryapi } from '../API_URL';
function ViewCategory() {

  const [cDetails,setCDetails]=useState([]);
  useEffect(()=>{
  axios.get(__categoryapi+"fetch").then((response)=>{
    setCDetails(response.data);
  }).catch((error)=>{
    console.log(error);
  })
  
  });
  
  return (
    <>
      <div class="container-fluid overflow-hidden py-5 px-lg-0">
                  <div class="col-lg-12 about-text wow fadeInUp" data-wow-delay="0.3s">
                    <h1>View Category Here!!!!</h1>
                      <div id="main">
                      {
                          cDetails.map((row)=>(
                            <div className="mydiv" >
                               <Link to ={`/viewsc/${row.catnm}`}> 
                               <img src={`./assets/uploads/caticons/${row.caticonnm}`} height="90%" width="90%"/>
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
  
  export default ViewCategory;
  
