"use client";
import { useState } from "react";
import { SellSendCard } from "../components/global/SellSendCard";
import { LootListItem } from "../components/loot/LootListItem";

export default function Loot() {

  const [showCard, setShowCard] = useState(false);
  const array = [0, 1, 2, 3, 4, 5, 6, 8];

  return (
    <main className="flex flex-col items-center px-5 pt-[125px] pb-[25px] relative z-10 h-fill">
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
