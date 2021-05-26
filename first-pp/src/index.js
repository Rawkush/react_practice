// Import the react and reactDOM library

import React from "react";
import ReactDOM from "react-dom";

//create a react component with

const App = function () {
  
    const buttonText = 'my button';
    const text = {mytext: 'hello there '}
    return (
    <div>
      <label className="label" htmlFor="name">
        Name
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
        <br/>
      <label>
          {text.mytext}
      </label>
    </div>
  );
};

// take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

//for auto refresh while development
if (module.hot) {
  module.hot.accept();
}
