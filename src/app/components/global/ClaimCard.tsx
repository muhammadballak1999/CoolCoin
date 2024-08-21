import React from 'react';
import Image from 'next/image'
import CharacterToClaim from '../../assets/character-to-claim.png'
import { Button } from "flowbite-react";
import CharacterNameBackground from '../../assets/character-name-background.png';
import { CountdownTimer } from './Countdown';

interface IProps {
  rollAgain: () => void;
  claim: () => void;
}
export const ClaimCard = (props: IProps) => {
    return (
      <div className="flex w-fit rounded-md mt-4">
        <div className="flex flex-col w-full items-center justify-between rounded-md">
          <div className='h-fit w-fit flex flex-col items-center justify-between bg-black'>
            <div className='px-2 pt-3 w-full'>
                <div className='bg-[#F0F2E1] h-10 flex items-center justify-between rounded-md w-full'>
                    <div className='flex flex-col items-center p-1'>
                    <span className='text-[11px] font-bold px-4 text-black'>PPH</span>
                    <span className='text-[11px] font-bold px-1 text-black'>4,700</span>
                    </div>
                    <span className='text-[11px] font-bold px-1 text-black'>Satoru Gojo</span>
                    <span className='text-[11px] font-bold px-4 text-black'>8</span>
                </div>
            </div>
            <div className='w-full px-2 pt-2'>
                <div className='flex items-center justify-center h-fit w-fit bg-[#F0F2E1] p-3 rounded-sm'>
                    <Image src={CharacterToClaim} alt='character to claim' height={200} width={200} />
                </div>
            </div>
            <div className='relative w-full h-fit'>
                <Image src={CharacterNameBackground} width={100} height={10} className='w-full h-full' alt='Character name background' />
                <div className='absolute top-[14px] w-full px-5'>
                    <div className='bg-[#F0F2E1] h-10 flex items-center justify-center rounded-sm text-[12px] font-bold w-full text-black'>
                        Jujutsu Kaisen
                    </div>
                </div>
            </div>
          </div>
          <div className="flex items-center justify-between gap-1 w-full">
           <button type="button" className="mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-xs p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={props.rollAgain}>Roll again</button>
           <div className='flex flex-col items-center mt-3'>
             <CountdownTimer seconds={30} completionText={'Lost your chance'} onFinish={()=> {}} />
           </div>
           <button type="button" className="mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-xs p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={props.claim}>Claim</button>
          </div>
        </div>
      </div> 
    )
}
