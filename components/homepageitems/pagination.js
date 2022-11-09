import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import React, { useState } from "react";
import styless from './homepage.module.css';
import data from "./Data";
const Pagination = () => {
  const [noOfElements, setnoOfElements] = useState(4);
  const loadMore = () => {
    setnoOfElements(noOfElements + noOfElements);
    // console.log("HEllo",noOfElements);
  };
  const [actImg, setActImg] = useState();
  const [pop, setPop] = useState(true);
  const slice = data.cardData.slice(0, noOfElements);
  const viewImage = (id) => {
    let picset = data.cardData.find((img) => img.id === id);
    console.log("new Img", picset);
    setActImg(picset);
    setPop(!pop);
    console.log("setNew Image", actImg);
  };
  return (
    <>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCol>
            <MDBTypography variant="h2" className={styless.port_heading}>
              {" "}
              PAGINATION
            </MDBTypography>

            <span className={styless.line}></span>
            <MDBTypography variant="h4" className={styless.subtitle}>
              {" "}
              Check Out MY Products
            </MDBTypography>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          {slice.map((element, index) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                <div className={styless.page_port} >
                  <div className={styless.img_backside}>
                    <img
                      src={element.img}
                      alt={element.name}
                      className="w-100"
                    />
                    <div className={styless.port_backside}>
                      <div
                        className={styless.port_circle}
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={() => viewImage(element.id)}
                      >
                        <i className="fa-solid fa-eye"></i>
                      </div>
                    </div>
                  </div>
                  <div className={styless.port_title}>
                    <h2 className={styless.port_name}>{element.name}</h2>
                  </div>
                </div>
              </div>
            );
          })}
        </MDBRow>
        <MDBRow className={styless.pagination_button_section}>
          <div className="col-lg-12">
            <div className="d-flex flex-column align-items-center">
              {slice.length === data.cardData.length ? (
                ""
              ) : (
                <>
                  <button className="button-load" onClick={() => loadMore()}>
                    Load More
                  </button>
                </>
              )}
            </div>
          </div>
        </MDBRow>
      </MDBContainer>
      {pop ? (
        ""
      ) : (
        <>
          <div className={styless.image_gallary_cover} onClick={() => setPop(!pop)}>
            {" "}
          </div>
          <div className={styless.image_gallary}>
            <div className={styless.image_gallary_img}>
              <img
                src={actImg.img}
                className="h-100 img-fluid"
                alt="portfolioImg"
              />

              <div className={styless.closeimgbox}>
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => setPop(!pop)}
                ></i>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Pagination;
