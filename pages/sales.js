import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
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

const Sales = () => {
  const [basicActive, setBasicActive] = useState("tab1");
  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  return (
    <>
      <section>
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

              <MDBTabsContent>
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
                <MDBTabsPane show={basicActive === "tab2"}>
                  Tab 2 content
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
