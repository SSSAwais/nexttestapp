import { MDBCol, MDBRow, MDBTextArea } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import AbsButton from "../../abs_Components/absButton/absButton";
import AbsInput from "../../abs_Components/absInput/absInput";

const AddTask = ({ updateTask }) => {
  const [task, setTask] = useState("");
  const [detail, setDetail] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endtDate, setEndDate] = useState("");
  const [taskDetail, setTaskDetail] = useState([]);

  const handleTask = (e) => {
    e.preventDefault();
    const newTaskDetail = [
      ...taskDetail,
      {
        id: taskDetail.length + 1,
        task,
        detail,
        startDate,
        endtDate,
      },
    ];
    updateTask(newTaskDetail);
    // setTask("");
    // setDetail("");
    // startDate("");
    // setEndDate("");
   
  };
  useEffect(() => {
     localStorage.setItem("taskDetail", JSON.stringify(taskDetail));
  }, [taskDetail]);

 console.log(taskDetail,"hello")
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("taskDetail"));
    if (items) {
      setTaskDetail(items);
    }
  }, []);
  return (
    <>
      <form onSubmit={handleTask}>
        <MDBRow>
          <MDBCol>
            <div className="d-flex justify-content-center mt-3 mb-3">
              <div className="d-flex align-items-center mx-3">
                <span className="mx-2">From:</span>
                <AbsInput
                  inputType="Date"
                  val={startDate}
                  changefunction={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="d-flex align-items-center">
                <span className="mx-2">To:</span>
                <AbsInput
                  inputType="Date"
                  val={endtDate}
                  changefunction={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center">
          <MDBCol size="7" className="text-center">
            <div className="mt-3">
              <AbsInput
                placeName="Enter The Task Title"
                inputType="text"
                val={task}
                changefunction={(e) => setTask(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <MDBTextArea
                label="Message"
                id="textAreaExample"
                rows={4}
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
              />
            </div>
            <AbsButton btnTitle="Add Task" />
          </MDBCol>
        </MDBRow>
      </form>
    </>
  );
};

export default AddTask;
