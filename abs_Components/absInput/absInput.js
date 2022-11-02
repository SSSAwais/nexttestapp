import { MDBInput } from 'mdb-react-ui-kit';
import React from 'react'
import style from './input.module.css'
const AbsInput = (props) => {
    const {placeName,inputType,inputClass}=props;
  return (
    <>
    <MDBInput label={placeName} id='form1' type={inputType} className={inputClass}/>    
    </>
  )
}

export default AbsInput