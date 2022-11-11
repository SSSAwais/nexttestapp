import {
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import Abs_Heading from "../abs_Components/absHeading/abs_Heading";
import AbsInput from "../abs_Components/absInput/absInput";
import styles from "../styles/invoice.module.css";
import SideBar from "../components/SideBar";
const Invoices = () => {
  const [ruppes, setRuppes] = useState("Dummy Text Added");
  const [totalValue, setTotalValue] = useState(0);
  const [lumsum, setLumSum] = useState(0);
  const [receivables, setReceivables] = useState(0);
  const [received, setReceived] = useState(0);
  const [remaing, setRemaing] = useState(0);
  return (
    <>
      <section className="w-100">
        <div className={styles.topSection}>
          <MDBContainer>
            <MDBRow>
              <MDBCol size="md">
                <Abs_Heading heading="Invoices" />
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
            <MDBRow className={styles.amount_detail}>
              <MDBCol size="7">
                <div className={styles.dummydata}>
                  <span>Ruppee:</span>
                  {ruppes}
                </div>
              </MDBCol>
              <MDBCol size="4">
              
                <table className="w-100">
                  <tbody>
                   <tr>
                      <td> 
                        <MDBInput
                          label="Total Value "
                          readonly
                          value={totalValue}
                          className={styles.inputvalue}
                          size="lg"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <MDBInput
                          label="LumSum Discount "
                          readonly
                          value={lumsum}
                          className={styles.inputvalue}
                          size="lg"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <MDBInput
                          label="Total Net Receivables "
                          readonly
                          value={receivables}
                          className={styles.inputvalue}
                          size="lg"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <MDBInput
                          label="Received Amount "
                          type="number"
                          value={received}
                          className={styles.inputvalue}
                          onChange={(e) => setReceived(e.target.value)}
                          size="lg"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <MDBInput
                          label="Remaining Amount"
                          readonly
                          value={remaing}
                          className={styles.inputvalue}
                          size="lg"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol size="12" className="mt-3">
                <MDBInput label="Remarks" size="md" />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </section>
    </>
  );
};

export default Invoices;
