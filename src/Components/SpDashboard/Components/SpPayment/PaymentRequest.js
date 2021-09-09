import React, { useRef, useState } from "react";
import logo from "../../../Banner/Navbar/udukku-logo.png";
import { Link, useHistory } from "react-router-dom";
import "./PaymentRequest.css";
import { FaRupeeSign } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { validateFields } from "../../../../Validation";
import classnames from "classnames";
import { ToastContainer, toast } from "react-toastify";
import { Modal } from "react-bootstrap";

const PaymentRequest = () => {
  const [PaymentModal, SetPaymentModal] = useState(false);

  const Input1Ref = useRef(null);
  const Input2Ref = useRef(null);
  const Input3Ref = useRef(null);
  const Input4Ref = useRef(null);
  const InputMailRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      Input1Ref.current.value &&
      Input2Ref.current.value &&
      Input3Ref.current.value &&
      Input4Ref.current.value &&
      InputMailRef.current.value
    ) {
      SetPaymentModal(true);
    } else {
      toast.error("Please fill all fields");
    }
  };
  const history = useHistory();
  const btn1Handler = () => {
    history.push("/payment");
  };

  return (
    <div>
      {" "}
      <div className="navbar" id="payreq-logo">
        <Link to="/">
          {" "}
          <img src={logo} alt="uddukku" className="logo" />
        </Link>
      </div>
      <Form onSubmit={submitHandler}>
        <div className="payment-req-form">
          <div className="payment-form-title">
            <p style={{ fontSize: "xx-large", color: "black" }}>
              Invite a client to fund a job through Udukku
            </p>
            <br />
            <p style={{ color: "black" }}>Initiate a job easily</p>
            <p style={{ color: "black" }}>
              Earn verified reviews - Get higher visibility on Udukku
            </p>
            <p style={{ color: "black" }}>
              Offer trust & assurance to your clients
            </p>
          </div>

          <div className="payment-input-form">
            <input
              type="text"
              placeholder="PROJECT TITLE"
              className="payment-form-input"
              ref={Input1Ref}
              minlength="8"
            ></input>
            <input
              type="text"
              placeholder="WHAT WILL YOU DELIVER"
              className="payment-form-input"
              ref={Input2Ref}
            ></input>{" "}
            {/* <FaRupeeSign /> */}
            {/* <i className="fa fa-user icon"></i>
              <i className="fa fa-rupee" style={{ color: "black" }}></i> */}
            <input
              type="number"
              placeholder="ENTER AMOUNT : ?"
              className="payment-form-input"
              ref={Input3Ref}
            ></input>
            <input
              type="text"
              placeholder="NEW CLIENT NAME"
              className="payment-form-input"
              ref={Input4Ref}
            ></input>
            <input
              type="email"
              placeholder="NEW CLIENT EMAIL@email.com"
              className="payment-form-input"
              ref={InputMailRef}
            ></input>
            <div className="payureq-btn">
              <Button variant="success" className="payureq-btn" type="submit">
                Continue
              </Button>
              {/* <button type="submit"> Submit </button> */}
            </div>
            {/* // div after submitting
             */}
            {PaymentModal ? (
              <div>
                Client will pay {Input3Ref.current.value}
                <Button
                  variant="success"
                  className="payureq-btn1"
                  onClick={btn1Handler}
                >
                  Continue
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </Form>
    </div>
  );
};
export default PaymentRequest;
