import React, { useState } from 'react';
import Image from 'next/image'
import CharacterNameBackground from '../../assets/character-name-background.png';
import { CountdownTimer } from './Countdown';
import { ICharacter } from '@/types';
import { useMainStore } from '@/stores';

interface IProps {
  character: ICharacter;
  rollAgain: () => void;
  claim: () => void;
}
export const ClaimCard = (props: IProps) => {
  const { isLoading, rollsLeft, nextClaimTimeSecond } = useMainStore();

  const [claimDisabled, setClaimDisabled] = useState(false);

    return (
      <div className="flex w-fit rounded-md mt-4 h-full">
        <div className="flex flex-col w-full items-center rounded-md">
          <div className='h-fit w-fit flex flex-col items-center justify-between bg-black'>
            <div className='px-2 pt-3 w-full'>
                <div className='bg-[#F0F2E1] h-10 flex items-center justify-between rounded-md w-full'>
                    <div className='flex flex-col items-center p-1'>
                    <span className='text-[11px] font-bold px-4 text-black'>PPH</span>
                    <span className='text-[11px] font-bold px-1 text-black'>{ props.character?.profit_per_hour }</span>
                    </div>
                    <span className='text-[11px] font-bold px-1 text-black'>{ props.character?.title }</span>
                    <span className='text-[11px] font-bold px-4 text-black'>{ props.character?.rank }</span>
                </div>
            </div>
            <div className='w-full px-2 pt-2'>
                <div className='flex items-center justify-center h-fit w-full bg-[#F0F2E1] p-3 rounded-sm'>
                    <img src={props.character?.image_url} alt='character to claim' className='h-[200px] w-[200px] max-h-[200px] max-w-[200px]' />
                </div>
            </div>
            <div className='relative w-full h-fit'>
                <Image src={CharacterNameBackground} width={100} height={10} className='w-full h-full' alt='Character name background' />
                <div className='absolute top-[14px] w-full px-5'>
                    <div className='bg-[#F0F2E1] h-10 flex items-center justify-center rounded-sm text-[12px] font-bold w-full text-black'>
                        { props.character?.name }
                    </div>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-1 w-full">
           <button type="button" className="mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-xs p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={props.rollAgain}>{ !rollsLeft || nextClaimTimeSecond ? 'Back' : 'Roll Again' }</button>
           <div className='flex flex-col items-center mt-3'>
            { claimDisabled ?  <span className='text-[10px] text-gray-400'>Lost your chance</span>  : <CountdownTimer seconds={29} completionText='Lost your chance' onFinish={()=> setClaimDisabled(true)} /> }
           </div>
           <button type="button" className="mt-5 disabled transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-xs p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={props.claim} disabled={claimDisabled || isLoading}>Claim</button>
          </div>
        </div>
      </div> 
    )
}
