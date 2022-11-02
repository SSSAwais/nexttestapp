import "../styles/globals.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Header from "../components/header";
import SideBar from "../components/SideBar";
import styles from "../styles/index.module.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
  />
    </Head>
   

     
      
      <Header />
      <div className={styles.main_div}>
        <SideBar />
        <div className={styles.right_content}>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
