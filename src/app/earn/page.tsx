"use client";
import { Statistics } from "@/app/components/global/statistics";


export default function Earn() {

  return (
    <main className="h-[100vh] flex min-h-fill flex-col items-center px-5 pt-5 pb-36 overflow-auto relative">
      <Statistics />
      <div className="flex flex-col gap-3 w-full mt-3">
        <span className="text-xs font-extralight pl-2">EACH TASK GETS YOU 1,000 COOL COINS</span>
        <div className="h-10 border rounded md flex items-center px-2 text-sm"> 
          <input checked id="green-checkbox" type="checkbox" readOnly className="w-4 h-4 text-[#31D158] bg-gray-100 border-gray-300 rounded focus:ring-green-400 dark:focus:ring-green-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="green-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Join Cool Coin Telegram Community</label>
        </div>
        <div className="h-10 border rounded md flex items-center px-2 text-sm"> 
          <input checked id="green-checkbox" type="checkbox" readOnly className="w-4 h-4 text-[#31D158] bg-gray-100 border-gray-300 rounded focus:ring-green-400 dark:focus:ring-green-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="green-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Follow Cool Coin Twitter</label>
        </div>
        <div className="h-10 border rounded md flex items-center px-2 text-sm"> 
          <input id="green-checkbox" type="checkbox" readOnly className="w-4 h-4 text-[#31D158] bg-gray-100 border-gray-300 rounded focus:ring-green-400 dark:focus:ring-green-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="green-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Follow Cool Coin Instagram</label>
        </div>
        <div className="h-10 border rounded md flex items-center px-2 text-sm"> 
          <input id="green-checkbox" type="checkbox" readOnly className="w-4 h-4 text-[#31D158] bg-gray-100 border-gray-300 rounded focus:ring-green-400 dark:focus:ring-green-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="green-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Follow Cool Coin Tiktok</label>
        </div>
        <div className="h-10 border rounded md flex items-center px-2 text-sm"> 
          <input checked id="green-checkbox" type="checkbox" readOnly className="w-4 h-4 text-[#31D158] bg-gray-100 border-gray-300 rounded focus:ring-green-400 dark:focus:ring-green-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="green-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subscribe Cool Coin Youtube</label>
        </div>
        <div className="h-10 border rounded md flex items-center px-2 text-sm"> 
          <input checked id="green-checkbox" type="checkbox" readOnly className="w-4 h-4 text-[#31D158] bg-gray-100 border-gray-300 rounded focus:ring-green-400 dark:focus:ring-green-400 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="green-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Follow Cool Coin Twitter</label>
        </div>
        <span className="text-xs font-extralight pl-2">10 FRIENDS JOINED SO FAR</span>
        <span className="text-xs font-extralight pl-2">(YOU HAVE RECEIVED 15,000 COOL COINS)</span>
      </div>
    </main>
  );
}
