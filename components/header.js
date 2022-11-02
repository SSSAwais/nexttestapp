import { MDBCol, MDBContainer, MDBNavbar, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import Styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <>
      <header className={Styles.header}>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="6" className={Styles.logo}>
              <h3>Logo</h3>
            </MDBCol>
            <MDBCol md="6" className={Styles.login}>
              <h3> Login</h3>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </header>
    </>
  );
};

export default Header;
