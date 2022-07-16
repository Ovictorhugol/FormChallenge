import React, { useState } from "react";
import Header from "./components/Containers/Header/Header";
import Social from "./components/Containers/Form/Social/Social";
import { Routes, Route } from "react-router-dom";
import Tabs from "./components/Tabs/Tabs";
import { Container } from "./App.styled";
function App() {
  const [currentTab, setCurrentTab] = useState(1);

  return (
    <>
      <Header currentTab={currentTab} />
      <Routes>
        <Route
          path="/"
          element={
            <Container>
              <Tabs activeTab={currentTab} setActiveTab={setCurrentTab} />
            </Container>
          }
        />
        <Route
          path="/Social"
          element={<Tabs activeTab={2} setActiveTab={setCurrentTab} />}
        />
      </Routes>
    </>
  );
}

export default App;
