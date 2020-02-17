import React from "react";
import LoginPage from "./pages/login";
import Background from "./bg.png";
import "./App.css";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${Background})` }}>
      <div style={{ paddingTop: "10vh" }}>
        <LoginPage />
      </div>
    </div>
  );
}

export default App;
