import { React, useState } from "react";
import { CardData } from "../../Services/CardData";
import { AiFillPauseCircle } from "react-icons/ai";
import { GrCirclePlay } from "react-icons/gr";
import { Button } from "react-bootstrap";
import { AiFillCloseSquare } from "react-icons/ai";
import SoundBankLicenceCard from "../asesst/SoundBankLicenceCard";
import { Link } from "react-router-dom";
import Modal from "react-modal";

const SoundCard = () => {
  //checkout handler function to open checkout page

  // const CheckoutHandler = () => {};
  // use state for audio button
  const [audio, setaudio] = useState(true);

  const pause = () => {
    setaudio(false);
  };
  const play = () => {
    setaudio(true);
  };
  // use state for  licence button
  const [isModal, setIsModal] = useState(false);
  const mopen = () => {
    setIsModal(true);
  };
  const mclose = () => {
    setIsModal(false);
    setIsCheck(false);
  };
  // use state for check  button
  const [ischeck, setIsCheck] = useState(false);
  const checkBoxHandler = () => {
    setIsCheck(true);
  };
  return (
    <div>
      {CardData.map((data, i) => {
        return (
          <div className="SoundBankcard-main-container">
            <div className="SoundBankcard-container">
              {/* Audio button start */}
              <div className=" audio-des">
                {audio ? (
                  <div className="audio-btn" onClick={pause}>
                    <GrCirclePlay />
                  </div>
                ) : (
                  <div className="audio-btn-1" onClick={play}>
                    <AiFillPauseCircle />
                  </div>
                )}
              </div>
              {/* Audio button end */}

              {/* audio discription and title start */}
              <div className="audio-description">
                <div className="audio-heading">{data.title}</div>
                <div className="audio-discribe">{data.des}</div>
              </div>
              {/* audio discription and title end */}

              {/* Licence Button */}
              <div className="audio-btn-license">
                <Button
                  variant="outline-secondary"
                  className="license-btn"
                  onClick={mopen}
                >
                  Licence
                </Button>{" "}
                <Modal isOpen={isModal}>
                  <div className="licence-heading-0">
                    Name
                    {ischeck ? (
                      <Link to="/Soundbank/checkout">
                        <Button variant="outline-primary">Checkout:</Button>
                      </Link>
                    ) : null}
                  </div>
                  <div className="licence-heading-1">
                    <h2 className="licence-heading-text">
                      View Licenses / View FAQ{" "}
                    </h2>
                    <Button
                      variant="outline-secondary"
                      onClick={mclose}
                      className="modal-close-btn"
                    >
                      <AiFillCloseSquare />
                    </Button>
                  </div>
                  {/* Licence button end */}

                  <div className="licence-card-container">
                    {" "}
                    <div className="licence-card">
                      <div className="licence-card-data"></div>
                      <div className="licence-card-checkbox">
                        <input
                          type="checkbox"
                          style={{ height: "30px", width: "50px" }}
                          onClick={checkBoxHandler}
                        ></input>
                      </div>
                    </div>
                    <div className="licence-card">
                      <div className="licence-card-data"></div>
                      <div className="licence-card-checkbox">
                        <input
                          type="checkbox"
                          style={{ height: "30px", width: "50px" }}
                          onClick={checkBoxHandler}
                        ></input>
                      </div>
                    </div>
                    <div className="licence-card">
                      <div className="licence-card-data"></div>
                      <div className="licence-card-checkbox">
                        <input
                          type="checkbox"
                          style={{ height: "30px", width: "50px" }}
                          onClick={checkBoxHandler}
                        ></input>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SoundCard;

// const [checkoutBtn, setcheckoutBtn] = useState(false);
// const CheckoutCardHandler = () => {
//   setcheckoutBtn(true);
// };

// onClick = { CheckoutCardHandler };

// {checkoutBtn ? (
//     <Button
//       variant="outline-primary"
//       className="checkout-btn"
//     >
//       Checkout
//     </Button>
//   ) : null}
