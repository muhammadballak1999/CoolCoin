"use client";

import { Statistics } from "@/app/components/global/statistics";
import { useWindowSize } from "@/app/hooks/useWindowsSize";
import { useEffect, useRef, useState } from "react";
import { ClaimModal } from "@/app/components/modals/claimModal";
import { ClaimCard } from "@/app/components/global/claimCard";
import lottie from 'lottie-web';

export default function Home() {

  const windowsSize = useWindowSize();
  const modalRef = useRef(null);
  const rollAnimationContainer = useRef(null);
  const claimAnimationContainer = useRef(null);
  const [isRolled, setIsRolled] = useState(false);
  const [isRolling, setIsRolling] = useState(false);


  const roll = () => {
    setIsRolling(true)
    const animation = lottie.loadAnimation({
      container: rollAnimationContainer.current!,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: '/animations/Dice.json'
    });

    animation.addEventListener('complete', () => {
      animation.destroy();
      setIsRolling(false);
      setIsRolled(true);
    });
  }

  const claim = () => {
    modalRef.current?.click();
  }


  return (
    <>
      <main className="flex flex-col items-center px-5 pt-5 pb-[25px] overflow-auto relative z-10">
        <Statistics />
        <div ref={rollAnimationContainer}></div>
        { isRolled && !isRolling ? (
          <ClaimCard rollAgain={roll} claim={claim} />
        ) : ( isRolling ? <></> :
          <div className="flex items-center justify-center w-full rounded-md mt-2" style={{ height: windowsSize.height ? windowsSize.height/2.25 : 0 }}>
            <div className="bg-[#FFFB1F] flex items-center justify-center rounded-full h-40 w-40 text-black" onClick={roll}>
              Roll
            </div>
          </div>
        )
        }
        <div className="py-5">
          <button type="button" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-xs p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Boost to claim more</button>
        </div>
      </main>
      <ClaimModal ref={modalRef} />
    </>
  );
}
