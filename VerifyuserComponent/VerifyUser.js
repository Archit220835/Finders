import { Navigate,useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { __userapi} from '../API_URL';
import axios from 'axios';

function VerifyUser()
{
    const params = useParams(); 
    useEffect(()=>{
     axios.get(__userapi+"fetch?email="+params.email).then((response)=>{
        if(response.data[0].__v==0)
        {
            var updateDetails={"condition_obj":{"email":params.email},"content_obj":{"status":1,"__v":1}}; 
            axios.patch(__userapi+"update",updateDetails).then((response)=>{
               console.log("User verified....");    
            });    
        }       
     });
    },[]);

    return(
        <div>
            <Navigate to='/login' />
        </div>
    )
}

export default VerifyUser