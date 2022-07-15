import React, { useState } from "react";
import Header from "./components/Containers/Header/Header";
import Social from "./components/Containers/Form/Social/Social";
import { Routes, Route } from "react-router-dom";
import Tabs from "./components/Tabs/Tabs";
function App() {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <>
      <Routes>
        <Route path="/" element={<Tabs activeTab={1} />} />
        <Route path="header" element={<Header currentTab={currentTab} />} />
      </Routes>
    </>
  );
}

export default App;
