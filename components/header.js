import { MDBCol, MDBContainer, MDBNavbar, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import Styles from "../styles/Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Rd_Logout } from "../redux/reducers/UserAuth";
import { Act_Logout } from "../redux/BusinessLogics/Authentications";
import Link from "next/link";
import MyUserClass from "../redux/BusinessLogics/User";
const Header = () => {
  const isLoged = useSelector((state) => state.UserAuth.isLogedIn);
  const dispatch = useDispatch();

  const [login, setLogin] = useState(true);
  const myUser = MyUserClass.userData();
  const [toogle, setToogle] = useState(false);
  const handleLoginEvent2 = () => {
    Act_Logout(dispatch(Rd_Logout()));
    setToogle(!toogle);
  };
  return (
    <>
      <header className={Styles.header}>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="6" className={Styles.logo}>
              <h3>Logo</h3>
            </MDBCol>
            <MDBCol md="6" className={Styles.login}>
              <ul className={Styles.listss}>
                {isLoged ? (
                  <li className={Styles.listItem}>
                    <Link href="login" onClick={handleLoginEvent2}>
                      {myUser.name} (logout)
                    </Link>
                  </li>
                ) : (
                  <li className={Styles.listItem}>
                    <Link href="/" onClick={handleLoginEvent2}>
                      login
                    </Link>
                  </li>
                )}
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </header>
    </>
  );
};

export default Header;
