import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App: React.FC = () => {
  const [showInsallMessage, setShowInstallMessage] = useState(false);

  useEffect(() => {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };
    // Detects if device is in standalone mode
    const isInStandaloneMode = () =>
      "standalone" in window.navigator && (window.navigator as any).standalone;

    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      setShowInstallMessage(true);
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {showInsallMessage && <h3>You can install it by clicking ...</h3>}
    </div>
  );
};

export default App;
