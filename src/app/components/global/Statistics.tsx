"use client"

import Image from "next/image";
import EmojiSmall from '../../assets/emoji-small.svg';
import EmojiMedium from '../../assets/emoji-medium.svg';
import { useMainStore } from "@/stores";
import { useEffect, useState } from "react";
import { CountdownTimer } from "./Countdown";

export const Statistics = () => {

  const {
    getGameStatus,
    nextClaimTimeSecond,
    rollsLeft,
    profitPerHour,
    totalCoins,
  } = useMainStore();


  useEffect(() => {
    const getGameStatistics = async () => {
      await getGameStatus();
    }

    getGameStatistics();
  }, []);

  const formatNumber = (profit: number) => {
    if(typeof profit === 'number') {
      let formatter = Intl.NumberFormat('en', { notation: 'compact' });
      return formatter.format(profit);
    }

    return 0;
  }

    return (
          <div className="absolute z-10 flex flex-col pt-2 gap-2 w-full">
            <div className="flex gap-2 flex-nowrap items-start w-full">
            <div className="flex flex-col items-center rounded-md p-2 w-full">
              <span className="text-[9px] font-semibold">Next Claim</span>
                { nextClaimTimeSecond ? <CountdownTimer seconds={nextClaimTimeSecond} onFinish={() => {}} /> : <><span className="font-bold text-sm">Now</span></> }
            </div>
            <div className="flex flex-col items-center rounded-md p-2 w-full">
              <span className="text-[9px] font-semibold">Rolls Left</span>
              <span className="font-bold text-sm">{ rollsLeft }</span>
            </div>
            <div className="flex flex-col items-center rounded-md p-2 w-full relative">
              <span className="text-[9px] font-semibold">Profit Per Hour</span>
                <Image src={EmojiSmall} alt="small emoji" className="absolute left-5 top-7" />
              <span className="font-bold text-sm">
                { formatNumber(profitPerHour) }
              </span>
            </div>
            </div>
            <div className="flex flex-col items-center rounded-md p-3 w-full relative">
              <Image src={EmojiMedium} alt="small emoji" className="absolute left-[20%]" />
              <span className="font-bold text-3xl">{ totalCoins || 0 }</span>
            </div>
          </div>
    )
} 
