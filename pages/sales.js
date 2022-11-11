import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import Abs_Heading from "../abs_Components/absHeading/abs_Heading";
import AbsInput from "../abs_Components/absInput/absInput";
import AbsReturnSale from "../abs_Components/absReturnSale/absReturnSale";

const Sales = () => {
  const [basicActive, setBasicActive] = useState("tab1");
  const [checked, setChecked] = useState(false);
  const [listReturn, setListReturn] = useState([]);
  const [returnSale, setReturnSale] = useState([
    {
      id: "1",
      itemCode: "Kixxs",
      quantity: "2",
      rate: "130",
      amount: "500",
    },
    {
      id: "2",
      itemCode: "Total",
      quantity: "10",
      rate: "130",
      amount: "500",
    },
    {
      id: "3",
      itemCode: "PSo",
      quantity: "8",
      rate: "130",
      amount: "500",
    },
  ]);
  const markcheck = (id) => {
    const abc = returnSale.filter((ele) => (ele.id = id));

    console.log("==> ()", abc);
  };
  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  return (
    <>
      <section className="w-100">
        <MDBContainer>
          <MDBRow>
            <MDBCol size="12">
              <Abs_Heading heading="Sales" />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="12">
              <div className="d-flex justify-content-center mt-3 mb-3">
                <div className="d-flex align-items-center mx-3">
                  <span className="mx-2">From:</span>
                  <AbsInput inputType="Date" />
                </div>
                <div className="d-flex align-items-center">
                  <span className="mx-2">To:</span>
                  <AbsInput inputType="Date" />
                </div>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol size="12">
              <MDBTabs className="mb-3">
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleBasicClick("tab1")}
                    active={basicActive === "tab1"}
                  >
                    Sales
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleBasicClick("tab2")}
                    active={basicActive === "tab2"}
                  >
                    Sales Return
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>
{/* // tabs content start first starts*/}


              <MDBTabsContent>
   {/*           //tabs 1 content*/}
                <MDBTabsPane show={basicActive === "tab1"}>
                  <MDBTable>
                    <MDBTableHead>
                      <tr className="text-center">
                        <th scope="col">#</th>
                        <th scope="col">Invoice Number</th>
                        <th scope="col">Date</th>
                        <th scope="col">Total Price</th>
                        <th scope="col">Items Sold</th>
                      </tr>
                    </MDBTableHead>
                  </MDBTable>
                </MDBTabsPane>
                {/*   //tab 1 section ends her*/}
                {/*    //tabs2 sextion starts here*/}
                <MDBTabsPane show={basicActive === "tab2"}>
                  <MDBTable>
                    <MDBTableHead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item Code</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Rate</th>
                        <th scope="col">Amount</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {returnSale.map((e, idx) => (
                        <AbsReturnSale
                          key={idx}
                          returnSale={returnSale}
                          markcheck={markcheck}
                          id={e.id}
                          itemCode={e.itemCode}
                          quantity={e.quantity}
                          rate={e.rate}
                          amount={e.amount}
                          checked={checked}
                          setChecked={setChecked}
                          setListReturn={setListReturn}
                          listReturn={listReturn}
                          // handleDlt={() => {
                          //   setReturnSale(
                          //     returnSale.filter((ele) => ele.id !== e.id)
                          //   );
                          // }}
                          // pressDlt={() => {
                          //   setList(
                          //     list.filter((ele) => ele.id !== e.id)
                          //   );
                          // }}
                        />
                      ))}
                    </MDBTableBody>
                  </MDBTable>
                  <h5>Return Sale</h5>
                  <div>
                    <MDBTable>
                      <MDBTableHead>
                        <tr>
                          <th>#</th>
                          <th>Item Code</th>
                          <th>Quantity</th>
                          <th>Rate</th>
                          <th>Amount</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        {listReturn.map((e, idx) => (
                          <tr key={idx}>
                            <td>{e.id}</td>
                            <td>{e.itemCode}</td>
                            <td>{e.quantity}</td>
                            <td>{e.rate}</td>
                            <td>{e.amount}</td>
                          </tr>
                        ))}
                      </MDBTableBody>
                    </MDBTable>
                  </div>
                </MDBTabsPane>
              </MDBTabsContent>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default Sales;
