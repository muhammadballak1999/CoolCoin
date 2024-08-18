"use client"

import { Inter } from "next/font/google";
import "./globals.scss";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { SplashScreen } from "./components/SplashScreen";
import { BottomNavigationBar } from "./components/BottomNavigationBar";

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
            id: params.get('user_id'),
            auth_date: params.get('auth_date'),
            hash: params.get('hash'),
          };

          // @ts-ignore
          setUserData(user);
          console.log('user', user);
        };
        document.head.appendChild(script);
      }
    };

    loadTelegramSdk();
  }, []);

  // useEffect(() => {
  //     // @ts-ignore
  //   if (typeof window.Telegram !== 'undefined' && window.Telegram.WebApp) {
  //     // Indicate that the app is ready
  //     // @ts-ignore
  //     window.Telegram.WebApp.ready();

  //     // Extract initData (contains the authentication data)
  //     // @ts-ignore
  //     const initData = window.Telegram.WebApp.initData;

  //     // You can also parse initData into an object if needed
  //     const params = new URLSearchParams(initData);
  //     const user = {
  //       id: params.get('user_id'),
  //       auth_date: params.get('auth_date'),
  //       hash: params.get('hash'),
  //     };

  //     // @ts-ignore
  //     setUserData(user);
  //     alert(user);

  //     // Send this data to the backend
  //     // fetch('/api/auth', {
  //     //   method: 'POST',
  //     //   headers: {
  //     //     'Content-Type': 'application/json',
  //     //   },
  //     //   body: JSON.stringify({ initData }),
  //     // })
  //     //   .then(response => response.json())
  //     //   .then(data => {
  //     //     if (data.success) {
  //     //       console.log('User authenticated successfully');
  //     //     } else {
  //     //       console.error('Authentication failed');
  //     //     }
  //     //   })
  //     //   .catch(error => console.error('Error:', error));
  //   }
  // }, []);

  const Content = () => {
    return (
      isLoading && isHome ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <>
          <div className="h-[92%] overflow-auto">
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
      </body>
    </html>
  );
}
