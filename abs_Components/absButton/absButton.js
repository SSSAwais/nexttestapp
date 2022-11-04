import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import styless from './btn.module.css';
const AbsButton = (props) => {
    const {btnTitle}=props;
  return (
    <>
    <MDBBtn className={styless.buttonn}>{btnTitle}</MDBBtn>
    </>
  )
}

export default AbsButton