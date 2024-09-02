"use client"

import { Inter } from "next/font/google";
import "./globals.scss";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { BottomNavigationBar } from "./components/BottomNavigationBar";
import { useAuthStore } from "@/stores";
import { IVerifyUserPayload } from "@/types";
import { LocalStorageService } from "@/services";
import { Statistics } from "./components/global/Statistics";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const pathName = usePathname();
  const [activeClassSvg, setActiveClassSvg] = useState('w-5 h-5 mb-2 text-blue-500');
  const [inActiveClassSvg, setInActiveClassSvg] = useState('w-5 h-5 mb-2 text-gray-500 dark:text-gray-400');

  const [activeClassSpan, setActiveClassSpan] = useState('text-nowrap text-xs text-blue-500');
  const [inActiveClassSpan, setInActiveClassSpan] = useState('text-nowrap text-xs text-gray-500 dark:text-gray-400');

  const isHome = pathName === "/"
  const [isLoading, setIsLoading] = useState(isHome)
  const [userData, setUserData] = useState(null);

  const authStore = useAuthStore();


  useEffect(() => {
    // Dynamically load the Telegram Web Apps SDK
    const loadTelegramSdk = () => {
      // @ts-ignore
      if (typeof window !== 'undefined' && typeof Telegram === 'undefined') {
        const script = document.createElement('script');
        script.src = 'https://telegram.org/js/telegram-web-app.js';
        script.async = true;
        script.onload = () => {
          // Initialize the Telegram Web App when the SDK is loaded
          // @ts-ignore
          window.Telegram.WebApp.ready();
          // You can now access the Telegram object and perform operations
          // @ts-ignore
          const initData = window.Telegram.WebApp.initData;
          const params = new URLSearchParams(initData);
          const user = {
          // @ts-ignore
            ...window.Telegram.WebApp.initDataUnsafe?.user,
            auth_date: params.get('auth_date'),
            hash: params.get('hash'),
          };

          // @ts-ignore
          setUserData(window.Telegram.WebApp.initDataUnsafe?.user);
          console.log(userData);
          // console.log('user', user);
          verifyUser(initData);
        };
        document.head.appendChild(script);
      }
    };

    loadTelegramSdk();
  }, []);

  // @ts-ignore
  const verifyUser = (data) => {
    if(process.env.NODE_ENV === 'development') {
      LocalStorageService.getInstance().setToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI1NDg3NTI0LCJqdGkiOiIwOGVkMjM5ZTdiNmI0YjQyYTJiZGVhYzM1NDg0MGMyNyIsInVzZXJfaWQiOjF9.zTz2GBBHKaXXCg9ggCeupbayXgHbzZLCeppw-d6RFtQ');
      return
    }
    authStore.verifyUser({ initData: data })
  }

  const Content = () => {
    return (
      isLoading && isHome ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <>
          <div className="h-[92%]">
            <Statistics />
            {children}
            <div className="stars"></div>
            <div className="twinkling"></div>
            <div className="clouds"></div>
          </div>
          <div className="h-[8%] flex items-center">
            <BottomNavigationBar />
          </div>
        </>
      )
    )
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <Content />
        <ToastContainer />
      </body>
    </html>
  );
}
