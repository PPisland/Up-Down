import { useContext } from "react";
import { AppContext } from "../App";

const WinGame = () => {
  const { CurrentRound, setCurrentRound } = useContext(AppContext);

  const onClickStart = () => {
    setCurrentRound(1);
  };

  return (
    <div className=" flex flex-col justify-normal items-center ">
      <div className="text-2xl mb-4 font-bold text-white animate-bounce">
        🎉🎉🎉 Conglaturations 🎉🎉🎉
      </div>
      <div className="text-xl mb-4 font-bold text-white">
        모든 라운드를 클리어하셨습니다!
      </div>
      <button
        onClick={onClickStart}
        className="border-[2px] border-white px-2 py-1 text-white rounded-lg mt-8 font-bold"
      >
        처음으로 돌아가기
      </button>
    </div>
  );
};

export default WinGame;
