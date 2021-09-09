import React from "react";
import Footer from "../../Footer/Footer";
import SpDashboardNav from "../SpDashboardNav";
import "./MemberBenefits.css";
import SpCard from "./SpCard/SpCard";

const MemberBenefits = () => {
  return (
    <div>
      <SpDashboardNav />
      <div className="member-container">
        {" "}
        <div className="member-heading">Member Benefits</div>
        <div className="member-heading-0">
          Discounts on the industry's best music creation tools - only for
          Udukku members
        </div>
        <div className="member-heading-1">
          <SpCard />
        </div>
        <div className="member-heading-2">
          The offers displayed on this Member Benefits Page are offered to
          udukku users by third-party partners.udukku is not responsible for the
          offers or for the products or services offered. For any product or
          service support relating to these offers or offer redemption support,
          please contact the responsible third-party partner directly. Offers
          may expire or be removed from this page at any time. While supplies
          last.
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MemberBenefits;
