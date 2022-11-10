import React, { Component, useEffect } from "react";
import "../styles/globals.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Header from "../components/header";
import styles from "../styles/index.module.css";
import store, { persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { useSelector } from 'react-redux';
import Sidebar from './sidebar';
function MyApp({ Component, pageProps }) {

  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Header />
          
          <div className={styles.main_div}>
            <div className={styles.right_content}>
               <Sidebar/>
              <Component {...pageProps} />
            </div>
          </div>
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;
