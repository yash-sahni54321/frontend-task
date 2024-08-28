import GlobeSVG from "@/assets/svgs/GlobeSVG";
import MagicSVG from "@/assets/svgs/MagicSVG";
import React from "react";

const BottomNavigation = () => {
    const navLinks1 = [
        "Home",
        "Feature",
        "How it works",
        "Pricing",
        "Testimonials",
    ];

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="px-4 py-0 bg-white rounded-3xl w-2/3 flex justify-between items-center">
                <div className="flex gap-x-4 flex-row justify-center items-center">
                    {navLinks1.map((link, index) => (
                        <span key={index} className="text-black hover:text-gray-700">
                            {link}
                        </span>
                    ))}
                    <MagicSVG />
                    <span className="text-black hover:text-gray-700">FAQ's</span>
                    <span className="text-black hover:text-gray-700">Blogs</span>
                </div>
                <div className="flex gap-x-4 p-4 flex-row justify-center items-center">
                    <GlobeSVG width={30} height={30} />
                    <span className="text-black hover:text-gray-700">Sign in</span>
                    <span className="text-black hover:text-gray-700">Live demo</span>
                </div>
            </div>
        </div>
    );
};

export default BottomNavigation;
