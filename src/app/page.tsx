"use client";

import { useWindowSize } from "./hooks/useWindowsSize";
import { useRef, useState } from "react";
import { ConfirmModal } from "./components/modals/ConfirmModal";
import { ClaimCard } from "./components/global/ClaimCard";
import lottie from 'lottie-web';
import { useMainStore } from "@/stores";
import { ICharacter } from "@/types";
import { CountdownTimer } from "./components/global/Countdown";
import { toast } from "react-toastify";

export default function Home() {

  const windowsSize = useWindowSize();
  const modalRef = useRef(null);
  const rollAnimationContainer = useRef(null);
  const claimAnimationContainer = useRef(null);
  const [isRolled, setIsRolled] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [characterToClaim, setCharacterToClaim] = useState<ICharacter>(null!);

  const { roll, claim, redeem, getGameStatus, nextClaimTimeSecond, nextRollTimeSecond, rollsLeft, isLoading } = useMainStore();


  const gameRoll = async () => {
    if(nextClaimTimeSecond !== 0 || rollsLeft === 0) {
      setIsRolled(false);
      return
    }
    setIsRolling(true);
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

    const res = await roll();
    setCharacterToClaim(res);
    getGameStatus();
  }

  const claimCharacter = async () => {
    await claim(characterToClaim?.id);
    // @ts-ignore
    modalRef.current?.click();
  }

  const onConfirmModal = () => {
    setIsRolled(false);
    getGameStatus();
  }

  const redeemCharacter = async () => {
    let payload = prompt("Please enter the redeem code");

    if (payload !== null) {
      redeem(payload).then((res) => {
        console.log(res);
        toast('Character Claimed Successfully', { type: 'success' });
        getGameStatus();
      })
      .catch(e => {
        console.log(e);
        // toast('Wrong guid!', { type: 'error' });
      })
    }
  }


  return (
    <>
      <main className="flex flex-col items-center px-5 pt-[125px] overflow-auto relative z-10">
      <div className="mt-10">
          {
            !isRolled && !isRolling
            ?
              <button type="button" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-xs p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Boost to claim more</button>
            :
              <></>
          }
        </div>
        <div ref={rollAnimationContainer}></div>
        { isRolled && !isRolling ? (
          <ClaimCard rollAgain={gameRoll} claim={claimCharacter} character={characterToClaim} />
        ) : ( isRolling ? <></> :
          <div className="flex items-center justify-center w-full rounded-md" style={{ height: windowsSize.height ? windowsSize.height/2.25 : 0 }}>
            {
              nextClaimTimeSecond 
              ? 
                <div className={'bg-[#fff] flex items-center justify-center rounded-full h-40 w-40 text-black'} onClick={gameRoll}>
                  <CountdownTimer seconds={nextClaimTimeSecond} onFinish={() => getGameStatus()} />
                </div>
              : rollsLeft ?
                <div className={'bg-[#FFFB1F] glow flex items-center justify-center rounded-full h-40 w-40 text-black font-bold'} onClick={gameRoll}>
                  Roll
                </div>
                : 
                <div className={'bg-[#fff] flex items-center justify-center rounded-full h-40 w-40 text-black text-sm'}> 
                 {
                    isLoading
                    ? <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                    :
                    <>
                    <CountdownTimer seconds={nextRollTimeSecond} onFinish={() => getGameStatus()} />
                    </>
                  }
                </div>
            }
          </div>
        )
        }
        <div className="py-2">
          {
            !isRolled && !isRolling
            ?
              <button type="button" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-xs p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={redeemCharacter}>Redeem Character</button>
            :
              <></>
          }
        </div>
      </main>
      <ConfirmModal ref={modalRef} eventType="Claimed" onConfirm={onConfirmModal} />
    </>
  );
}
