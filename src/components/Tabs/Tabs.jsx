import React, { useEffect } from "react";
import {
  ContainerTab,
  ContainerTitle,
  TabNav,
  TabNavOptions,
  TabContant,
} from "./Tabs.Styled";
import Title from "../Title/Title";
import Basic from "../containers/Basic/Basic";
import Social from "../containers/Form/Social/Social";

import Certificates from "../containers/Certificates/Certificates";
import { useNavigate } from "react-router-dom";

function Tabs({ activeTab, setActiveTab }) {
  const navigate = useNavigate();
  useEffect(() => {
    setContant();
  }, []);
  const handleSetFirstTab = () => {
    navigate("/basic");
    setActiveTab(1);
  };

  const handleSetSecondTab = () => {
    navigate("/social");
    setActiveTab(2);
  };

  const handleSetThirdTab = () => {
    navigate("/certificates");
    setActiveTab(3);
  };

  const setContant = () => {
    if (activeTab === 1) {
      return (
        <>
          <Basic setActiveTab={setActiveTab} activeTab={activeTab} />
        </>
      );
    } else if (activeTab === 2) {
      return (
        <>
          <Social />
        </>
      );
    } else if (activeTab === 3) {
      return (
        <>

          <Certificates />

        </>
      );
    }
  };
  return (
    <ContainerTab>
      <ContainerTitle>
        <Title type="h2" label="Team Sign up"></Title>
      </ContainerTitle>
      <TabNav>
        <TabNavOptions
          className={activeTab === 1 ? "active" : ""}
          onClick={handleSetFirstTab}
        >
          Basic
        </TabNavOptions>
        <TabNavOptions
          className={activeTab === 2 ? "active" : ""}
          onClick={handleSetSecondTab}
        >
          Social
        </TabNavOptions>
        <TabNavOptions
          className={activeTab === 3 ? "active" : ""}
          onClick={handleSetThirdTab}
        >
          Certificates
        </TabNavOptions>
      </TabNav>
      <TabContant>{setContant()}</TabContant>
    </ContainerTab>
  );
}

export default Tabs;
