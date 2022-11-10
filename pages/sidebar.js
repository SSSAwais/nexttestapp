import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Invoices from "./invoices";
import Login from "./Login";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const isLoged = useSelector((state) => state.UserAuth.isLogedIn);
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    console.log(isLoged, "login called");
       setAuth(isLoged)
  }, []);
  console.log("auth",auth)
  return (
    <>
      <div className="content">
         {auth ? <SideBar /> :<Login/> }
      </div>
      <div className="eror">
        <h2>Resolution Not Supported</h2>
      </div>
    </>
  );
};

export default Sidebar;