'use client'
import BottomNavigation from "@/components/BottomNagivation/BottomNavigation";
import backgroundImage from '../../public/images/background.png';
import MarketingPlatformInfo from "@/components/HomePlateformSelect/MarketingPlatformInfo";
import DragAndDrop from "@/components/HomePlateformSelect/DragAndDropBox";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-around bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/background.png')` }}>
      <div className="flex flex-col items-center justify-evenly">
        <MarketingPlatformInfo />
        <DragAndDrop />
      </div>
      <BottomNavigation />
    </div>
  );
}
