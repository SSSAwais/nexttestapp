import React from "react";

const AbsCompList = (props) => {
  const { id, date, name, detail, pressDlt, editPress } = props;
  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>{date}</td>
        <td>{name}</td>
        <td>{detail}</td>
        <td>
          <i className="fa-solid fa-circle-minus" onClick={pressDlt}></i>
        </td>
        <td>
          <i className="fa-solid fa-file-pen" onClick={editPress}></i>
        </td>
      </tr>
    </>
  );
};

export default AbsCompList;
