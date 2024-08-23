"use client";

import { LootListItem } from "../components/loot/LootListItem";

export default function Loot() {

  const array = [0, 1, 2, 3, 4, 5, 6, 8];

  return (
    <main className="flex flex-col items-center px-5 pt-[125px] relative z-10 h-fill">
      <div className="w-full mt-3 p-2 overflow-auto rounded-md h-fill">
        {
          array.map((i) => {
            return (
              <LootListItem key={i} i={i} />
            )
          })
        }
      </div>
    </main>
  );
}
