import "antd/dist/antd.css";
import React from "react";
import { RootContainer } from "./container/RootContainer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {(() => {
        return (
          <div style={{}}>
            <RootContainer />
          </div>
        );
      })()}
    </BrowserRouter>
  );
}

export default App;
