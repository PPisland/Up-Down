import { useEffect } from "react";
import { useState } from "react";
import { AppContext } from "../App";
import { useContext } from "react";

const GameBoard = () => {
  const { CurrentRound, setCurrentRound } = useContext(AppContext);
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * CurrentRound * 20)
  );
  const [choiceNum, setChoiceNum] = useState("");
  const [hint, setHint] = useState(`Up & Down Game !!`);
  const [hint2, setHint2] = useState(
    `0~${CurrentRound * 20} 사이의 숫자를 맞춰보세요!`
  );
  const [point, setPoint] = useState(5);
  const { NuPoint, setNuPoint } = useContext(AppContext);
  const { SaPoint, setSaPoint } = useContext(AppContext);

  useEffect(() => {
    console.log(`랜덤 숫자 ${randomNum}입니다.`);
  }, [randomNum]);

  useEffect(() => {
    console.log(`고른 숫자 ${choiceNum}입니다.`);
  }, [choiceNum]);
  useEffect(() => {
    console.log(`현재 점수는 ${point}입니다.`);
  }, [point]);
  useEffect(() => {
    let arrayS = JSON.parse(SaPoint);

    if (arrayS.length > 6) {
      setCurrentRound(1);
      setHint("라이프를 모두 소진하셨습니다 처음부터 다시 진행하세요");
      localStorage.setItem("point", 0);
      localStorage.setItem("score", JSON.stringify([]));
      setSaPoint(localStorage.getItem("score"));
      setNuPoint(localStorage.getItem("point"));
      setRandomNum(Math.floor(Math.random() * CurrentRound * 20));
      setChoiceNum("");
      setPoint(5);
    }
  }, [SaPoint, CurrentRound]);
  useEffect(() => {
    setHint2(`0~${CurrentRound * 20} 사이의 숫자를 맞춰보세요!`);
  }, [CurrentRound]);

  const onChangeChocie = (e) => {
    // console.log(e.target.value);
    setChoiceNum(e.target.value);
  };

  const onClickCheck = () => {
    let checkNum = parseInt(choiceNum);
    //1.문자입력

    if (isNaN(checkNum)) {
      setHint("숫자를 입력해주세요");
      return;
    }
    // 2. 0~100 이외의 숫자 예외처리
    if (0 > checkNum || checkNum >= CurrentRound * 20) {
      setHint(`0~${CurrentRound * 20} 사이의 숫자를 입력해주세요`);
      return;
    }
    //랜덤숫자와 유저가 선택한 숫자 비교
    if (randomNum === checkNum) {
      setHint("정답입니다! 랜덤값을 초기화합니다.");

      if (point > 0) {
        // 기존의 점수 불러옴
        let savePoint = localStorage.getItem("point");
        let saveScore = localStorage.getItem("score");

        let ScoreArray = JSON.parse(saveScore);
        ScoreArray.push(point);
        // console.log(typeof ScoreArray);
        // 현재 점수와 기존의 점수 합침
        // 저장
        localStorage.setItem("point", parseInt(savePoint) + point);
        localStorage.setItem("score", JSON.stringify(ScoreArray));
        setNuPoint(localStorage.getItem("point"));
        setSaPoint(localStorage.getItem("score"));
        // console.log(SaPoint);
        console.log(NuPoint);
        console.log(CurrentRound);
      }
      //초기화
      setRandomNum(Math.floor(Math.random() * CurrentRound * 20));
      setChoiceNum("");
      setPoint(5);
    } else if (randomNum > checkNum) {
      setHint(`정답은 ${checkNum}보다 높은 숫자입니다`);
      setPoint(point - 1);
    } else if (randomNum < checkNum) {
      setHint(`정답은 ${checkNum}보다 낮은 숫자입니다`);
      setPoint(point - 1);
    }
  };

  return (
    <div className="w-full grow flex flex-col justify-center items-center">
      <div className="mb-4 text-xl font-bold">{hint2}</div>
      <div className="mb-4 text-xl font-bold">{hint}</div>
      <div>
        <input
          className="border-2 rounded-md px-4 py-2 focus:outline-pink-300 shadow-lg"
          type="text"
          value={choiceNum}
          onChange={onChangeChocie}
        />
        <button
          className="px-4 py-2 ml-2 rounded-lg border-2 border-pink-300 text-pink-300 shadow-lg"
          onClick={onClickCheck}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default GameBoard;
