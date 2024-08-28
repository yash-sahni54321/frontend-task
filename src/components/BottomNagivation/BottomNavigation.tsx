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
        <div className="w-full h-full flex items-center justify-center mt-32">
            <div className="px-4 py-0 bg-white rounded-3xl w-2/3 flex justify-between items-center">
                <div className="flex gap-x-4 flex-row justify-center items-center">
                    {navLinks1.map((link, index) => (
                        <p key={index} className="text-black hover:text-gray-700 text-sm">
                            {link}
                        </p>
                    ))}
                    <MagicSVG />
                    <p className="text-black hover:text-gray-700 text-sm">FAQ's</p>
                    <p className="text-black hover:text-gray-700 text-sm">Blogs</p>
                </div>
                <div className="flex gap-x-4 p-4 flex-row justify-center items-center">
                    <GlobeSVG width={30} height={30} />
                    <p className="text-black hover:text-gray-700 text-sm">Sign in</p>
                    <p className="text-black hover:text-gray-700 text-sm">Live demo</p>
                </div>
            </div>
        </div>
    );
};

export default BottomNavigation;
