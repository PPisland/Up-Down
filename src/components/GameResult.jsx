import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../App";

const GameResult = () => {
  // const { CurrenPoint } = useContext(AppContext) | 0;
  // const point = localStorage.getItem("point");
  const { NuPoint, setNuPoint } = useContext(AppContext);
  const { SaPoint, setSaPoint } = useContext(AppContext);
  const { CurrentRound, setCurrenRound } = useContext(AppContext);
  // console.log(SaPoint);
  let array = JSON.parse(SaPoint);
  console.log(SaPoint);
  const colors = [
    "bg-orange-300",
    "bg-yellow-300",
    "bg-green-300",
    "bg-teal-300",
    "bg-sky-300",
    "bg-indigo-300",
    "bg-purple-300",
    "bg-pink-300",
  ];
  const shadows = [
    "shadow-orange-300",
    "shadow-yellow-300",
    "shadow-green-300",
    "shadow-teal-300",
    "shadow-sky-300",
    "shadow-indigo-300",
    "shadow-purple-300",
    "shadow-pink-300",
  ];

  return (
    <div
      className={` relative ${
        colors[CurrentRound - 1]
      } w-full grow flex flex-col justify-end items-center text-white pb-8 ${
        shadows[CurrentRound - 1]
      } shadow-lg`}
    >
      <div className="absolute top-2 left-4 text-2xl font-semibold">
        {CurrentRound}라운드
      </div>
      <div className="absolute top-5 right-4 text-sm font-Ngothic">
        <div className="mb-4">게임 설명</div>
        <div>1. 총 5라운드로 구성되어있습니다.</div>
        <div>2. 각 라운드당 20점을 획득하면 다음 라운드로 진행됩니다.</div>
        <div>
          3. 라이프는 한 라운드당 5개가 지급되며 실패시 1라운드로 돌아갑니다.
        </div>
        <div>4. 각 라운드마다 20씩 숫자의 범위가 늘어납니다.</div>
      </div>
      <div className="text-8xl font-black text-shadow mb-8 animate-bounce">
        Up & Down
      </div>
      <div className="text-2xl">현재점수 : {NuPoint}</div>
      <ul className="absolute grid grid-cols-10  top-0  mt-4">
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
