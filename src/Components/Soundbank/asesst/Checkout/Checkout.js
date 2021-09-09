import React from "react";
import Navbar from "../../../Banner/Navbar/Navbar";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div>
      <div
        className="cart-navbar"
        style={{ backgroundColor: "black", height: "15vh" }}
      >
        <Navbar />
      </div>
      <div className="cart-main-body">
        <div className="cart-form">
          <h2 className="cart-text">Licensee Information</h2>
          <br />
          <form className="cart-form-input">
            <div className="form-names">
              <div>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="checkout-input"
                  required
                ></input>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Enter Artist's name"
                  className="checkout-input"
                  required
                ></input>
              </div>
            </div>
            <br />
            <div className="email-input-div">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
                required
              ></input>
            </div>
          </form>
        </div>
        <div className="cart-billing-modal">
          <div className="cart-billing-divs">
            <h2 className="cart-text"> Order Summary</h2>
          </div>
          <div className="cart-billing-divs" style={{ textAlign: "start" }}>
            <h3>Bring It</h3>{" "}
          </div>
          <div className="cart-billing-divs">
            <h4 style={{ fontSize: "small" }}>
              {" "}
              I have read and accept the terms and conditions
            </h4>

            <button className="pay-btn"> Pay Now </button>
          </div>
        </div>

        {/* payment info div */}

        <div className="payment-info-div">
          <h2 className="cart-text">Payment and Billing Information</h2>
          <br />
          <form className="cart-form-1">
            <div className="billing-info">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="checkout-input"
                  required
                ></input>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="checkout-input"
                  required
                ></input>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Full Address"
                  className="checkout-input"
                  required
                ></input>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="City"
                  className="checkout-input"
                  required
                ></input>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="State"
                  className="checkout-input"
                  required
                ></input>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Country"
                  className="checkout-input"
                  required
                ></input>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Pin Code"
                  className="checkout-input"
                  required
                ></input>
              </div>
              <div>
                <input
                  type="number"
                  placeholder="Phone"
                  className="checkout-input"
                  required
                ></input>
              </div>
            </div>
          </form>
        </div>
        <div></div>
      </div>
      <div className="cart-billing-modal-2">
        <div className="cart-billing-divs">
          <h2 className="cart-text" style={{ textAlign: "center" }}>
            {" "}
            Order Summary
          </h2>
        </div>
        <div className="cart-billing-divs" style={{ textAlign: "center" }}>
          <h3>Bring It</h3>{" "}
        </div>
        <button className="pay-btn"> Pay Now </button>
      </div>
    </div>
  );
};
export default Checkout;
