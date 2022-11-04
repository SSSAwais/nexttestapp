import React from 'react'
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import styless from './drop.module.css'
const AbsDropDown = (props) => {
    const {
        dropdowntitle,
        firstoption,
        secondoption,
        thirdoption,
        events1,
        events2,
        events3,
        events4,
        fourthoption
      } = props;
  return (
    <>
    <MDBDropdown>
      <MDBDropdownToggle className={styless.dropdownsection}>{dropdowntitle}</MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBDropdownItem link="#"  onClick={events1}>{firstoption}</MDBDropdownItem>
        <MDBDropdownItem link="#"  onClick={events2}>{secondoption}</MDBDropdownItem>
        <MDBDropdownItem link="#" onClick={events3}>{thirdoption}</MDBDropdownItem>
        <MDBDropdownItem link="#" onClick={events4}>{fourthoption}</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    </>
  )
}

export default AbsDropDown