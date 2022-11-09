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
import AbsProductList from "../abs_Components/absProductList/absProductList";
import AddProductform from "../components/addProduct/addProductform";
const Product = () => {
  const [editingId, setEditingId] = useState("");
  const [basicActive, setBasicActive] = useState("tab1");
  const [productData, setProductData] = useState([]);
  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("productData"));
    if (items) {
      setProductData(items);
    }
  }, []);

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
                  Add Product
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab2")}
                  active={basicActive === "tab2"}
                >
                  View Product List
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
                    {productData.map((e, idx) => {
                      if (e.id == editingId) {
                        return (
                          <tr>
                            <td colSpan={10}>
                              <AddProductform
                                updateData={(data) => {
                                  setEditingId("");
                                }}
                              />
                            </td>
                          </tr>
                        );
                      } else {
                        return (
                          <AbsProductList
                            id={e.id}
                            key={idx}
                            ProductName={e.product}
                            itemCategory={e.itemCategory}
                            price={e.unitPrice}
                            qty={e.qty}
                            carton={e.ctnPrice}
                            fixedValue={e.fixedValue}
                            company={e.company}
                            pressDlt={() => {
                              setProductData(
                                productData.filter((ele) => ele.id !== e.id)
                              );
                            }}
                             editPress={() => setEditingId(e.id)}
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
    </>
  );
};

export default Product;
