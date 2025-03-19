import './AddsubCategory.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { __categoryapi, __subcategoryapi } from '../API_URL';

function AddsubCategory() {
  const [file,setFile]=useState();
  const [catnm,setCatName]=useState();
  const [subcatnm,setSubCatName]=useState();
  const [output,setoutput]=useState();
  const [cDetails,setCdetails]=useState([]);
   
  useEffect(()=>{
    axios.get(__categoryapi+"fetch").then((response)=>{
       //console.log(response.data);
       setCdetails(response.data)
    })
},[])


  const handleChange=(event)=>{
    setFile(event.target.files[0]);
  }

  const handleSubmit =(event)=>{
    event.preventDefault();
    var formData= new FormData();
    formData.append('catnm',catnm);
    formData.append('subcatnm',subcatnm)
    formData.append('caticon',file);

    const config= {
      "content-type":"multipart/form-data"
    };

    axios.post(__subcategoryapi+"save",formData,config).then((response)=>{
      setoutput("Sub Category Added succesfully");
    }).catch((error)=>{
        setoutput("Sub Category not Added succesfully");
    })

  }


  return (
    <>
           <div class="container-fluid overflow-hidden py-5 px-lg-0">
                <div class="col-lg-12 about-text wow fadeInUp" data-wow-delay="0.3s">
                 <h1>Add Sub Category Here!!!!!</h1>   
                 <br />
            <font style={{"color":"red"}}>{output}</font>
         <br /><br />
         <form>
<div class="form-group">
    <label for="catnm">Category Name:</label>
    <select class="form-control" value={catnm} onChange={e=>setCatName(e.target.value)}>
        <option>Select Category</option>
        {
            cDetails.map((row)=>(
                <option>{row.catnm}</option>
            ))
        }
    </select>
  </div>
  <br/>     
  <div class="form-group">
    <label for="Subcatnm">Sub Category Name:</label>
    <input type="text" class="form-control" placeholder="Enter subcategory name" value={subcatnm} onChange={e=>setSubCatName(e.target.value)} />
  </div>
  <br/>
  <div class="form-group">
    <label for="subcaticon">Sub CatIcon :</label>
    <input type="file" class="form-control" onChange={handleChange} />
  </div>
  <br/>
  <button type="button" class="btn btn-success" onClick={handleSubmit}>AddCategory</button>
</form>  

 
                </div>
            </div>
           
    
    </>
  );
}

export default AddsubCategory;
