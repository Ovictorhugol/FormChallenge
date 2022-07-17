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
import Success from "../Containers/Form/Success/Success"
function Tabs({ activeTab, setActiveTab }) {
  useEffect(() => {
    setContant();
  }, []);
  const handleSetFirstTab = () => setActiveTab(1);

  const handleSetSecondTab = () => setActiveTab(2);

  const handleSetThirdTab = () => setActiveTab(3);

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
          <Success />
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
