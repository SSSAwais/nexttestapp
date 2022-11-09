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
import React, { useEffect, useState } from "react";
import AbsClientPro from "../abs_Components/absClient/absClient";
import Abs_Heading from "../abs_Components/absHeading/abs_Heading";
import AddClient from "../components/addClient/addClient";

const Client = () => {
  const [clientData,setClientData]=useState([]);
  const [editId, setEditId] = useState("");
  const [basicActive, setBasicActive] = useState("tab1");
  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('clientData'));
    if (items) {
      setClientData(items);
    }
  }, []);
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
                  <AddClient updateClient={(data) => setClientData(data)}  />
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
                    <MDBTableBody>
                      {
                        clientData.map((e,idx)=>{
                         if(e.id==editId){
                          return(
                            <tr key={idx}>
                            <td key={idx}>
                            <AddClient updateClient={(data)=>{
                              setEditId("");
                            }}/>
                            </td>
                            </tr>
                          );
                         }else{
                          return(
                            <AbsClientPro
                            key={idx}
                            id={e.id}
                            clientName={e.clientName}
                            number={e.number}
                            address={e.address}
                            shop={e.shop}
                            editPress={() => setEditId(e.id)}
                            />
                          )
                         }
                        })
                      }
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

export default Client;
