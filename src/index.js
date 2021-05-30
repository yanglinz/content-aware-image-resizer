import React from "react";
import ReactDOM from "react-dom";
import Resizer from "./resizer";

if (module.hot) {
  // Disable HMR in development
  module.hot.dispose();
}

function App() {
  return (
    <div>
      <h1>Content Aware Image Resizer</h1>
      <Resizer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
