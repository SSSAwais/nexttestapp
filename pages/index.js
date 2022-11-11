import React, { useEffect, useState } from "react";
import SideBar from "./Sidebar";
import Invoices from "./invoices";
import Login from "./Login";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";

const Home = () => {
  const isLoged = useSelector((state) => state.UserAuth.isLogedIn);
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    console.log(isLoged, "login called");
       setAuth(isLoged)
  }, []);
  console.log("auth",auth)
  return (
    <>
    {auth ?<Invoices/>:"" }
    </>
   
  );
};

export default Home;
