import React from "react";
import { Button } from "react-bootstrap";
import "./MyInterview.css";

const MyInterview = () => {
  return (
    <div className="myinterview-container-0">
      <div className="myinterview-container-1">Interview</div>
      <div className="myinterview-container-2">
        Answer some questions for increased visibility and to demonstrate
        expertise. The questions you choose to answer will appear along with
        your answers on your profile. <br />
        Answering more questions increases trust.
      </div>
      <div className="myinterview-container-input">
        <label>
          Describe the most common type of work you do for your clients.
        </label>
        <textarea
          name="Text2"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>
          What other musicians or music production professionals inspire you?
        </label>
        <textarea
          name="Text1"
          className="edit-profile-input "
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        {" "}
        <label>Tell us about your studio setup.</label>
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>What's your typical work process?</label>
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>What do you bring to a song?</label>
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>What's your strongest skill?</label>
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>What type of music do you usually work on?</label>
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>Can you share one music production tip?</label>
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>Which artist would you like to work with and why?</label>
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>How would you describe your style?</label>
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>
          What was your career path? How long have you been doing this?
        </label>
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>
          If you were on a desert island and could take just 5 pieces of gear,
          what would they be?
        </label>
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>
          What advice do you have for a customer looking to hire a provider like
          you?
        </label>
      </div>
      <textarea
        name="Text1"
        className="edit-profile-input"
        id="myinterview-input"
      />
      <div className="myinterview-container-input">
        <label>What questions do you ask prospective clients?</label>
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>What's the biggest misconception about what you do?</label>
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>
          What questions do customers most commonly ask you? What's your answer?
        </label>
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>What do you like most about your job?</label>
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>What's your 'promise' to your clients?</label>
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>Analog or digital and why?</label>
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>
          Is there anyone on SoundBetter you know and would recommend to your
          clients?
        </label>
      </div>
      <div className="myinterview-container-input">
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>What are you working on at the moment?</label>
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div className="myinterview-container-input">
        <label>
          Tell us about a project you worked on you are especially proud of and
          why. What was your role?
        </label>
      </div>
      <div className="myinterview-container-input">
        <textarea
          name="Text1"
          className="edit-profile-input"
          id="myinterview-input"
        />
      </div>
      <div
        className="myinterview-container-input"
        id="myinterview-container-btn"
      >
        <Button variant="success">Save changes</Button>
      </div>
    </div>
  );
};
export default MyInterview;
