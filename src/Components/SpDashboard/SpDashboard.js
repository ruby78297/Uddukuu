import React from "react";
import DasboardNav from "../SpDashboard/SpDashboardNav";
import "./SpDashboard.css";
import { BsBell } from "react-icons/bs";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const SpDashboard = () => {
  return (
    <div>
      <div>
        <DasboardNav />
      </div>

      <div>
        <ul className="dashboard-container">
          <li className="dash-container-li">
            <Link to="/spdsh">Dashboard</Link>
          </li>
          <li className="dash-container-li">Jobs</li>
          <li className="dash-container-li">
            <Link to="/payment">Payment Requests</Link>
          </li>
          <li className="dash-container-li">Change Password</li>
          <li className="dash-container-li">Upgrade Options</li>
        </ul>
      </div>
      <div className="dashboard-container-0">
        <div className="dashboard-container-1">Dashboard</div>
        <ul className="dashboard-cont-list">
          <li className="dashboard-contain-li-0">
            <span>
              {" "}
              Welcome to your dashboard. Here you’ll find personal
              notifications, general announcements and news, as well as your
              performance analytics and tips on how you can gain more visibility
              and work.
            </span>
          </li>
          <li className="dashboard-contain-li-1 dashboard-contain-li">
            {" "}
            <div className="dash-icon">
              {" "}
              <BsBell />
            </div>
            Introducing Udukku Tracks - License pre-made tracks to artists. Earn
            money when you sleep.
          </li>
          <li className="dashboard-contain-li-2 dashboard-contain-li">
            {" "}
            <div className="dash-icon">
              {" "}
              <BsBell />
            </div>
            Did you know you can message with clients directly from your inbox?
            Yup, really. Once a job has been activated you can write the client
            by replying to their message directly from your email. Look for this
            message at the top of 'new message' emails: "Respond to client name
            by replying directly to this email". Note - This only works for jobs
            that have been funded and activated. You can't send proposals to new
            jobs, or send files to clients directly from your email. To do
            either of these things click on the button in the email, and go to
            the workroom.
          </li>
          <li className="dashboard-contain-li-3 dashboard-contain-li">
            {" "}
            <div className="dash-icon">
              {" "}
              <BsBell />
            </div>
            We recently removed a provider from Udukku for accepting payment
            off-platform. Another provider was put on probation for not replying
            to a client for over a week midst-project. We are committed to a
            marketplace with a high level of integrity and professionalism, and
            we regularly remove providers whose actions don’t reflect these
            values.
          </li>
          <li className="dashboard-contain-li-4 dashboard-contain-li">
            {" "}
            <div className="dash-icon">
              <BsBell />
            </div>
            Have you seen your ‘Jobs Management’ page? There you can get an
            overview of your invitations, proposals and jobs, see which state
            each is in, add labels to jobs and more. Check it out and let us
            know what you think.
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};
export default SpDashboard;
