import React from 'react'
import styles from './heading.module.css'
const Abs_Heading = (props) => {
    const {heading}=props;
  return (
    <>
 
    <h3 className={styles.heading}>{heading}</h3>
    </>
  )
}

export default Abs_Heading;