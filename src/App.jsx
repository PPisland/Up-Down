import { useEffect } from "react";
import GameBoard from "./components/GameBoard";
import GameResult from "./components/GameResult";
import { createContext } from "react";
import { useState } from "react";
import WinGame from "./components/WinGame";

export const AppContext = createContext();

function App() {
  const [NuPoint, setNuPoint] = useState(0);
  const [SaPoint, setSaPoint] = useState(JSON.stringify([]));
  // const [nextRound, setNextRound] = useState([]);
  const [CurrentRound, setCurrentRound] = useState(1);
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
  useEffect(() => {
    if (NuPoint >= 20) {
      setCurrentRound(CurrentRound + 1);
      localStorage.setItem("point", 0);
      localStorage.setItem("score", JSON.stringify([]));
      setSaPoint(localStorage.getItem("score"));
      setNuPoint(localStorage.getItem("point"));
    }
  }, [NuPoint]);

  return (
    <AppContext.Provider
      value={{
        NuPoint,
        setNuPoint,
        SaPoint,
        setSaPoint,
        CurrentRound,
        setCurrentRound,
      }}
    >
      <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 flex flex-col justify-center items-center min-h-screen font-display ">
        {CurrentRound === 6 ? (
          <WinGame />
        ) : (
          <>
            <GameResult />
            <GameBoard />
          </>
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
