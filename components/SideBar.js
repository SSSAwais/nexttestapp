import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/sidebar.module.css";
import { MenuData } from "./MenuData";
const SideBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <section className={styles.sidebar_wrapper}>
        <div className={`${open ? styles.sidebarItem : styles.sidebarItem_2}`}>
          <div className={styles.icons}>
            <i
              className="fa-solid fa-angle-left"
              onClick={() => setOpen(!open)}
            ></i>
          </div>
          <ul className={styles.lists_}>
            {MenuData.map((e, idx) => (
              <>
                <li key={idx} title={e.title}>
                  <Link href={e.path} >
                    {" "}
                    {e.icon}{" "}
                    <span className={`${!open && styles.hidden}`}>{e.name}</span>
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default SideBar;
