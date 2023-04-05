import { useEffect } from "react";
import GameBoard from "./components/GameBoard";
import GameResult from "./components/GameResult";
import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext();

function App() {
  const [Nupoint, setNuPoint] = useState(0);
  useEffect(() => {
    let savedPoint = localStorage.getItem("point");
    if (!savedPoint) {
      localStorage.setItem("point", 0);
      setNuPoint(localStorage.getItem("point"));
    }
  }, []);
  // console.log({ Nupoint });

  // const [CurrentPoint, setCpoint] = useState(localStorage.getItem("point"));

  return (
    <AppContext.Provider value={{ Nupoint, setNuPoint }}>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <GameResult />
        <GameBoard />
      </div>
    </AppContext.Provider>
  );
}

export default App;
