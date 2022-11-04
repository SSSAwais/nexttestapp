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
import Abs_Heading from "../abs_Components/absHeading/abs_Heading";
import AddProductform from "../components/addProduct/addProductform";
import { LS_PRODUCT_DATA } from "../redux/consts";
import { lsGetItem, lsSetItem } from "../utils/helpers";

const Product = () => {
  const [basicActive, setBasicActive] = useState("tab1");
  // const [productData, setProductData] = useState(lsGetItem(LS_PRODUCT_DATA));
  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  // useEffect(() => {
  //   lsSetItem(LS_PRODUCT_DATA, productData);
  // }, [productData]);
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol size="12">
            <Abs_Heading heading="Products" />
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
                  Tab 1
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab2")}
                  active={basicActive === "tab2"}
                >
                  Tab 2
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
            <MDBTabsContent>
              <MDBTabsPane show={basicActive === "tab1"}>
                <AddProductform updateData={(data) => setProductData(data)} />
              </MDBTabsPane>
              <MDBTabsPane show={basicActive === "tab2"}>
                <MDBTable>
                  <MDBTableHead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">product</th>
                      <th scope="col">Category</th>
                      <th scope="col">Unir Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Carton Price</th>
                      <th scope="col">Discount price</th>
                      <th scope="col">Company</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                  
                  </MDBTableBody>
                </MDBTable>
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Product;
