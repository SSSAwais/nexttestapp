import { MDBCol, MDBContainer, MDBInput, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import AbsButton from "../../abs_Components/absButton/absButton";
import AbsDropDown from "../../abs_Components/absDropDown/absDropDown";
import AbsInput from "../../abs_Components/absInput/absInput";
import {
  ATF,
  FIXED,
  GEAROIL,
  GREESE,
  LUBRICANTS,
  PERCENTAGE,
} from "../../redux/consts";

const AddProductform = () => {
  const [product, setProduct] = useState("");
  const [qty, setQty] = useState("");
  const [discountType, setDiscountType] = useState(PERCENTAGE);
  const [ctnPrice, setCtnPrice] = useState("");
  const [category, setCategoty] = useState(GREESE);
  const [compnay, setCompany] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [cat, setCat] = useState(false);
  const [fixedValue, setFixedValue] = useState("");
  // const [productData, setProductData] = useState(lsGetItem(LS_PRODUCT_DATA));
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDisbale = (type) => {
    setDiscountType(type);
  };

  const Category = (e) => {
    setCat(!cat);
    setCategoty(e);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="6">
              <div className="mt-4">
                <AbsInput placeName="product" inputType="text" />
              </div>
              <div className="mt-4">
                <AbsInput placeName="Quantity" inputType="text" />
              </div>
              <div className="mt-4">
                <AbsDropDown
                  dropdowntitle={`${discountType}`}
                  firstoption={FIXED}
                  secondoption={PERCENTAGE}
                  events1={() => handleDisbale(FIXED)}
                  events2={() => handleDisbale(PERCENTAGE)}
                />
              </div>
              <div className="mt-4">
                <AbsInput placeName="Carton Price" inputType="text" />
              </div>
            </MDBCol>
            <MDBCol size="6">
              <div className="mt-4">
                <AbsDropDown
                  dropdowntitle={`${category}`}
                  firstoption={GREESE}
                  secondoption={LUBRICANTS}
                  thirdoption={ATF}
                  fourthoption={GEAROIL}
                  events1={() => Category(GREESE)}
                  events2={() => Category(LUBRICANTS)}
                  events3={() => Category(ATF)}
                  events4={() => Category(GEAROIL)}
                />
              </div>
              <div className="mt-4">
                <AbsInput placeName="Company" />
              </div>
              <div className="mt-4">
                <MDBInput
                  label=""
                  disabled={discountType == PERCENTAGE}
                  value={discountType == PERCENTAGE ? "" : fixedValue}
                  type="number"
                />
              </div>
              <div className="mt-4">
                <AbsInput placeName="Unit Price" />
              </div>
            </MDBCol>
          </MDBRow>
          <div className="form-submit-button text-center" >
          <AbsButton btnTitle="Save Product"/>
        </div>
        </MDBContainer>
      </form>
    </>
  );
};

export default AddProductform;
