import React, { useEffect, useState } from "react";
import Abs_Heading from "../abs_Components/absHeading/abs_Heading";
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
  MDBTextArea,
} from "mdb-react-ui-kit";
import AbsInput from "../abs_Components/absInput/absInput";
import AddTask from "../components/addTask/addTask";
import AddCompany from "../components/addCompnay/addCompany";
import AbsCompList from "../abs_Components/absCompList/absCompList";
const Company = () => {
  const [compAllDetail, setCompAllDetail] = useState([]);
  const [basicActive, setBasicActive] = useState("tab1");
  const [taskId, setTaskId] = useState("");
  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("compAllDetail"));
    if (items) {
      setCompAllDetail(items);
    }
  }, []);
  return (
    <>
      <section className="w-100">
        <MDBContainer>
          <MDBRow>
            <MDBCol size="12">
              <Abs_Heading heading="Companies" />
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
                    Add Company
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleBasicClick("tab2")}
                    active={basicActive === "tab2"}
                  >
                    View Compnay List
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              <MDBTabsContent>
                <MDBTabsPane show={basicActive === "tab1"}>
                  <AddCompany
                    updateCompany={(data) => setCompAllDetail(data)}
                  />
                </MDBTabsPane>
                <MDBTabsPane show={basicActive === "tab2"}>
                  <MDBTable>
                    <MDBTableHead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Discription</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {compAllDetail.map((e, idx) => {
                        if (e.id == taskId) {
                          return (
                            <tr key={idx}>
                              <td colSpan={6} key={idx}>
                                <AddCompany
                                  updateCompany={(data) => {
                                    setTaskId("");
                                  }}
                                />
                              </td>
                            </tr>
                          );
                        } else {
                          return (
                            <AbsCompList
                              key={idx}
                              id={e.id}
                              date={e.date}
                              name={e.companyName}
                              detail={e.compDetail}
                              pressDlt={() => {
                                setCompAllDetail(
                                  compAllDetail.filter((ele) => ele.id !== e.id)
                                );
                              }}
                              editPress={() => setTaskId(e.id)}
                            />
                          );
                        }
                      })}
                    </MDBTableBody>
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

export default Company;
