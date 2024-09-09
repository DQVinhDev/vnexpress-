import React from "react";

function Bongda({ imgTeam1, team1, team2, imgTeam2, time }) {
  return (
    <div className="inline-block border-gray-200 border  w-[140px] h-[70px] pr-11 pt-2 pb-2 pl-2 hover:bg-gray-100 cursor-pointer text-xs ">
      <div className="flex justify-around text-gray-400 ">
        <div>{time}</div>
      </div>
      <div className="pt-1">
        <div className="flex ">
          <img className="mt-2  w-[12px] h-[8px]" src={imgTeam1} />
          <span className=" pl-3">{team1}</span>
          <span></span>
        </div>
        <div className="flex ">
          <img className="mt-2 w-[12px] h-[8px]" src={imgTeam2} />
          <span className="pl-3">{team2}</span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Bongda;
