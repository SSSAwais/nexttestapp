import React, { useState } from "react";
import Abs_Heading from "../abs_Components/absHeading/abs_Heading";
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
  MDBTextArea,
} from "mdb-react-ui-kit";
import AddExpense from "../components/addExpense/addExpense";
const Expense = () => {
  const [allExpDetail,setAllExpDetail]=useState([]);
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
              <Abs_Heading heading="Expenses" />
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
                    Add Expense
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleBasicClick("tab2")}
                    active={basicActive === "tab2"}
                  >
                    View Expense List
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              <MDBTabsContent>
                <MDBTabsPane show={basicActive === "tab1"}>
                  <AddExpense updateExpense={(data) => setAllExpDetail(data)}/>
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

export default Expense;
