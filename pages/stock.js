import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import Abs_Heading from "../abs_Components/absHeading/abs_Heading";
import AbsStock from "../abs_Components/absStock/absStock";

const Stock = () => {
  const [stock, setStock] = useState([
    {
      productid: "1",
      productname: "Kixxs",
      productcategory: "abs",
      unitprice: "1",
      totalprice: "50",
    },
  ]);
  return (
    <>
    <section className="w-100">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <Abs_Heading heading="Stock" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol size="12">
            <MDBTable>
              <MDBTableHead>
                <tr>
                  <th scope="col">Product Id</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Category</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Stock Amount</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {stock.map((e, idx) => (
                  <AbsStock
                    key={idx}
                    productid={e.productid}
                    productname={e.productname}
                    productcategory={e.productcategory}
                    unitprice={e.unitprice}
                    totalprice={e.totalprice}
                  />
                ))}
              </MDBTableBody>
            </MDBTable>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </section>
    </>
  );
};

export default Stock;
