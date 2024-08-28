import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image"
import Goku from '../../assets/goku.jpg';
import { TimedClaimButton } from "./TimedClaimButton";
import { ILoot } from "@/types";
import { useMainStore } from "@/stores";


// eslint-disable-next-line react/display-name
export const LootListItem = React.memo((props: { loot: ILoot, i: number; }) => {

  const { playerId, updateTimedClaim, claim, lootCharacters, getGameStatus } = useMainStore();


  const claimCharacter = async(index: number) => {
    await claim(lootCharacters[index].character.id);
    updateTimedClaim(index);
    getGameStatus();
  }

  return (
    <div key={props.i} className="h-[70px] border p-1 my-2 flex items-center justify-between rounded-md">
    <div className="flex items-center gap-2">
      <Image src={Goku} alt="goku" className="rounded-md h-[60px] w-[70px]" />
      <div className="flex flex-col justify-between items-start h-[60px] min-w-[100px] max-w-[100px]">
        <span className="text-xs font-bold text-nowrap text-ellipsis overflow-hidden max-w-[100px]">{ props.loot.character.title }</span>
        <span className="text-xs text-nowrap text-ellipsis overflow-hidden max-w-[100px]">{ props.loot.character.name }</span>
        <span className="text-xs text-nowrap text-ellipsis overflow-hidden max-w-[100px]">pph<span className="ml-2 font-bold">{ props.loot.character.profit_per_hour }</span></span>
      </div>
    </div>
    {
      (props.loot.claimed_by_player && props.loot.claimed_by_player !== playerId) && (
        <button type="button" className="h-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gray-400 hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-xs p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" disabled>{playerId}, {props.loot.claimed_by_player}</button>
      )
    }
    {
      (props.loot.claimed_by_player && props.loot.claimed_by_player === playerId) && (
        <button type="button" className={'h-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 font-medium rounded-3xl text-xs p-2 bg-green-500 dark:bg-green-500 dark:hover:bg-green-400 dark:focus:ring-green-400 dark:border-green-400'} disabled>Claimed</button>
      )
    }
    {
      (props.loot.time_left_seconds && !props.loot.claimed_by_player) 
      ?
      <div className="mr-4">
        <TimedClaimButton  seconds={props.loot.time_left_seconds} onClick={claimCharacter} index={props.i} />
      </div>
      :
      <></>
    } 

    {
      (props.loot.result === 'unclaimed') && (
        <button type="button" className="h-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-red-500 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-3xl text-xs p-2 dark:bg-red-500 dark:hover:bg-red-400 dark:focus:ring-red-400 dark:border-red-400">Unclaimed</button>

      )
    }
    <span className="font-bold mr-3">{ props.i }</span>
  </div>
  )
})
