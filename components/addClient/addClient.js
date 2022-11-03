import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import AbsButton from "../../abs_Components/absButton/absButton";
import AbsInput from "../../abs_Components/absInput/absInput";

const AddClient = () => {
    const [clientName,setClientName]=useState('');
    const [number,setNumber]=useState('');
    const [address,setAddress]=useState('');
    const [shop,setShop]=useState('');
  return (
    <>
      <form>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="6">
              <div className="mt-4">
                <AbsInput placeName="Client Name" val={clientName} changefunction={(e)=>setClientName(e.target.value)}/>
              </div>
              <div className="mt-4">
                <AbsInput placeName="Address" val={address} changefunction={(e)=>setAddress(e.target.value)}/>
              </div>
            </MDBCol>
            <MDBCol size="6">
              <div className="mt-4">
                <AbsInput placeName="Number" val={number} changefunction={(e)=>setNumber(e.target.value)}/>
              </div>
              <div className="mt-4">
                <AbsInput placeName="Shop Name" val={shop} changefunction={(e)=>setShop(e.target.value)}/>
              </div>
            </MDBCol>
          </MDBRow>
          <div className="text-center">
            <AbsButton btnTitle="Save Clients" />
          </div>
        </MDBContainer>
      </form>
    </>
  );
};

export default AddClient;
