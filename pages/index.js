import React, { useEffect, useState } from "react";
import SideBar from "./Sidebar";
import Invoices from "./invoices";
import Login from "./Login";
import { useSelector } from "react-redux";
const Home = () => {

  return (
    <>
    <Invoices/>
    </>
  );
};

export default Home;
