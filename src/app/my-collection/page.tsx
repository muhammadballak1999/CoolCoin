"use client";
import { Statistics } from "@/app/components/global/statistics";
import Image from "next/image"
import Goku from '@/app/assets/goku.jpg';
import { SellSendCard } from "@/app/components/global/sellSendCard";
import { useState } from "react";

export default function MyCollection() {

  const [showCard, setShowCard] = useState(false);
  const array = [0, 1, 2, 3, 4, 5, 6, 8];

  return (
    <main className="flex flex-col items-center px-5 pt-5 pb-[25px] relative z-10">
      <Statistics />
      { !showCard ?
      <>
        <label htmlFor="search" className="mb-2 text-sm font-medium">Search Ranks & Characters</label>
        <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input type="search" id="search" className="block bg-transparent text-white w-full h-10 p-5 ps-10 text-sm placeholder-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-white" placeholder="Search" required />
        </div>
        <div className="w-full mt-5 p-2 overflow-auto rounded-md h-full">
          
        {
              array.map((i) => {
                return (
                  <div key={i} className="h-[70px] border p-1 my-2 flex items-center justify-between rounded-md" onClick={() => setShowCard(true)}>
                    <div className="flex items-center gap-2">
                      <Image src={Goku} alt="goku" className="rounded-md h-[60px] w-[70px]" />
                      <div className="flex flex-col justify-between items-start h-[60px]">
                        <span className="text-xs font-bold">Goku</span>
                        <span className="text-xs">Naruto</span>
                        <span className="text-xs">pph<span className="ml-2 font-bold">5800</span></span>
                      </div>
                    </div>
                    <span className="font-bold pr-3">{ i }</span>
                </div>
                )
              })
            }
        </div> </> : <SellSendCard sell={() => {}} send={() => {}} />
      }
      
    </main>
  );
}
