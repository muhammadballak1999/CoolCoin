"use client";
import { Statistics } from "../components/global/Statistics";
import Image from "next/image"
import { SellSendCard } from "../components/global/SellSendCard";
import { useEffect, useState } from "react";
import { useMainStore } from "@/stores";
import InfiniteScroll from 'react-infinite-scroll-component';
import { ICharacter } from "@/types";
import { debounce } from 'lodash';

export default function MyCollection() {

  const [showCard, setShowCard] = useState(false);
  const [page, setPage] = useState(1);
  const [name, setName] = useState('');

  const { characters, getCharacters } = useMainStore();

  const getMoreCharacters = debounce(() => {
    setPage(page + 1)
    getCharacters({ page, name });
  }, 750)

  useEffect(() => {
    getCharacters();
  }, [])

  const onNameSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e?.target?.value)
    getMoreCharacters()
  }

  return (
    <main className="flex flex-col items-center px-5 pt-5 pb-[25px] relative z-10">
      <Statistics />
      { !showCard ?
      <>
        <label htmlFor="search" className="mb-2 text-sm font-medium">Search Ranks & Characters</label>
        <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input value={name} type="search" id="search" className="block bg-transparent text-white w-full h-10 p-5 ps-10 text-sm placeholder-white border border-gray-200 rounded-lg dark:placeholder-gray-400 dark:text-white" placeholder="Search" required onChange={onNameSearch} />
        </div>
        <div className="scrollable-div w-full mt-5 p-2 h-full">

        <InfiniteScroll
          dataLength={10} //This is important field to render the next data
          next={getMoreCharacters}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          height={'60vh'}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
          refreshFunction={getMoreCharacters}
          pullDownToRefresh
          pullDownToRefreshThreshold={50}
          pullDownToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
          }
          releaseToRefreshContent={
            <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
          }
        >
          {
            characters?.results?.map((character: ICharacter, index: number) => {
              return (
                <div key={index} className="h-[70px] border p-1 my-2 flex items-center justify-between rounded-md" onClick={() => setShowCard(true)}>
                  <div className="flex items-center gap-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={character.image_url} alt="goku" className="rounded-md h-[60px] w-[70px]" />
                    <div className="flex flex-col justify-between items-start h-[60px]">
                      <span className="text-xs font-bold">{ character.title }</span>
                      <span className="text-xs">{ character.name }</span>
                      <span className="text-xs">pph<span className="ml-2 font-bold">{ character.profit_per_hour }</span></span>
                    </div>
                  </div>
                  <span className="font-bold pr-3">{ character.rank }</span>
              </div>
              )
            })
          }
        </InfiniteScroll>
        </div> </> : <SellSendCard sell={() => {}} send={() => {}} />
      }
      
    </main>
  );
}
