
  import { Navigate } from "react-router-dom";
  import { useEffect } from "react";
  
  function Logout() {
    useEffect(()=>{
      localStorage.removeItem('token');
      localStorage.removeItem('_id');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      localStorage.removeItem('password');
      localStorage.removeItem('city');
      localStorage.removeItem('mobile');
      localStorage.removeItem('address');
      localStorage.removeItem('gender');
      localStorage.removeItem('role');
      localStorage.removeItem('status');
      localStorage.removeItem('info');
    })
    return (
      <>
        <Navigate to="/login"/>
      </>      
  );
}

export default Logout;
