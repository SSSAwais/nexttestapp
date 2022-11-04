import React, { useEffect, useState } from "react";
import styless from './absPriceList.module.css';
const AbsPriceList = (props) => {
    const{id,name,disp,varient,grade,pack,liter_Kg,rateprice,rate_ctn}=props;

  return (
    <>
    <tr className="border-bottom">
    <th scope="row">{id}</th>
    <td>
      <div className={styless.discription}>
        <div className={styless.inner_disp}>
         <div> {name}</div> {disp}
        </div>
        <div className="pr-2">
        {varient}
        </div>
      </div>
    </td>
    <td>{grade}</td>
    <td>{pack}</td>
    <td>{liter_Kg}</td>
    <td>{rateprice}</td>
    <td>{rate_ctn}</td>
  </tr>
    </>
  );
};

export default AbsPriceList;
