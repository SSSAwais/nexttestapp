import React, { useState } from "react";
import AbsInput from "../abs_Components/absInput/absInput";
import { MDBCheckbox } from "mdb-react-ui-kit";
import styless from "../styles/Login.module.css";
import { Act_Login } from "../redux/BusinessLogics/Authentications";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Rd_Login_Success } from "../redux/reducers/UserAuth";
const Login = () => {
  const router =useRouter();
  const dispatch = useDispatch();
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleLogin=(e)=>{
        // e.preventDefault();

        Act_Login(()=>{
          router.push('/invoices');
         dispatch(
           Rd_Login_Success())
         });
         console.log("btn click")


    }
 
  return (
    <>
      <section className="text-center text-lg-start">
        <div className="container py-4">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className={styless.cascading_right}
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5">Sign In Now</h2>
                 <form onSubmit={handleLogin}>
                    <div className="form-outline mb-4">
                      <AbsInput inputType="email" placeName="Enter E-mail" val={email} changefunction={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <div className="form-outline mb-4">
                      <AbsInput
                        inputType="password"
                        placeName="Enter Password"
                        val={password}
                        changefunction={(e)=>setPassword(e.target.value)}
                      />
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                      <MDBCheckbox
                        name="flexCheck"
                        id="flexCheckDefault"
                        label="Remember Me"
                      />
                    </div>

                    <button  className={styless.btn_signIn} > 
                      Sign In
                    </button>

                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-github"></i>
                      </button>
                    </div>
                    
               </form>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0">
              <img
                src="/assets/images/login2.jpg"
                className="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
