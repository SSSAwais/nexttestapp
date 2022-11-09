import React from "react";
import ResponsiveCarousel from "../components/homepageitems/sliders";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Testimonials from "../components/homepageitems/testimonials";
import Pagination from "../components/homepageitems/pagination";
import ContactUs from "../components/homepageitems/contactUs";
const Homepage = () => {
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <ResponsiveCarousel />
        </MDBRow>
        <Testimonials />
      </MDBContainer>
      <Pagination />
      <ContactUs />
    </>
  );
};

export default Homepage;
