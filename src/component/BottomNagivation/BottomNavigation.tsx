import React from "react";

const BottomNavigation = () => {
    const navLinks = [
        "Home",
        "Feature",
        "How it works",
        "Pricing",
        "Testimonials",
        "FAQ's",
        "Blogs"
    ];

    return (
        <div className="bg-green-700">

            <div className="flex gap-x-4 p-4">
                {navLinks.map((link, index) => (
                    <span key={index} className="text-gray-950 hover:text-gray-700">
                        {link}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default BottomNavigation;
