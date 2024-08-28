'use client'
import BottomNavigation from "@/components/BottomNagivation/BottomNavigation";
import MarketingPlatformInfo from "@/components/HomePlateformSelect/MarketingPlatformInfo";
import DragAndDrop from "@/components/HomePlateformSelect/DragAndDropBox";

import { useEffect, useState } from "react";
import BubbleIconsAndPosition from "@/components/UI/BubbleIconsAndPosition";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [isBubbled, setIsBubbled] = useState(false);

  useEffect(() => {
    setIsBubbled(true);
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-around bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/background.png')` }}>
      <div className="flex flex-col items-center justify-evenly">
        <BubbleIconsAndPosition isBubbled={isBubbled} />
        <MarketingPlatformInfo />
        <DragAndDrop />
      </div>
      <BottomNavigation />
      <div className="flex justify-center items-center w-full py-2">
        <p className="text-black font-light text-sm">Loved by product folks at</p>
      </div>
      <Footer />
    </div>
  );
}
