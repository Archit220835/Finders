import './AddCategory.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { __categoryapi } from '../API_URL';


function AddCategory() {
    const [file,setFile]=useState();
    const [catname,setCategoryName]=useState();
    const [output,setoutput]=useState();
  
    const handleChange=(event)=>{
      setFile(event.target.files[0]);
    } 
    const handleSubmit=(event)=>{
      event.preventDefault();
      var formData= new FormData();
      formData.append('catnm',catname);
      formData.append('caticon',file);
  
      const config= {
        "content-type":"multipart/form-data"
      };
  
      axios.post(__categoryapi+"save",formData,config).then((response)=>{
        setoutput("Category Added succesfully");
      }).catch((error)=>{
          setoutput("Category not Added succesfully");
      })
    } 
  


  return (
    <>
         <div class="container-fluid overflow-hidden py-5 px-lg-0">
       <div class="col-lg-12 about-text wow fadeInUp" data-wow-delay="0.3s">
          <h1>Add Category Here!!!!</h1>
                 <br />
            <font style={{"color":"red"}}>{output}</font>
         <br /><br />
         <form>
            <div class="form-group">
              <label for="Catename">Category Name:</label>
              <input type="email" class="form-control" value={catname} onChange={e => setCategoryName(e.target.value)}/>
            </div>
            <br />
            <div class="form-group">
              <label for="Caticon">Caticon:</label>
              <input type="file" class="form-control" onChange={handleChange}/>

            </div>
            <br />
            <button type="button" onClick={handleSubmit} class="btn btn-danger">Add Category</button>
          </form>
        </div>
   </div>
           
    </>
  );
}

export default AddCategory;
