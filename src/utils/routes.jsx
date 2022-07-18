import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/containers/Header/Header";
import { Container } from "../App.styled";
import Tabs from "../components/Tabs/Tabs";
import Success from "../components/containers/Form/Success/Success";
import Error404 from "../components/Pages/404/Error404";
import Error401 from "../components/Pages/401/Error401";
export default function MainRoutes() {
  const [currentTab, setCurrentTab] = useState(1);
  const [socialContainer, setSocialContainer] = useState(false);
  const [certificateContainer, setCertificateContainer] = useState(false);
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/basic" replace />} />
      <Route
        path="/basic"
        element={
          <>
            <Header currentTab={1} />
            <Container>
              <Tabs
                activeTab={1}
                setActiveTab={setCurrentTab}
                socialContainer={socialContainer}
                certificateContainer={certificateContainer}
                setSocialContainer={setSocialContainer}
              />
            </Container>
          </>
        }
      />
      <Route
        path="/social"
        element={
          socialContainer ? (
            <>
              <Header currentTab={2} />
              <Container>
                <Tabs
                  activeTab={2}
                  setActiveTab={setCurrentTab}
                  socialContainer={socialContainer}
                  certificateContainer={certificateContainer}
                  setCertificateContainer={setCertificateContainer}
                />
              </Container>
            </>
          ) : (
            <Error401 />
          )
        }
      />
      <Route
        path="/certificates"
        element={
          certificateContainer ? (
            <>
              <Header currentTab={3} />
              <Container>
                <Tabs
                  activeTab={3}
                  setActiveTab={setCurrentTab}
                  socialContainer={socialContainer}
                />
              </Container>
            </>
          ) : (
            <Error401 />
          )
        }
      />
      <Route
        path="/sucess"
        element={
          <>
            <Header currentTab={4} />
            <Container>
              <Success
                setSocialContainer={setSocialContainer}
                setCertificateContainer={setCertificateContainer}
              />
            </Container>
          </>
        }
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
