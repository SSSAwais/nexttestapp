import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBTypography,
  MDBTextArea,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import AbsButton from "../abs_Components/absButton/absButton";
import AbsDropDown from "../abs_Components/absDropDown/absDropDown";
import Abs_Heading from "../abs_Components/absHeading/abs_Heading";
import AbsInput from "../abs_Components/absInput/absInput";
import { BANK, CASH } from "../redux/consts";

const Payments = () => {
  const [payee, setPayee] = useState("");
  const [bank, setBank] = useState(false);
  const [shop, setShop] = useState("");
  const [date, setDate] = useState();
  const [receivable, setReceivable] = useState("");
  const [number, setNumber] = useState("");
  const [amountReceived, setAmountReceived] = useState("");
  const [payType, setPayType] = useState(BANK);
  const [textArea,setTextArea]=useState();
  const handlePayment = (type) => {
    setPayType(type);
    setBank(!bank);
  };
  return (
    <>
    <section className="w-100">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <Abs_Heading heading="Payments" />
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center">
          <MDBCol size="6">
            <div>
              <AbsInput placeName="Search Client" />
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size="6">
            <MDBTable>
              <MDBTableHead>
                <tr>
                  <td className="paymet-inputs">
                    <AbsInput
                      placeName="Client Name"
                      val={payee}
                      changefunction={(e) => setPayee(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="paymet-inputs">
                    <AbsInput
                      placeName="Shop Name"
                      val={shop}
                      changefunction={(e) => setShop(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="paymet-inputs">
                    <AbsInput
                      placeName="Amount Received"
                      val={amountReceived}
                      changefunction={(e) => setAmountReceived(e.target.value)}
                      inputType="number"
                    />
                  </td>
                </tr>
              </MDBTableHead>
            </MDBTable>
          </MDBCol>
          <MDBCol size="6">
            <MDBTable>
              <MDBTableHead>
                <tr>
                  <td>
                    <AbsInput
                      placeName="Phone Number"
                      val={number}
                      changefunction={(e) => setNumber(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <AbsInput val={receivable} placeName="Receivables" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <AbsInput
                      val={date}
                      inputType="date"
                      placeName="Date"
                      changefunction={(e) => setDate(e.target.value)}
                    />
                  </td>
                </tr>
              </MDBTableHead>
            </MDBTable>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size="6">
            <MDBTypography tag="h4">Payments</MDBTypography>
            <div>
              <AbsDropDown dropdowntitle={`${payType}`} firstoption={CASH} secondoption={BANK} events1={()=>handlePayment(CASH)} events2={()=>handlePayment(BANK)}/>
            </div>
            <div className="mt-4">
            <MDBTextArea label='Please Enter The Detail Of Payment' id='textAreaExample' rows={4}  value={textArea} onChange={(e)=>setTextArea(e.target.value)}/>
            </div>
            <AbsButton btnTitle="Save Payment"/>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </section>
    </>
  );
};

export default Payments;
