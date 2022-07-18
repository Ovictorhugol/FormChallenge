import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./utils/routes";
function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
