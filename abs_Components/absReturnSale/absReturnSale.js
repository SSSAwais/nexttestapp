import React, { useState } from "react";
import AbsInput from "../absInput/absInput";

const AbsReturnSale = (props) => {
  const {
    id,
    itemCode,
    quantity,
    rate,
    amount,
    pressDlt,
    checked,
    returnSale,
    setChecked,
    setListReturn,

    listReturn,
    handleDlt,
  } = props;
  const [againCheck, setAgainCheck] = useState(checked);
  const markcheck = (id) => {
    const abc = returnSale.find((element) => element.id == id);

    const alfa = [...listReturn, abc];
    setListReturn(alfa);
    console.log(alfa);
    if (abc.id == id) {
      setAgainCheck(!againCheck);
    }
  };
  const dltEvent = (id) => {
    const dragon = returnSale.find((element) => element.id == id);
    // console.log(id);
    if (dragon.id == id) {
      setAgainCheck(!againCheck);
    }
    const abc = listReturn.filter((element) => element.id != id);

    setListReturn(abc);
  };
  return (
    <>
      <tr>
        <td>
          {againCheck ? (
            <i className="fa-solid fa-minus" onClick={() => dltEvent(id)}></i>
          ) : (
            <i className="fa-solid fa-check" onClick={() => markcheck(id)}></i>
          )}{" "}
          {id}
        </td>
        <td>
          <AbsInput val={itemCode} />
        </td>
        <td>
          <AbsInput val={quantity} />
        </td>
        <td>
          <AbsInput val={rate} />
        </td>
        <td>
          <AbsInput val={amount} />
        </td>
        {/* <td>
        <i className="fa-solid fa-circle-minus " onClick={pressDlt}></i>
        <i className="fa-solid fa-plus"></i>
      </td> */}
      </tr>
    </>
  );
};

export default AbsReturnSale;
