// Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

// Create a React component (functional one)
const App = function() {
  const buttonText = "Click Me!";
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};

// Show React component on screen
ReactDOM.render(<App />, document.querySelector("#root"));
