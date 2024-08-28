'use client'
import BottomNavigation from "@/components/BottomNagivation/BottomNavigation";
import MarketingPlatformInfo from "@/components/HomePlateformSelect/MarketingPlatformInfo";
import DragAndDrop from "@/components/HomePlateformSelect/DragAndDropBox";

import { useEffect, useState } from "react";
import BubbleIconsAndPosition from "@/components/UI/BubbleIconsAndPosition";

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
    </div>
  );
}
