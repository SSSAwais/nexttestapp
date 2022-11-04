import React, { useState } from 'react'
import Abs_Heading from '../abs_Components/absHeading/abs_Heading'
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
import AbsInput from '../abs_Components/absInput/absInput';
import AddTask from '../components/addTask/addTask';
const Tasks = () => {
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
        
    <Abs_Heading heading="Task"/>
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
            <AddTask/>
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
  )
}

export default Tasks