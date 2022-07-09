import React, { useEffect } from "react";
import { ContainerTab, TabNav, TabNavOptions, TabContant } from "./Tabs.Styled";

function Tabs({activeTab, setActiveTab}) {
  useEffect(() =>{
    setContant()
  }, [])
  const handleSetFirstTab = () => setActiveTab(1);

  const handleSetSecondTab = () => setActiveTab(2);

  const handleSetThirdTab = () => setActiveTab(3);

  const setContant = () => {
    if (activeTab === 1) {
      return <div>first Tab</div>;
    } else if (activeTab === 2) {
      return <div>second Tab</div>;
    } else if (activeTab === 3) {
      return <div>third Tab</div>;
    }
  };
  return (
    <ContainerTab>
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
