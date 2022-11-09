import React, { useState, useEffect } from "react";
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
import AbsTaskList from "../abs_Components/absTaskList/absTaskList";
const Tasks = () => {
  const [basicActive, setBasicActive] = useState("tab1");
  const [editId, setEditId] = useState("");
  const [taskDetail, setTaskDetail] = useState([]);
  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("taskDetail"));
    if (items) {
      setTaskDetail(items);
    }
  }, []);
  return (
    <>
      <section>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="12">
              <Abs_Heading heading="Task" />
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
                    Add Task
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleBasicClick("tab2")}
                    active={basicActive === "tab2"}
                  >
                    View Tasks
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              <MDBTabsContent>
                <MDBTabsPane show={basicActive === "tab1"}>
                  <AddTask updateTask={(data) => setTaskDetail(data)} />
                </MDBTabsPane>
                <MDBTabsPane show={basicActive === "tab2"}>
                  <MDBTable>
                    <MDBTableHead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">Title</th>
                        <th scope="col">TitleDetail</th>
                        <th scope="col">End Date</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {taskDetail.map((e, idx) => {
                        if (e.id == editId) {
                          return (
                            <tr key={idx}>
                              <td>
                                <AddTask
                                  updateTask={(data) => {
                                    setEditId("");
                                  }}
                                />
                              </td>
                            </tr>
                          );
                        } else {
                          return (
                            <AbsTaskList
                              key={idx}
                              id={e.id}
                              startDate={e.startDate}
                              task={e.task}
                              detail={e.detail}
                              endtDate={e.endtDate}
                              pressDlt={() => {
                                setList(list.filter((ele) => ele.id !== e.id));
                              }}
                              editPress={() => setEditId(e.id)}
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

export default Tasks;
