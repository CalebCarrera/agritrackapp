"use client";

import { useEffect, useState } from "react";
import Splash from "@/app/screen/splash";
import MainApp from "@/app/main/MainApp"; 

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500); 
    return () => clearTimeout(timer);
  }, []);

  return showSplash ? <Splash /> : <MainApp />;
}
