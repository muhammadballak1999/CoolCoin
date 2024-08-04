import { useState } from "react";
import Link from "next/link"
import { usePathname } from "next/navigation";

export const BottomNavigationBar = () => {

  const pathName = usePathname();
  const [activeClassSvg, setActiveClassSvg] = useState('w-5 h-5 mb-2 text-blue-500');
  const [inActiveClassSvg, setInActiveClassSvg] = useState('w-5 h-5 mb-2 text-gray-500 dark:text-gray-400');

  const [activeClassSpan, setActiveClassSpan] = useState('text-nowrap text-xs text-blue-500');
  const [inActiveClassSpan, setInActiveClassSpan] = useState('text-nowrap text-xs text-gray-500 dark:text-gray-400');

  return (
    <div className="absolute bottom-0 w-full bg-black z-10">
    <div className="flex items-center justify-center gap-2 h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <Link href="/" className="mt-2 flex items-center justify-center">
          <button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
              <svg className={pathName === '/' ? activeClassSvg : inActiveClassSvg} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.15567 1.91282C8.88992 1.84573 8.61166 1.84573 8.3459 1.91282C8.0846 1.97879 7.81806 2.15018 6.90389 2.80037L3.27575 5.38082C2.60268 5.85953 2.4187 6.00092 2.29038 6.16396C2.16005 6.32955 2.06256 6.51851 2.00316 6.72069C1.94467 6.91976 1.93608 7.15163 1.93608 7.97757V13.2139C1.93608 13.9439 1.93678 14.4374 1.96789 14.8181C1.99814 15.1884 2.0526 15.3721 2.11636 15.4973C2.27495 15.8085 2.52799 16.0616 2.83923 16.2201C2.96439 16.2839 3.14815 16.3384 3.5184 16.3686C3.89915 16.3997 4.39257 16.4004 5.12264 16.4004H12.3789C13.109 16.4004 13.6024 16.3997 13.9832 16.3686C14.3534 16.3384 14.5372 16.2839 14.6623 16.2201C14.9736 16.0616 15.2266 15.8085 15.3852 15.4973C15.449 15.3721 15.5034 15.1884 15.5337 14.8181C15.5648 14.4374 15.5655 13.9439 15.5655 13.2139V7.97758C15.5655 7.15163 15.5569 6.91976 15.4984 6.72069C15.439 6.51851 15.3415 6.32955 15.2112 6.16396C15.0829 6.00092 14.8989 5.85953 14.2258 5.38082L10.5977 2.80037C9.68351 2.15018 9.41698 1.97879 9.15567 1.91282ZM7.9053 0.167575C8.46025 0.0274748 9.04132 0.0274748 9.59627 0.167575C10.2284 0.327151 10.787 0.725176 11.5153 1.24406C11.5566 1.2735 11.5985 1.30333 11.6409 1.33353L15.2691 3.91398C15.2998 3.93582 15.3301 3.95736 15.3601 3.97863C15.9007 4.36261 16.3166 4.658 16.6256 5.0507C16.8978 5.39649 17.1014 5.79108 17.2254 6.21327C17.3663 6.69275 17.366 7.20287 17.3655 7.86599C17.3655 7.90271 17.3655 7.9399 17.3655 7.97758V13.2507C17.3655 13.9346 17.3655 14.5019 17.3277 14.9647C17.2884 15.4462 17.2036 15.8933 16.989 16.3145C16.6579 16.9644 16.1295 17.4928 15.4795 17.824C15.0583 18.0386 14.6113 18.1233 14.1297 18.1626C13.667 18.2005 13.0997 18.2004 12.4158 18.2004H5.08577C4.40191 18.2004 3.83458 18.2005 3.37182 18.1626C2.89026 18.1233 2.44325 18.0386 2.02205 17.824C1.37212 17.4928 0.843709 16.9644 0.512553 16.3145C0.297942 15.8933 0.21321 15.4462 0.173865 14.9647C0.136056 14.5019 0.136066 13.9346 0.136078 13.2507L0.136079 7.97757C0.136079 7.93989 0.136055 7.9027 0.136032 7.86598C0.13561 7.20286 0.135285 6.69275 0.276162 6.21327C0.400207 5.79108 0.603781 5.39649 0.875933 5.0507C1.18501 4.658 1.6009 4.36261 2.14152 3.97862C2.17146 3.95736 2.20178 3.93582 2.23249 3.91398L5.86063 1.33353C5.90309 1.30333 5.94496 1.2735 5.98629 1.24406C6.71456 0.725176 7.27321 0.327151 7.9053 0.167575ZM8.75079 5.65519C9.24784 5.65519 9.65079 6.05813 9.65079 6.55519V9.08452H12.1543C12.6514 9.08452 13.0543 9.48746 13.0543 9.98452C13.0543 10.4816 12.6514 10.8845 12.1543 10.8845H9.65079V13.4139C9.65079 13.9109 9.24784 14.3139 8.75079 14.3139C8.25373 14.3139 7.85079 13.9109 7.85079 13.4139V10.8845H5.34724C4.85018 10.8845 4.44724 10.4816 4.44724 9.98452C4.44724 9.48746 4.85018 9.08452 5.34724 9.08452H7.85079V6.55519C7.85079 6.05813 8.25373 5.65519 8.75079 5.65519Z"/>
              </svg>
              <span className={ pathName === '/' ? activeClassSpan : inActiveClassSpan }>Home</span>
          </button>
        </Link>
        <Link href="/my-collection" className="mt-2 flex items-center justify-center">
          <button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
              <svg className={pathName === '/my-collection' ? activeClassSvg : inActiveClassSvg} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path stroke="currentColor" className="fill-current" d="M11.2096 0.732858C11.812 0.556495 12.4524 0.556495 13.0548 0.732858C13.51 0.866111 13.8883 1.11566 14.2542 1.41963C14.6046 1.71063 15.0002 2.10108 15.4736 2.56829L15.5286 2.62252C16.0137 3.10121 16.4186 3.50077 16.7202 3.85494C17.035 4.2245 17.2939 4.60771 17.432 5.0709C17.6143 5.68285 17.6143 6.33471 17.432 6.94666C17.2939 7.40985 17.035 7.79306 16.7202 8.16262C16.4186 8.51681 16.0136 8.91639 15.5285 9.39512L14.4457 10.4636C14.1588 10.7468 14.084 10.824 14.0256 10.9026C13.9097 11.0588 13.8255 11.2362 13.778 11.4248C13.7541 11.5198 13.7416 11.6265 13.7039 12.028L13.7008 12.062C13.616 12.965 13.5481 13.6886 13.4578 14.247C13.3686 14.7982 13.2403 15.3199 12.9598 15.7402C12.1637 16.9331 10.6856 17.4714 9.30883 17.0698C8.82377 16.9283 8.39004 16.6113 7.96731 16.2465C7.53902 15.8769 7.02175 15.3664 6.37615 14.7293L5.47638 13.8414L1.67132 17.5964C1.31753 17.9455 0.747696 17.9417 0.398561 17.5879C0.0494258 17.2341 0.0532022 16.6643 0.406996 16.3152L4.19506 12.577L3.40823 11.8005C2.75506 11.1559 2.23237 10.6401 1.8536 10.2133C1.48047 9.79276 1.15483 9.36076 1.00666 8.87635C0.581797 7.48731 1.11999 5.98417 2.32996 5.18047C2.75192 4.90019 3.27776 4.77306 3.83299 4.68495C4.39661 4.59552 5.1279 4.5287 6.04173 4.44521L6.0756 4.44211C6.46797 4.40626 6.57229 4.39438 6.66532 4.37152C6.8522 4.32559 7.02836 4.24374 7.18398 4.13054C7.26145 4.07419 7.33781 4.00212 7.61825 3.72537L8.79083 2.56823C9.26422 2.10105 9.65985 1.71061 10.0102 1.41963C10.3761 1.11566 10.7544 0.866111 11.2096 0.732858ZM12.5491 2.46035C12.2769 2.38066 11.9875 2.38066 11.7153 2.46035C11.5936 2.49597 11.4352 2.57591 11.1603 2.80425C10.8765 3.04 10.5356 3.37529 10.0279 3.87636L8.88258 5.00656C8.86951 5.01946 8.8566 5.03221 8.84385 5.0448C8.61997 5.2659 8.44342 5.44025 8.24281 5.58618C7.8984 5.8367 7.50854 6.01784 7.09496 6.11949C6.85405 6.17871 6.60694 6.20119 6.29358 6.22971C6.27574 6.23133 6.25768 6.23297 6.23939 6.23464C5.28396 6.32195 4.61254 6.38377 4.11508 6.46271C3.60229 6.54408 3.40588 6.62671 3.32589 6.67985C2.77915 7.043 2.53596 7.72221 2.72794 8.34986C2.75603 8.44169 2.85536 8.63021 3.19997 9.01857C3.53427 9.39532 4.01386 9.86926 4.69675 10.5432L7.61615 13.4241C8.29166 14.0907 8.76613 14.5583 9.14326 14.8837C9.53131 15.2186 9.71978 15.3146 9.81289 15.3418C10.435 15.5232 11.1029 15.28 11.4626 14.741C11.5165 14.6603 11.599 14.4656 11.6809 13.9596C11.7604 13.4679 11.8232 12.8047 11.9118 11.8598C11.9136 11.8411 11.9153 11.8226 11.917 11.8043C11.947 11.4838 11.9706 11.2311 12.0325 10.9851C12.1377 10.5677 12.3239 10.175 12.5806 9.82944C12.7318 9.62582 12.9125 9.44759 13.1417 9.22155C13.1548 9.20867 13.168 9.19564 13.1814 9.18243L14.2365 8.1412C14.7565 7.62809 15.1049 7.28315 15.3499 6.99551C15.5875 6.71652 15.6703 6.55562 15.7069 6.43257C15.7893 6.15605 15.7893 5.86151 15.7069 5.58499C15.6703 5.46194 15.5875 5.30104 15.3499 5.02205C15.1049 4.73441 14.7565 4.38947 14.2365 3.87636C13.7288 3.37529 13.3879 3.04 13.1041 2.80425C12.8292 2.57591 12.6708 2.49597 12.5491 2.46035Z" fill="#A2ACB0"/>
              </svg>
              <span className={ pathName === '/my-collection' ? activeClassSpan : inActiveClassSpan }>My Collection</span>
          </button>
        </Link>
        <Link href="/loot" className="mt-2 flex items-center justify-center">
          <button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
              <svg className={pathName === '/loot' ? activeClassSvg : inActiveClassSvg} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path className="fill-current" d="M4.70968 0.483399H4.78874C5.42268 0.483382 5.95736 0.483368 6.39369 0.522394C6.85099 0.563294 7.28736 0.652556 7.69488 0.884739C8.15695 1.148 8.54214 1.52751 8.81055 1.9863C9.04813 2.39238 9.13945 2.82768 9.18117 3.28198C9.22087 3.71417 9.22085 4.2432 9.22083 4.86767V4.94832C9.22085 5.57278 9.22087 6.10182 9.18117 6.53401C9.13945 6.9883 9.04813 7.4236 8.81055 7.82969C8.54214 8.28847 8.15695 8.66798 7.69488 8.93124C7.28736 9.16343 6.85099 9.25269 6.39369 9.29359C5.95736 9.33262 5.42269 9.3326 4.78875 9.33259H4.70967C4.07574 9.3326 3.54106 9.33262 3.10473 9.29359C2.64743 9.25269 2.21106 9.16343 1.80354 8.93124C1.34147 8.66798 0.956288 8.28847 0.687875 7.82969C0.450293 7.4236 0.358973 6.9883 0.317249 6.53401C0.277555 6.10181 0.277571 5.57277 0.277589 4.94829V4.8677C0.277571 4.24322 0.277555 3.71417 0.317249 3.28198C0.358973 2.82768 0.450293 2.39238 0.687875 1.9863C0.956288 1.52751 1.34147 1.148 1.80354 0.884739C2.21106 0.652556 2.64743 0.563294 3.10473 0.522394C3.54106 0.483368 4.07574 0.483382 4.70968 0.483399ZM3.26508 2.31524C2.93044 2.34517 2.78437 2.39757 2.69461 2.44871C2.50513 2.55666 2.34927 2.71108 2.24151 2.89526C2.19199 2.9799 2.13976 3.11938 2.10971 3.4466C2.07847 3.78665 2.07759 4.23238 2.07759 4.90799C2.07759 5.5836 2.07847 6.02934 2.10971 6.36938C2.13976 6.6966 2.19199 6.83608 2.24151 6.92073C2.34927 7.10491 2.50513 7.25932 2.69461 7.36728C2.78437 7.41842 2.93044 7.47082 3.26508 7.50075C3.61166 7.53174 4.06524 7.53258 4.74921 7.53258C5.43318 7.53258 5.88677 7.53174 6.23334 7.50075C6.56798 7.47082 6.71405 7.41842 6.80381 7.36728C6.99329 7.25932 7.14915 7.10491 7.25691 6.92073C7.30643 6.83608 7.35866 6.6966 7.38872 6.36938C7.41995 6.02934 7.42083 5.5836 7.42083 4.90799C7.42083 4.23238 7.41995 3.78665 7.38872 3.4466C7.35866 3.11938 7.30643 2.9799 7.25691 2.89526C7.14915 2.71108 6.99329 2.55666 6.80381 2.44871C6.71405 2.39757 6.56798 2.34517 6.23334 2.31524C5.88677 2.28424 5.43318 2.2834 4.74921 2.2834C4.06524 2.2834 3.61166 2.28424 3.26508 2.31524ZM14.7102 0.483399H14.7893C15.4232 0.483382 15.9579 0.483368 16.3942 0.522394C16.8515 0.563294 17.2879 0.652556 17.6954 0.884739C18.1575 1.148 18.5427 1.52751 18.8111 1.9863C19.0487 2.39238 19.14 2.82768 19.1817 3.28198C19.2214 3.71418 19.2214 4.24322 19.2214 4.86771V4.94828C19.2214 5.57276 19.2214 6.10181 19.1817 6.53401C19.14 6.9883 19.0487 7.4236 18.8111 7.82969C18.5427 8.28847 18.1575 8.66798 17.6954 8.93124C17.2879 9.16343 16.8515 9.25269 16.3942 9.29359C15.9579 9.33262 15.4232 9.3326 14.7893 9.33259H14.7102C14.0763 9.3326 13.5416 9.33262 13.1053 9.29359C12.648 9.25269 12.2116 9.16343 11.8041 8.93124C11.342 8.66798 10.9568 8.28847 10.6884 7.82969C10.4508 7.4236 10.3595 6.9883 10.3178 6.53401C10.2781 6.10181 10.2781 5.57276 10.2781 4.94828V4.86771C10.2781 4.24322 10.2781 3.71418 10.3178 3.28198C10.3595 2.82768 10.4508 2.39238 10.6884 1.9863C10.9568 1.52751 11.342 1.148 11.8041 0.884739C12.2116 0.652556 12.648 0.563294 13.1053 0.522394C13.5416 0.483368 14.0763 0.483382 14.7102 0.483399ZM13.2656 2.31524C12.931 2.34517 12.7849 2.39757 12.6952 2.44871C12.5057 2.55666 12.3498 2.71108 12.2421 2.89526C12.1925 2.9799 12.1403 3.11938 12.1102 3.4466C12.079 3.78665 12.0781 4.23238 12.0781 4.90799C12.0781 5.5836 12.079 6.02934 12.1102 6.36938C12.1403 6.6966 12.1925 6.83608 12.2421 6.92073C12.3498 7.10491 12.5057 7.25932 12.6952 7.36728C12.7849 7.41842 12.931 7.47082 13.2656 7.50075C13.6122 7.53174 14.0658 7.53258 14.7498 7.53258C15.4337 7.53258 15.8873 7.53174 16.2339 7.50075C16.5685 7.47082 16.7146 7.41842 16.8044 7.36728C16.9938 7.25932 17.1497 7.10491 17.2575 6.92073C17.307 6.83608 17.3592 6.6966 17.3893 6.36938C17.4205 6.02934 17.4214 5.5836 17.4214 4.90799C17.4214 4.23238 17.4205 3.78665 17.3893 3.4466C17.3592 3.11938 17.307 2.9799 17.2575 2.89526C17.1497 2.71108 16.9938 2.55666 16.8044 2.44871C16.7146 2.39757 16.5685 2.34517 16.2339 2.31524C15.8873 2.28424 15.4337 2.2834 14.7498 2.2834C14.0658 2.2834 13.6122 2.28424 13.2656 2.31524ZM4.70967 10.3523H4.78875C5.42269 10.3522 5.95736 10.3522 6.39369 10.3913C6.85099 10.4322 7.28736 10.5214 7.69488 10.7536C8.15695 11.0169 8.54213 11.3964 8.81055 11.8552C9.04813 12.2612 9.13945 12.6965 9.18117 13.1508C9.22087 13.583 9.22085 14.1121 9.22083 14.7365V14.8172C9.22085 15.4416 9.22087 15.9707 9.18117 16.4029C9.13945 16.8572 9.04813 17.2925 8.81055 17.6985C8.54214 18.1573 8.15695 18.5368 7.69488 18.8001C7.28736 19.0323 6.85099 19.1215 6.39369 19.1624C5.95736 19.2015 5.42266 19.2015 4.78871 19.2014H4.70971C4.07576 19.2015 3.54107 19.2015 3.10473 19.1624C2.64743 19.1215 2.21106 19.0323 1.80354 18.8001C1.34147 18.5368 0.956289 18.1573 0.687875 17.6985C0.450293 17.2925 0.358973 16.8572 0.317249 16.4029C0.277555 15.9707 0.277571 15.4416 0.277589 14.8171V14.7366C0.277571 14.1121 0.277555 13.583 0.317249 13.1508C0.358973 12.6965 0.450293 12.2612 0.687875 11.8552C0.956288 11.3964 1.34147 11.0169 1.80354 10.7536C2.21106 10.5214 2.64743 10.4322 3.10473 10.3913C3.54106 10.3522 4.07574 10.3522 4.70967 10.3523ZM3.26508 12.1841C2.93044 12.214 2.78437 12.2664 2.69461 12.3176C2.50513 12.4255 2.34927 12.5799 2.24151 12.7641C2.19199 12.8488 2.13976 12.9882 2.10971 13.3155C2.07847 13.6555 2.07759 14.1012 2.07759 14.7769C2.07759 15.4525 2.07847 15.8982 2.10971 16.2382C2.13976 16.5655 2.19199 16.7049 2.24151 16.7896C2.34927 16.9738 2.50513 17.1282 2.69461 17.2361C2.78437 17.2873 2.93045 17.3397 3.26509 17.3696C3.61166 17.4006 4.06524 17.4014 4.74921 17.4014C5.43318 17.4014 5.88677 17.4006 6.23334 17.3696C6.56798 17.3397 6.71405 17.2873 6.80381 17.2361C6.99329 17.1282 7.14915 16.9738 7.25691 16.7896C7.30643 16.7049 7.35866 16.5655 7.38872 16.2382C7.41995 15.8982 7.42083 15.4525 7.42083 14.7769C7.42083 14.1012 7.41995 13.6555 7.38872 13.3155C7.35866 12.9882 7.30643 12.8488 7.25691 12.7641C7.14915 12.5799 6.99329 12.4255 6.80381 12.3176C6.71405 12.2664 6.56798 12.214 6.23334 12.1841C5.88677 12.1531 5.43318 12.1523 4.74921 12.1523C4.06524 12.1523 3.61166 12.1531 3.26508 12.1841Z"/>
              </svg>
              <span className={ pathName === '/loot' ? activeClassSpan : inActiveClassSpan }>Loot</span>
          </button>
        </Link>
        <Link href="/earn" className="mt-2 flex items-center justify-center">
          <button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
              <svg className={pathName === '/earn' ? activeClassSvg : inActiveClassSvg} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M14.1927 7.38445C14.1927 9.26545 13.4109 10.9626 12.1664 12.1847C12.1 12.2499 12.0648 12.3021 12.0494 12.3305C12.0239 14.2539 10.4259 15.721 8.56523 15.721H5.93383C4.07316 15.721 2.47512 14.2539 2.44968 12.3305C2.43422 12.3021 2.39908 12.2499 2.33263 12.1847C1.08819 10.9626 0.306396 9.26545 0.306396 7.38445C0.306396 3.58168 3.46368 0.585938 7.24953 0.585938C11.0354 0.585938 14.1927 3.58168 14.1927 7.38445ZM6.4317 19.2998C6.09634 19.2728 5.79804 19.1188 5.5879 18.8874C5.39092 18.6705 5.2714 18.3856 5.2714 18.0736C5.2714 17.9037 5.4131 17.766 5.5879 17.766H8.91116C9.08596 17.766 9.22766 17.9037 9.22766 18.0736C9.22766 18.3856 9.10814 18.6705 8.91116 18.8874C8.70102 19.1188 8.40273 19.2728 8.06736 19.2998C8.03251 19.3026 7.99726 19.304 7.96166 19.304H6.53741C6.50181 19.304 6.46656 19.3026 6.4317 19.2998ZM5.5879 15.966H8.91116C10.0313 15.966 11.0277 16.8615 11.0277 18.0736C11.0277 19.7953 9.60622 21.104 7.96166 21.104H6.53741C4.89284 21.104 3.4714 19.7953 3.4714 18.0736C3.4714 16.8615 4.46774 15.966 5.5879 15.966ZM10.9052 10.9004C10.524 11.2748 10.2497 11.7571 10.2497 12.2839C10.2497 13.188 9.49553 13.921 8.56523 13.921H5.93383C5.00353 13.921 4.24937 13.188 4.24937 12.2839C4.24937 11.7571 3.97508 11.2748 3.59383 10.9004C2.67425 9.99736 2.1064 8.75535 2.1064 7.38445C2.1064 4.62385 4.40906 2.38594 7.24953 2.38594C10.09 2.38594 12.3927 4.62385 12.3927 7.38445C12.3927 8.75535 11.8248 9.99736 10.9052 10.9004Z"/>
              </svg>
              <span className={ pathName === '/earn' ? activeClassSpan : inActiveClassSpan }>Earn</span>
          </button>
        </Link>
    </div>
  </div>
  )
}