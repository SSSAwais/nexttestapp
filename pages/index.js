import React, { useEffect } from "react";
import SideBar from "../components/SideBar";
import Invoices from "./invoices";
import Login from "./Login";
import { useSelector } from "react-redux";
const Home = () => {
  const isLoged = useSelector((state) => state.UserAuth.isLogedIn);
  useEffect(() => {
    console.log(isLoged, "login called");
  }, [isLoged]);
  return (
    <>
      <div className="content">
        {isLoged ?( <SideBar />) : <Login />}
       
      </div>
      <div className="eror">
        <h2>Resolution Not Supported</h2>
      </div>
    </>
  );
};

export default Home;
