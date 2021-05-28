import React from "react";
import ReactDOM from "react-dom";
import CommonDetail from "./CommonDetail";
import ListWithDifferentData from "./ListWithDifferentData";
import ApprovalCArd from "./ApprovalCArd";

const App = () => {
  return (
    <div className="ui container comments">
      <CommonDetail />
      <CommonDetail />
      <CommonDetail />
      <CommonDetail />
      <br />
      <h1>Comments with props</h1>
      <ListWithDifferentData author="sam" date="2018" />
      <ListWithDifferentData author="pam" date="2019" />
      <ListWithDifferentData author="dam" date="2020" />
      <ListWithDifferentData author="nam" date="2021" />
      <br />
      <h1>Component reuse</h1>
      <ApprovalCArd />

      <ApprovalCArd>
        <ListWithDifferentData author="sam" date="2018" />
      </ApprovalCArd>
    </div>
  );
};

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.querySelector("#root"));
