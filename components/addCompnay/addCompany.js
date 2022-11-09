import { MDBCol, MDBRow, MDBTextArea } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import AbsButton from "../../abs_Components/absButton/absButton";
import AbsInput from "../../abs_Components/absInput/absInput";

const AddCompany = ({updateCompany}) => {
  const [date, setDate] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [compDetail, setCompDetail] = useState("");
  const [compAllDetail, setCompAllDetail] = useState([]);
  const handleTask = (e) => {
    e.preventDefault();
    const newCompAllDetail = [
      ...compAllDetail,
      {
        date,
        companyName,
        compDetail,
      },
    ];
    updateCompany(newCompAllDetail);
  };
  useEffect(() => {
    localStorage.setItem("compAllDetail", JSON.stringify(compAllDetail));
  }, [compAllDetail]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("compAllDetail"));
    if (items) {
      setCompAllDetail(items);
    }
  }, []);

  return (
    <>
      <form onSubmit={handleTask}>
        <MDBRow>
          <MDBCol>
            <div className="d-flex justify-content-center mt-3 mb-3">
              <div className="d-flex align-items-center mx-3">
                <span className="mx-2">Date:</span>
                <AbsInput
                  inputType="Date"
                  val={date}
                  changefunction={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center">
          <MDBCol size="7" className="text-center">
            <div className="mt-3">
              <AbsInput
                placeName="Enter The Company Name"
                inputType="text"
                val={companyName}
                changefunction={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <MDBTextArea
                label="Enter The Company Discription"
                id="textAreaExample"
                rows={4}
                value={compDetail}
                onChange={(e) => setCompDetail(e.target.value)}
              />
            </div>
            <AbsButton btnTitle="Add Company" />
          </MDBCol>
        </MDBRow>
      </form>
    </>
  );
};

export default AddCompany;
