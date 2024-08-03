import React, { useState } from "react";
import Image from "next/image"
import Goku from '@/app/assets/goku.jpg';


export const LootListItem = (props: { i: React.Key | null | undefined; }) => {

  const claimClasses = 'bg-green-500 dark:bg-green-500 dark:hover:bg-green-400 dark:focus:ring-green-400 dark:border-green-400';
  const unclaimClasses = 'bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'
  const [claimed, setClaimed] = useState(false);

  return (
    <div key={props.i} className="h-[70px] border p-1 my-2 flex items-center justify-between rounded-md">
    <div className="flex items-center gap-2">
      <Image src={Goku} alt="goku" className="rounded-md h-[60px] w-[70px]" />
      <div className="flex flex-col justify-between items-start h-[60px]">
        <span className="text-xs font-bold">Goku</span>
        <span className="text-xs">Naruto</span>
        <span className="text-xs">pph<span className="ml-2 font-bold">5800</span></span>
      </div>
    </div>
    {
      (props.i === 0 || props.i === 2) && (
        <button type="button" className="h-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gray-400 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-xs p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Claimed By Lazros</button>
      )
    }
    {
      (props.i == 3) && (
        <button type="button" className={`h-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-medium rounded-3xl text-xs p-2 ${claimed ? claimClasses : unclaimClasses}`} onClick={() => setClaimed(!claimed)}>{ !claimed ? `Claim - ${props.i}s` : 'Claimed'}</button>
      )
    } 

    {
      (props.i !== 0 && props.i !== 2 && props.i !== 3) && (
        <button type="button" className="h-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-red-500 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-3xl text-xs p-2 dark:bg-red-500 dark:hover:bg-red-400 dark:focus:ring-red-400 dark:border-red-400">Unclaimed</button>

      )
    }
    <span className="font-bold pr-3">{ props.i }</span>
  </div>
  )
}