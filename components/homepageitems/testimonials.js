import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import Slider from "react-slick";
import AbsSlider from "../../abs_Components/absSlider/absSlider";
import styless from  './homepage.module.css';
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const [slider, setSlider] = useState([
    {
      sliderImg: "/assets/images/testi.jpg",
      ClientName: "Monica pepe",
      reviews:
        "Mani has gone above and beyond to resolve problems on a website. He is smart and doesn’t quit! A very hard worker who I will continue to work with for all my future needs. He knows many things and is a hard worker. Great problem solver!!!",
    },
    {
      sliderImg: "/assets/images/testi.jpg",
      ClientName: "Gabriel Lowe",
      reviews:
        "Perfect. Exactly what I needed! Looking forward to future projects! Thanks so much!!!!",
    },
  ]);
  return (
    <>
      <MDBRow>
        <MDBCol size="6" className="col-lg-6">
          <div>
            <img
              src="/assets/images/kizs.jpg"
              alt="kixx"
              className="img-fluid "
            />
          </div>
        </MDBCol>
        <MDBCol size="6" className="col-lg-6">
          <div className="testimonial_section">
            <MDBTypography variant="h3" className={styless.heading}>Testimonials</MDBTypography>
            <MDBTypography variant="h3" className={styless.client_says}>
              What Client Says About Us
            </MDBTypography>
            <Slider {...settings}>
              {slider.map((e, idx) => (
                <div key={idx}>
                  <AbsSlider
                    sliderImg={e.sliderImg}
                    ClientName={e.ClientName}
                    reviews={e.reviews}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </MDBCol>
      </MDBRow>
    </>
  );
};

export default Testimonials;
