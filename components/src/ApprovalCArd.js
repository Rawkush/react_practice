import React from "react";

const ApprovalCArd = (props) => {
  return (
    <div className="ui card">
      <div className="content">
        {props.children}

      </div>
      <div className="extra content">
        <div className="ui two button">
          <div className="ui basic green button">approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCArd;
