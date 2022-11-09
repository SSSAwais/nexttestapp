import React from "react";
import styless from "./absSlider.module.css";
const AbsSlider = (props) => {
  const { sliderImg, ClientName, reviews } = props;
  return (
    <>
      <div className={styless.Slider_section}>
        <div className={styless.slider_img}>
          <img src={sliderImg} alt="image" className="img-fluid" />
        </div>
        <h2 className={styless.clientname}>{ClientName}</h2>
        <p className={styless.reviews}>{reviews}</p>
      </div>
    </>
  );
};

export default AbsSlider;
