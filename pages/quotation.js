import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import AbsInput from "../abs_Components/absInput/absInput";
import Abs_Heading from "../abs_Components/absHeading/abs_Heading";
import styles from "../styles/quotation.module.css";
const Quotation = () => {
  return (
    <>
      <section className="w-100">
        <div className={styles.topSection}>
          <MDBContainer>
            <MDBRow>
              <MDBCol size="md">
                <Abs_Heading heading="Quotation" />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size="8">
                <div>
                  <MDBTable>
                    <MDBTableHead>
                      <tr>
                        <td colSpan={4} className={styles.tableData}>
                          <AbsInput
                            placeName="Customer Name"
                            inputClass={styles.input}
                          />
                        </td>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      <tr>
                        <td className={styles.tableData}>
                          {" "}
                          <AbsInput placeName="Address" />
                        </td>
                        <td className={styles.tableData}>
                          {" "}
                          <AbsInput placeName="Town" />
                        </td>
                      </tr>
                    </MDBTableBody>
                  </MDBTable>
                </div>
              </MDBCol>
              <MDBCol size="4">
                <MDBTable>
                  <MDBTableHead>
                    <tr>
                      <td colSpan={6} className={styles.tableData}>
                        <AbsInput placeName="Sales Invoice" inputType="text" />
                      </td>
                    </tr>
                  </MDBTableHead>
                  <MDBTableBody>
                    <tr>
                      <td className={styles.tableData}>
                        <AbsInput placeName="Date" inputType="date" />
                      </td>
                      <td className={styles.tableData}>
                        <AbsInput
                          placeName="Price List Ref"
                          inputType="number"
                        />
                      </td>
                    </tr>
                  </MDBTableBody>
                </MDBTable>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        <div className={styles.middleSection}>
          <MDBContainer>
            <MDBRow>
              <MDBCol size="12">
                <MDBTable className="table-sm" bordered>
                  <MDBTableHead>
                    <tr className="text-center">
                      <th>#</th>
                      <th>Products</th>
                      <th>Qty</th>
                      <th>Sale</th>
                      <th>Sales</th>
                      <th>Discount</th>
                      <th>Net Amount</th>
                      <th>Free Quantity</th>
                    </tr>
                    <tr className="border text-center">
                      <td></td>
                      <td></td>
                      <td>
                        <table className="table mb-0">
                          <tbody>
                            <tr className="text-center">
                              <td className="p-0 ">Packs</td>
                              <td className="p-0">Pieces</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>Rate</td>
                      <td>Value</td>
                      <td>
                        <table className="table mb-0">
                          <tbody>
                            <tr className="text-center">
                              <td className="p-0">%</td>
                              <td className="p-0">Fixed</td>
                              <td className="p-0">Amount</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                      <td>receivables</td>
                      <td>
                        <table className="table mb-0">
                          <tbody>
                            <tr className="text-center p-0">
                              <td className="p-0">Packs</td>
                              <td className="p-0">Pieces</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </MDBTableHead>
                </MDBTable>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol size="8" className="mt-3">
                <MDBInput label="Remarks" size="md" />
              </MDBCol>
              <MDBCol size="4" className="mt-3">
                <MDBInput label="Total Amount" size="md" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </section>
    </>
  );
};

export default Quotation;
