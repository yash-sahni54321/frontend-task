import Image from "next/image";
import backgroundImage from '../../public/images/background.png';
import BottomNavigation from "@/component/BottomNagivation/BottomNavigation";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -10
      }}
      className="w-screen h-screen flex flex-col items-center justify-between"
    >
      <div className="bg-green-500 p-4">
        <p className="text-red-700">hay</p>
      </div>

      <BottomNavigation />
    </div>
  );
}
