import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../App";

const GameResult = () => {
  // const { CurrenPoint } = useContext(AppContext) | 0;
  // const point = localStorage.getItem("point");
  const { NuPoint, setNuPoint } = useContext(AppContext);
  const { SaPoint, setSaPoint } = useContext(AppContext);
  // console.log(SaPoint);
  let array = JSON.parse(SaPoint);

  return (
    <div className=" bg-pink-300 w-full grow flex flex-col justify-end items-center text-white pb-8 shadow-pink-300 shadow-lg">
      <div className="text-8xl font-black">Up & Down</div>
      <div className="text-2xl">현재점수 : {NuPoint}</div>
      <ul className="grid grid-cols-10   mt-4">
        {array.map((v, i) => {
          return (
            <li className="border-[1px] border-white px-2 py-1">
              {i + 1}회차 {v}점
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GameResult;
