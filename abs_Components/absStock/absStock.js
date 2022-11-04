import React from 'react'

const AbsStock = (props) => {
    const {productid,productname,productcategory,unitprice,totalprice}=props;
  return (
    <>
    <tr>
    <td>{productid}</td>
    <td>{productname}</td>
    <td>{productcategory}</td>
    <td>{unitprice}</td>
    <td>{totalprice}</td>
</tr>
    </>
  )
}

export default AbsStock