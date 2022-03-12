import "./App.css";
import soccer from "./soccer.jpg";
import { useState, useEffect } from "react";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <img
        src={soccer}
        className="App-logo"
        alt="Hi"
        style={{ marginTop: `${scrollPosition * 1.9}px` }}
      />
    </div>
  );
}

export default App;
