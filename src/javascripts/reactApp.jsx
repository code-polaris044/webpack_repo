import ReactDOM from "react-dom";
import * as React from "react";
import "./Alert.tsx";
import Alert from "./Alert.tsx";

const App = (props) => {
  return (
    <div style={{ color: "green" }}>
      Hello, React App!
      <Alert message="Success! ts" />
    </div>
  );
};

const reactRoot = document.getElementById("react-root");

if (reactRoot) {
  ReactDOM.render(<App />, reactRoot);
} else {
  console.log("No root element found");
}
