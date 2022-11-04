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
import AddClient from "../components/addClient/addClient";

const Client = () => {

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
            <MDBCol>
              <Abs_Heading heading="Client" />
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
                    Add Client
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleBasicClick("tab2")}
                    active={basicActive === "tab2"}
                  >
                    View Client List
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              <MDBTabsContent>
                <MDBTabsPane show={basicActive === "tab1"}>
                  <AddClient />
                </MDBTabsPane>
                <MDBTabsPane show={basicActive === "tab2"}>
                  <MDBTable>
                    <MDBTableHead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Client Name</th>
                        <th scope="col">Shop Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Number</th>
                      </tr>
                    </MDBTableHead>
                  </MDBTable>
                </MDBTabsPane>
              </MDBTabsContent>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
};

export default Client;
