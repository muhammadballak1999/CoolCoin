"use client";

import { Statistics } from "@/app/components/global/statistics";
import { useWindowSize } from "@/app/hooks/useWindowsSize";
import { useRef, useState } from "react";
import { ClaimModal } from "@/app/components/modals/claimModal";
import { ClaimCard } from "@/app/components/global/claimCard";

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
      <main className="flex flex-col items-center p-5 relative">
        <Statistics />
        { isRolled ? (
          <ClaimCard />
        ) : (
          <div className="flex items-center justify-center border w-full rounded-md mt-2" style={{ height: windowsSize.height ? windowsSize.height/2.25 : 0 }} onClick={() => setIsRolled(!isRolled)}>
            <div className="bg-[#FFFB1F] flex items-center justify-center rounded-full h-40 w-40">
              Roll
            </div>
          </div>
        )
        }
        <div className="py-5">
          <button type="button" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-xs p-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={test}>Boost to claim more</button>
        </div>
      </main>
      <ClaimModal ref={modalRef} />
    </>
  );
}
