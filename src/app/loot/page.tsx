"use client";
import { Statistics } from "@/app/components/global/statistics";
import Image from "next/image"
import Goku from '@/app/assets/goku.jpg';

export default function Loot() {

  const array = [0, 1, 2, 3, 4, 5, 6, 8];

  return (
    <main className="h-[100vh] flex flex-col items-center px-5 pt-5 pb-24  relative border">
      <Statistics />
      <div className="w-full border mt-3 pb-10 pt-2 px-2 overflow-auto rounded-md h-[100%]">
        
      {
            array.map((i) => {
              return (
                <div key={i} className="h-[70px] border p-1 my-2 flex items-center justify-between rounded-md">
                  <div className="flex items-center gap-2">
                    <Image src={Goku} alt="goku" className="rounded-md h-[60px] w-[70px]" />
                    <div className="flex flex-col justify-between items-start h-[60px]">
                      <span className="text-xs font-bold">Goku</span>
                      <span className="text-xs">Naruto</span>
                      <span className="text-xs">pph<span className="ml-2 font-bold">5800</span></span>
                    </div>
                  </div>
                  {
                    (i === 0 || i === 2) && (
                      <button type="button" className="h-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gray-400 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-xs p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Claimed By Lazros</button>
                    )
                  }
                  {
                    (i == 3) && (
                      <button type="button" className="h-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-red-500 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-3xl text-xs p-2 dark:bg-red-500 dark:hover:bg-red-400 dark:focus:ring-red-400 dark:border-red-400">Unclaimed</button>
                    )
                  } 

                  {
                    (i !== 0 && i !== 2 && i !== 3) && (
                      <button type="button" className="h-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-xs p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Claim - {i}s</button>
                    )
                  }
                  <span className="font-bold pr-3">{ i }</span>
              </div>
              )
            })
          }
      </div>
    </main>
  );
}
