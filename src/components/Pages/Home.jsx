import React, { useState } from "react";
import Header from "../Containers/Header/Header";
import Tabs from "../Tabs/Tabs";
import Title from "../Title/Title";
import { Container, TitleContainer } from "./Home.styled";
function Home() {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <div>
      <Header currentTab={currentTab} />
      <Container>
        <TitleContainer>
          <Title type="h2" label="Team Sign Up" />
        </TitleContainer>
        <Tabs activeTab={currentTab} setActiveTab={setCurrentTab} />
      </Container>
    </div>
  );
}

export default Home;
