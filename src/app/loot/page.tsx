"use client";
import { Statistics } from "@/app/components/global/statistics";
import { useState } from "react";
import { SellSendCard } from "@/app/components/global/sellSendCard";
import { LootListItem } from "@/app/components/loot/lootListItem";

export default function Loot() {

  const [showCard, setShowCard] = useState(false);
  const array = [0, 1, 2, 3, 4, 5, 6, 8];

  return (
    <main className="flex flex-col items-center px-5 pt-5 pb-[25px] relative z-10 h-fill">
      <Statistics />
      { !showCard ?
      <>
      <div className="w-full mt-3 p-2 overflow-auto rounded-md h-fill">
        
      {
            array.map((i) => {
              return (
                <LootListItem key={i} i={i} />
              )
            })
          }
        </div> </> : <SellSendCard sell={() => {}} send={() => {}} />
      }
    </main>
  );
}
