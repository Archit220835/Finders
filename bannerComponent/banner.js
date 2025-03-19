import './banner.css';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <>
    <section class="slider_section ">
      <div class="slider_bg_box">
        
       <img src="./assets/images/property2.jpg" style={{Width: "1920px",Height : "1020px"}} alt="" /> 
      </div>
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 ">
                  <div class="detail-box">
                    <h1>
                      We Provide best <br />
                      Proprty
                    </h1>
                    <p>
                    Explore a wide range of properties tailored to your preferences and budget
                     </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                      Start Your Search
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 ">
                  <div class="detail-box">
                    <h1>
                      We Provide best <br />
                       Service
                    </h1>
                    <p>
                    Our mission is to provide a seamless and enjoyable property search experience, connecting you with listings that align with your lifestyle and investment goals.          </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                      Start Your Search
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 ">
                  <div class="detail-box">
                    <h1>
                      We Provide best <br />
                       Service
                    </h1>
                    <p>
                    At Finders, we are committed to helping you find the perfect property. With years of experience in the real estate market, our team offers personalized services to meet your needs           </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                      Start Your Search
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ol class="carousel-indicators">
          <li data-target="#customCarousel1" data-slide-to="0" class="active"></li>
          <li data-target="#customCarousel1" data-slide-to="1"></li>
          <li data-target="#customCarousel1" data-slide-to="2"></li>
        </ol>
      </div>

    </section>
   
    </>
  );
}

export default Banner;
