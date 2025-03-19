import './footer.css';

function Footer() {
  return(
    <>
    

<section class="info_section layout_padding2">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-lg-3 info_col">
        <div class="info_contact">
          <h4>
            Address
          </h4>
          <div class="contact_link_box">
            <a href="">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Abhay prashal
              </span>
            </a>
            <a href="">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call +91 744-554901
              </span>
            </a>
            <a href="">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>
                Finders@gmail.com
              </span>
            </a>
          </div>
        </div>
        <div class="info_social">
          <a href="">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="">
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="">
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 info_col">
        <div class="info_detail">
          <h4>
            Info
          </h4>
          <p>
          Regular posts on topics like market trends, home buying tips, investment advice, and neighborhood guides.

</p>
        </div>
      </div>
      <div class="col-md-6 col-lg-2 mx-auto info_col">
        <div class="info_link_box">
          <h4>
            Links
          </h4>
          <div class="info_links">
            <a class="active" href="index.html">
              <img src="images/nav-bullet.png" alt="" />
              Home
            </a>
            <a class="" href="about.html">
              <img src="images/nav-bullet.png" alt="" />
              About
            </a>
            <a class="" href="service.html">
              <img src="images/nav-bullet.png" alt="" />
              Services
            </a>
            <a class="" href="contact.html">
              <img src="images/nav-bullet.png" alt="" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 info_col ">
        <h4>
          Subscribe
        </h4>
        <form action="#">
          <input type="text" placeholder="Enter email" />
          <button type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</section>


<section class="footer_section">
  <div class="container">
    <p>
      &copy; <span id="displayYear"></span> All Rights Reserved 
    </p>
  </div>
</section>
    </>
  )
}
export default Footer;