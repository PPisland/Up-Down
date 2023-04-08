import { useEffect } from "react";
import GameBoard from "./components/GameBoard";
import GameResult from "./components/GameResult";
import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

function App() {
  const [NuPoint, setNuPoint] = useState(0);
  const [SaPoint, setSaPoint] = useState(JSON.stringify([]));
  useEffect(() => {
    let savedPoint = localStorage.getItem("point");
    if (!savedPoint) {
      localStorage.setItem("point", 0);
      setNuPoint(localStorage.getItem("point"));
    }
  }, []);
  useEffect(() => {
    let savedScore = localStorage.getItem("score");
    if (!savedScore) {
      localStorage.setItem("score", JSON.stringify([]));
      setSaPoint(localStorage.getItem("score"));
    }
  }, []);

  return (
    <AppContext.Provider value={{ NuPoint, setNuPoint, SaPoint, setSaPoint }}>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <GameResult />
        <GameBoard />
      </div>
    </AppContext.Provider>
  );
}

export default App;
