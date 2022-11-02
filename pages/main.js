import React from 'react'
import Invoices from './invoices'
import styles from '../styles/index.module.css'


const MainFile = () => {
  return (
    <>
    <div className={styles.right_section}>
    <Invoices/>
   
    </div>
    </>
  )
}

export default MainFile