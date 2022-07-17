import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/containers/Header/Header";
import { Container } from "../App.styled";
import Tabs from "../components/Tabs/Tabs";
import Basic from "../components/containers/Basic/Basic";
export default function MainRoutes() {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/basic" replace />} />
      <Route
        path="/basic"
        element={
          <>
            <Header currentTab={1} />
            <Container>
              <Tabs activeTab={1} setActiveTab={setCurrentTab} />
            </Container>
          </>
        }
      />
      <Route
        path="/social"
        element={
          <>
            <Header currentTab={2} />
            <Container>
              <Tabs activeTab={2} setActiveTab={setCurrentTab} />
            </Container>
          </>
        }
      />
      <Route
        path="/certificates"
        element={
          <>
            <Header currentTab={3} />
            <Container>
              <Tabs activeTab={3} setActiveTab={setCurrentTab} />
            </Container>
          </>
        }
      />
    </Routes>
  );
}
