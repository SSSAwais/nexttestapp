import { MDBInput } from 'mdb-react-ui-kit';
import React from 'react'
import style from './input.module.css'
const AbsInput = (props) => {
    const {placeName,inputType,inputClass,val,changefunction}=props;
  return (
    <>
    <MDBInput label={placeName} id='form1' type={inputType} className={inputClass} value={val} onChange={changefunction}/>    
    </>
  )
}

export default AbsInput