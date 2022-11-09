import { MDBCol, MDBContainer, MDBInput, MDBRow } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
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

const AddProductform = ({updateData}) => {
  const [product, setProduct] = useState("");
  const [qty, setQty] = useState("");
  const [discountType, setDiscountType] = useState(PERCENTAGE);
  const [ctnPrice, setCtnPrice] = useState("");
  const [category, setCategoty] = useState(GREESE);
  const [compnay, setCompany] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [cat, setCat] = useState(false);
  const [submitClick, setSubmitClick] = useState(false);
  const [fixedValue, setFixedValue] = useState("");
  const [productData, setProductData] = useState([]);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProductData = [
      ...productData,
      {
        id: productData.length + 1,
        product,
        qty,
        ctnPrice,
        unitPrice,
        compnay,
      },
    ];
    updateData(newProductData);
    setProduct("");
    setQty("");
    setCtnPrice("");
    setUnitPrice("");
    setCompany("");
    setSubmitClick(true)
  };
  useEffect(() => {
    localStorage.setItem('productData', JSON.stringify(productData));
  }, [productData]);
  
   
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('productData'));
    if (items) {
     setProductData(items);
    //  submitClick(false)
    }
  }, []);

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
                <AbsInput
                  placeName="product"
                  inputType="text"
                  val={product}
                  changefunction={(e) => setProduct(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <AbsInput
                  placeName="Quantity"
                  inputType="number"
                  val={qty}
                  changefunction={(e) => setQty(e.target.value)}
                />
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
                <AbsInput
                  placeName="Carton Price"
                  inputType="number"
                  val={ctnPrice}
                  changefunction={(e) => setCtnPrice(e.target.value)}
                />
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
                <AbsInput
                  placeName="Company"
                  inputType="text"
                  val={compnay}
                  changefunction={(e) => setCompany(e.target.value)}
                />
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
                <AbsInput
                  placeName="Unit Price"
                  inputType="number"
                  val={unitPrice}
                  changefunction={(e) => setUnitPrice(e.target.value)}
                />
              </div>
            </MDBCol>
          </MDBRow>
          <div className="form-submit-button text-center">
            <AbsButton btnTitle="Save Product" />
          </div>
        </MDBContainer>
      </form>
    </>
  );
};

export default AddProductform;
