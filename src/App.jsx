import React, {useState} from "react";
import Header from "./components/Containers/Header/Header"
import Tabs from "./components/Tabs/Tabs";


function App() {
  const [currentTab, setCurrentTab] = useState (1)
  
  return (
    <>
      <Header currentTab={currentTab}/>
      <Tabs activeTab={currentTab} setActiveTab={setCurrentTab} />
    </>
  )
}

export default App;
