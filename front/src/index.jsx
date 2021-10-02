import React from "react";
import ReactDOM from "react-dom";

// ==========ここから追加する==========
import CalendarBoard from "./components/CalendarBoard";
// ==========ここまで追加する==========

const App = () => (
  // ==========ここから追加する==========
  <div>
    <CalendarBoard />
  </div>
  // ==========ここまで追加する==========
);

ReactDOM.render(<App />, document.getElementById("root"));
