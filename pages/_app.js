import "../styles/globals.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import Header from "../components/header";
import SideBar from "../components/SideBar";
import styles from "../styles/index.module.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
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
