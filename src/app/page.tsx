"use client";

import { Statistics } from "@/app/components/global/statistics";
import { useWindowSize } from "@/app/hooks/useWindowsSize";
import { useRef, useState } from "react";
import { ClaimModal } from "@/app/components/modals/claimModal";
import Image from 'next/image';
import ClaimCharacter from '@/app/assets/claim-character.jpg'
import { Button } from "flowbite-react";

export default function Home() {

  const windowsSize = useWindowSize();
  const modalRef = useRef(null);
  const [isRolled, setIsRolled] = useState(false);

  const test = () => {
    console.log(modalRef.current)
    modalRef.current?.click();
  }

  return (
    <>
      <main className="h-[100vh] flex flex-col items-center p-5 relative">
        <Statistics />
        <div className="flex items-center justify-center border w-full rounded-md mt-2" style={{ height: windowsSize.height ? windowsSize.height/2.25 : 0 }} onClick={() => setIsRolled(!isRolled)}>
        { isRolled ? (
          <>
            <div className="flex h-full w-full rounded-md">
              <div className="flex flex-col justify-between rounded-md p-2">
                <Image src={ClaimCharacter} alt="claiming character" className="w-full h-[80%] rounded-md" />
                <div className="flex gap-1">
                  <Button className="bg-black"><span className="text-[10px] px-2">Roll again</span></Button>
                  <Button className="bg-black"><span className="text-[10px] px-2">Claim</span></Button>
                </div>
              </div>
              <div className="flex flex-col">

              </div>
            </div>
          </>
        ) : (
          <div className="bg-[#FFFB1F] flex items-center justify-center rounded-full h-40 w-40">
            Roll
          </div>
        )
        }
        </div>
        <button type="button" className="mt-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-xs p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={test}>Boost to claim more</button>
      </main>
      <ClaimModal ref={modalRef} />
    </>
  );
}
