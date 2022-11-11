import React, { useEffect, useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import Abs_Heading from "../abs_Components/absHeading/abs_Heading";
import AbsPriceList from "../abs_Components/absPriceList/absPriceList";
const PriceList = () => {
  const [basicActive, setBasicActive] = useState("tab1");
  const [hell,setHell]=useState([]);
  const [rowSpan,setRowSpan]=useState([]);
  const [list, setList] = useState([
    {
      id: "1",
      name: "HYBRID ",
      disp: "Fully Synthatic",
      varient: "Api Sp",
      grade: "0W-16",
      pack: "1-liter",
      liter_Kg: "2070",
      rateprice: "2070",
      rate_ctn: "24840",
    },
  ]);
//   function hellowolrd(){
//     const categories = ['GREESE','LUBRICANTS','ATF','GEAROIL'];
//     const alldata = [];
//     const rowspan = [];
//     for(var i = 0; i < categories.length; i++ ){
//       const category = categories[i];
//         var rows = 0;
//       const matchingrasulr = firstList.map(function(val,index){
//         // console.log(index);
//         const dbcategory = val.itemCategory;
//         if( dbcategory.match(category) ){
//          rows =  rows + 1;
//           alldata.push(val);
//         }
//       });//map function end here
//       if( rows > 0 ) rowspan[category] = rows ;
      
//     }
// // return alldata;
// // console.log(rowspan);
//     setHell([...alldata]);
//     setRowSpan(rowspan);

//   }


  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  
  // useEffect(() => {
  //   hellowolrd();

  // }, [firstList]);
  const [ref, setRef] = useState("1");

  return (
    <>
    <section className="w-100">
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <Abs_Heading heading="Price List" />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <MDBTabs className="mb-3">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab1")}
                  active={basicActive === "tab1"}
                >
                  NEW
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab2")}
                  active={basicActive === "tab2"}
                >
                  CURRENT REF# 1
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab3")}
                  active={basicActive === "tab3"}
                >
                  OLD LISTS
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={basicActive === "tab1"}>
                <MDBTable>
                  <MDBTableHead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Description</th>
                      <th scope="col">Grade</th>
                      <th scope="col">Pack</th>
                      <th scope="col">Rate LTR/KG Rs</th>
                      <th scope="col">Rate Price (Rs).</th>
                      <th scope="col">Rate/CTN (Rs).</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                  {
                    hell.map((e,idx)=>
                    <AbsPriceList
                    rowspan={ rowSpan[e.itemCategory] }
                    rowid = { idx }
                    id={e.id}
                    key={idx}
                    ProductName={e.ProductName}
                    itemCategory={e.itemCategory}
                    price={e.price}
                    qty={e.qty}
                    carton={e.carton}
                    fixedValue={e.fixedValue}
                    company={e.company}
                  />

                    )
                    
                    
                  }
                  </MDBTableBody>
                </MDBTable>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive === "tab2"}>
                <MDBTable>
                  <MDBTableHead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Description</th>
                      <th scope="col">Grade</th>
                      <th scope="col">Pack</th>
                      <th scope="col">Rate LTR/KG Rs</th>
                      <th scope="col">Rate Price (Rs).</th>
                      <th scope="col">Rate/CTN (Rs).</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                  {list.map((e, idx) => (
                    <AbsPriceList
                    key={idx}
                    id={e.id}
                    name={e.name}
                    disp={e.disp}
                    varient={e.varient}
                    grade={e.grade}
                    pack={e.pack}
                    liter_Kg={e.liter_Kg}
                    rateprice={e.rateprice}
                    rate_ctn={e.rate_ctn}
                    />
                  ))}
                  </MDBTableBody>
                </MDBTable>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive === "tab3"}>
                <MDBTable>
                  <MDBTableHead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Description</th>
                      <th scope="col">Grade</th>
                      <th scope="col">Pack</th>
                      <th scope="col">Rate LTR/KG Rs</th>
                      <th scope="col">Rate Price (Rs).</th>
                      <th scope="col">Rate/CTN (Rs).</th>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                  {list.map((e, idx) => (
                    <AbsPriceList
                      key={idx}
                      id={e.id}
                      name={e.name}
                      disp={e.disp}
                      varient={e.varient}
                      grade={e.grade}
                      pack={e.pack}
                      liter_Kg={e.liter_Kg}
                      rateprice={e.rateprice}
                      rate_ctn={e.rate_ctn}
                    />
                  ))}
                  </MDBTableBody>
                </MDBTable>
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </section>
    </>
  );
};

export default PriceList;
