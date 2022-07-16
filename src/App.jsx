import React, { useState } from "react";
import Header from "./components/Containers/Header/Header";
import Social from "./components/Containers/Form/Social/Social";
import { BrowserRouter as Router } from "react-router-dom";
import Tabs from "./components/Tabs/Tabs";
import { Container } from "./App.styled";
import Routes from "./utils/routes";
function App() {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
