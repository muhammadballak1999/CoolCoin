"use client";

import { Statistics } from "@/app/components/global/statistics";
import { useWindowSize } from "@/app/hooks/useWindowsSize";

export default function Home() {

  const windowsSize = useWindowSize();

  return (
    <main className="flex min-h-fill flex-col items-center p-5 relative">
      <Statistics />
      <div className="flex items-center justify-center border w-full rounded-md mt-5" style={{ height: windowsSize.height ? windowsSize.height/2.25 : 0 }}>
      <div className="bg-[#FFFB1F] flex items-center justify-center rounded-full h-40 w-40">
        Roll
      </div>
      </div>
      <button type="button" className="transition ease-in-out delay-150 hover:scale-x-50 hover:text-gray-800 duration-300 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-3xl text-xs p-2 mt-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Boost to claim more</button>
    </main>
  );
}
