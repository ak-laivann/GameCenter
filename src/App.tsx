import React from "react";
import { RootContainer } from "./container/RootContainer";
import { BrowserRouter } from "react-router-dom";
import backgroundImage from "./assets/background.webp";

function App() {
  return (
    <BrowserRouter>
      {(() => {
        return (
          <div
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <RootContainer />
          </div>
        );
      })()}
    </BrowserRouter>
  );
}

export default App;
