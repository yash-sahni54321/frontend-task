import React from "react";
import DocumentSVG from "@/assets/svgs/DocumentSVG";
import EditSVG from "@/assets/svgs/EditSVG";
import RecordSVG from "@/assets/svgs/RecordSVG";
import WriteSVG from "@/assets/svgs/WriteSVG";
import AudioPlayer from "@/assets/svgs/AudioPlayer";
import SocialMediaSVG from "@/assets/svgs/SocialMediaSVG";
import ScheduleSVG from "@/assets/svgs/ScheduleSVG";
import PhotoGallerySVG from "@/assets/svgs/PhotoGallerySVG";
import MessageSVG from "@/assets/svgs/MessageSVG";
import ArticleSVG from "@/assets/svgs/ArticleSVG";
import VideoEditSVG from "@/assets/svgs/VideoEditSVG";
import SearchSVG from "@/assets/svgs/SearchSVG";

type FeatureItem = {
    id: number;
    name: string;
    icon: React.ReactNode;
};

interface Props {
    isBubbled: boolean
}

const BubbleIconsAndPosition = (props: Props) => {
    const features: FeatureItem[] = [
        { id: 1, name: "Document", icon: <DocumentSVG /> },
        { id: 2, name: "Edit", icon: <EditSVG /> },
        { id: 3, name: "Record", icon: <RecordSVG /> },
        { id: 4, name: "Write", icon: <WriteSVG /> },
        { id: 5, name: "Audio", icon: <AudioPlayer /> },
        { id: 6, name: "Social Media", icon: <SocialMediaSVG /> },
        { id: 7, name: "Schedule", icon: <ScheduleSVG /> },
        { id: 8, name: "Photo Gallery", icon: <PhotoGallerySVG /> },
        { id: 9, name: "Message", icon: <MessageSVG /> },
        { id: 10, name: "Article", icon: <ArticleSVG /> },
        { id: 11, name: "Video Edit", icon: <VideoEditSVG /> },
        { id: 12, name: "Search", icon: <SearchSVG /> },
    ];

    const positions = [
        "translate-x-[440px] -translate-y-[130px]",
        "translate-x-[350px] translate-y-[10px]",
        "translate-x-[500px] translate-y-[100px]",
        "translate-x-[320px] translate-y-[190px]",
        "translate-x-[180px] translate-y-[300px]",
        "translate-x-[-30px] translate-y-[260px]",
        "-translate-x-[240px] translate-y-[280px]",
        "-translate-x-[590px] translate-y-[10px]",
        "-translate-x-[390px] -translate-y-[90px]",
        "-translate-x-[550px] -translate-y-[160px]",
        "-translate-x-[400px] translate-y-[100px]",
        "-translate-x-[530px] translate-y-[200px]",
    ];

    return (
        <div className="absolute">
            {features.map((feature, index) => (
                <div
                    key={feature.id}
                    className={`absolute w-8 h-8 text-center rounded-full transition-transform duration-500 ${props.isBubbled ? positions[index] : "translate-x-0 translate-y-0"
                        }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                >
                    {feature.icon}
                </div>
            ))}
        </div>
    )
}

export default BubbleIconsAndPosition;