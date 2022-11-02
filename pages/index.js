import React from "react";

import MainFile from "./main";
import Styles from '../styles/index.module.css'
import Head from "next/head";
const index = () => {
  return (
    <>
 
      <div className={Styles.main_view}>
      
        <MainFile />
      </div>
    </>
  );
};

export default index;
