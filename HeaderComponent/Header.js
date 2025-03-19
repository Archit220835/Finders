import './Header.css';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
function Header() {
const [navConetnt,SetnavContent] = useState();

useEffect(()=>{
  setInterval(()=>{
    if(localStorage.getItem('role')=="admin"){
      SetnavContent(
        <>
      
      <header class="header_section">
        <div class="header_top">
          <div class="container-fluid ">
            <div class="contact_nav">
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call : +xxx xxx xxxx
                </span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  Email : finder@gmail.com
                </span>
              </a>
              <a href="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Location
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="header_bottom">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
              <a class="navbar-brand" href="index.html">
                <span>
                  Finder
                </span>
              </a>
      
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class=""> </span>
              </button>
      
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav  ">
                <li class="nav-item">
                    <a class="nav-link" href="#">Welcome Admin</a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link" > <Link to="/cpadmin">change password</Link><span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" ><Link to="/epadmin">Edit Profile</Link></a>
                  </li>
                  
                        
                  <li class="nav-item">
                    <a class="nav-link"> <Link to="/Addcategory">AddCategory</Link> </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"> <Link to="/Addsubcategory">AddsubCategory</Link> </a>
                  </li>
                
                  <li class="nav-item">
                    <a class="nav-link"> <Link to="/manageuser">manageUser</Link> </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" ><i class="fa fa-user" aria-hidden="true"></i> <Link to="/logout">Logout</Link></a>
                  </li>
                  <form class="form-inline">
                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </ul>
              </div>
            </nav>   
          </div>  
        </div>
      </header>
      
      </>
      )
      }
      else if(localStorage.getItem('role')=="user"){
        SetnavContent(
        <>
        
      <header class="header_section">
        <div class="header_top">
          <div class="container-fluid ">
            <div class="contact_nav">
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call : +xxx xxx xxxx
                </span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  Email : finder@gmail.com
                </span>
              </a>
              <a href="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Location
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="header_bottom">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
              <a class="navbar-brand" href="index.html">
                <span>
                  Finder
                </span>
              </a>
      
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class=""> </span>
              </button>
      
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav  ">
                  <li class="nav-item active">
                    <a class="nav-link" > <Link to="/">Home</Link><span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" ><Link to="/about">About</Link></a>
                  </li>

                  <li class="nav-item">
                    <a class="nav-link" ><Link to="/epuser">Edit Profile </Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" ><Link to="/cpuser">Change password</Link></a>
                  </li>
                  
                  <li class="nav-item">
                    <a class="nav-link"> <Link to="/viewcategory">viewCategory</Link> </a>
                  </li>
                  
                  <li class="nav-item">
                    <a class="nav-link" ><i class="fa fa-user" aria-hidden="true"></i> <Link to="/logout">Logout</Link></a>
                  </li>
                  <form class="form-inline">
                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
        </>
        )}
        else{
      
          SetnavContent(
        <>
        
      <header class="header_section">
        <div class="header_top">
          <div class="container-fluid ">
            <div class="contact_nav">
              <a href="">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <span>
                  Call : +xxx xxx xxxx
                </span>
              </a>
              <a href="">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>
                  Email : finder@gmail.com
                </span>
              </a>
              <a href="">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <span>
                  Location
                </span>
              </a>
            </div>
          </div>
        </div>
        <div class="header_bottom">
          <div class="container-fluid">
            <nav class="navbar navbar-expand-lg custom_nav-container ">
              <a class="navbar-brand" href="index.html">
                <span>
                  Finder
                </span>
              </a>
      
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class=""> </span>
              </button>
      
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav  ">
                  <li class="nav-item active">
                    <a class="nav-link" > <Link to="/">Home</Link><span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" ><Link to="/about">About</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"> <Link to="/service">Service</Link> </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Contact Us</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"> <i class="fa fa-user" aria-hidden="true"><Link to="/register">Register</Link></i></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" ><i class="fa fa-user" aria-hidden="true"></i> <Link to="/login">Login</Link></a>
                  </li>
                  <form class="form-inline">
                    <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>
      </>
     )}
          
  })  
})
return (
  <>
{
  navConetnt
}


    </>
  );
}

export default Header;

