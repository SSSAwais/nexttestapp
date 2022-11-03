import { MDBCol, MDBRow, MDBTextArea } from "mdb-react-ui-kit";
import React from "react";
import AbsButton from "../../abs_Components/absButton/absButton";
import AbsInput from "../../abs_Components/absInput/absInput";

const AddCompany = () => {
    const handleTask=(e)=>{
        e.preventDefault();
    }
  return (
    <>
      <form onSubmit={handleTask}>
        <MDBRow>
          <MDBCol>
            <div className="d-flex justify-content-center mt-3 mb-3">
              <div className="d-flex align-items-center mx-3">
                <span className="mx-2">Date:</span>
                <AbsInput inputType="Date" />
              </div>
            
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center">
          <MDBCol size="7" className="text-center">
            <div className="mt-3">
              <AbsInput placeName="Enter The Company Name" inputType="text" />
            </div>
            <div className="mt-3">
              <MDBTextArea label="Enter The Company Discription" id="textAreaExample" rows={4} />
            </div>
            <AbsButton btnTitle="Add Company"/>
          </MDBCol>
        </MDBRow>
      </form>
    </>
  );
};

export default AddCompany;
