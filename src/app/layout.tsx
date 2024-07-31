"use client"

import { Inter } from "next/font/google";
import "./globals.scss";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";
import { SplashScreen } from "@/app/components/splashScreen";
import { BottomNavigationBar } from "@/app/components/bottomNavigationBar";

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

  useEffect(() => {
    if (isLoading) {
      return
    }
  }, [isLoading])

  return (
    <html lang="en">
      <body className={inter.className}>
        {isLoading && isHome ? (
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
        )}

      </body>
    </html>
  );
}
