import React from "react";
import Body from "./components/Body"


function App() {
  return (
    <div
      id="pcoded"
      class="pcoded iscollapsed"
      nav-type="st2"
      theme-layout="vertical"
      vertical-placement="left"
      vertical-layout="wide"
      pcoded-device-type="desktop"
      vertical-nav-type="offcanvas"
      vertical-effect="shrink"
      vnavigation-view="view1"
      fream-type="theme1"
      layout-type="light"
    >
   <Body/>
    </div>
  );
}

export default App;
