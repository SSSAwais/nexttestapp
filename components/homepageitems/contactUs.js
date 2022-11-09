import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
const ContactUs = () => {
    const [detail, setDetail] = useState([
        {
          icon: <i className="fa-solid fa-location-dot"></i>,
          detaildisp: "ADDRESS WILL BE PASTED HERE",
        },
        {
          icon: <i className="fa-solid fa-mobile-screen-button"></i>,
          detaildisp: "0300-0000000",
        },
        {
          icon: <i className="fa-solid fa-envelope-open"></i>,
          detaildisp: "abc@gmail.com",
        },
        {
          icon: <i className="fa-brands fa-whatsapp"></i>,
          detaildisp: "0300-0000000",
        },
      ]);

      const [name,setName]=useState();
      const [email,setEmail]=useState();
      const [num,setNum]=useState();
      const submitForm=()=>{
        console.log("Submit function Called");
      }
  return (
    <>
      <section>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
            <MDBTypography variant='h3' className="heading">Contact Us</MDBTypography>
            <MDBTypography variant='h2' className="chat">Let’s Have A Chat!</MDBTypography>
            <MDBTypography  className="char-para">You may contact me by filling in this form any time you need professional support or have any questions. You can also fill in the form to leave your comments or feedback.</MDBTypography>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default ContactUs;
