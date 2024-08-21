"use client"

import Image from "next/image";
import EmojiSmall from '../../assets/emoji-small.svg';
import EmojiMedium from '../../assets/emoji-medium.svg';
import { useMainStore } from "@/stores";
import { useEffect } from "react";

export const Statistics = () => {

  const {
    getGameStatus,
    nextRollTime,
    rollsLeft,
    profitPerHour,
    totalCoins
  } = useMainStore();


  useEffect(() => {
    const getGameStatus = async () => {
      await getGameStatus();
    }

    getGameStatus();
  }, [])

    return (
      <div className="flex flex-col gap-2 w-full">
        <div className="flex gap-2 flex-nowrap items-start w-full">
        <div className="flex flex-col items-center rounded-md p-2 w-full">
          <span className="text-[9px] font-semibold">next claim</span>
          <span className="font-bold text-sm">{ nextRollTime }</span>
        </div>
        <div className="flex flex-col items-center rounded-md p-2 w-full">
          <span className="text-[9px] font-semibold">Rolls Left</span>
          <span className="font-bold text-sm">{ rollsLeft }</span>
        </div>
        <div className="flex flex-col items-center rounded-md p-2 w-full relative">
          <span className="text-[9px] font-semibold">Profit Per Hour</span>
            <Image src={EmojiSmall} alt="small emoji" className="absolute left-5 top-7" />
          <span className="font-bold text-sm">
            { profitPerHour }
          </span>
        </div>
        </div>
        <div className="flex flex-col items-center rounded-md p-3 w-full relative">
          <Image src={EmojiMedium} alt="small emoji" className="absolute left-[20%]" />
          <span className="font-bold text-3xl">{ totalCoins }</span>
        </div>
      </div>
    )
} 
