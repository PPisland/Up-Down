import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../App";

const GameResult = () => {
  // const { CurrenPoint } = useContext(AppContext) | 0;
  // const point = localStorage.getItem("point");
  const { Nupoint, setNuPoint } = useContext(AppContext);
  return (
    <div className="bg-pink-300 w-full grow flex flex-col justify-end items-center text-white pb-8 shadow-pink-300 shadow-lg">
      <div className="text-8xl font-black">Up & Down</div>
      <div className="text-2xl">현재점수 : {Nupoint}</div>
    </div>
  );
};

export default GameResult;
