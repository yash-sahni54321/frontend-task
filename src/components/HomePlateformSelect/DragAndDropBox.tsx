import React, { useState } from "react";
import EllipseSVG from "@/assets/svgs/EllipseSVG";
import ArticleSVG from "@/assets/svgs/ArticleSVG";
import AudioPlayer from "@/assets/svgs/AudioPlayer";
import DocumentSVG from "@/assets/svgs/DocumentSVG";
import EditSVG from "@/assets/svgs/EditSVG";
import RecordSVG from "@/assets/svgs/RecordSVG";
import WriteSVG from "@/assets/svgs/WriteSVG";
import SocialMediaSVG from "@/assets/svgs/SocialMediaSVG";
import ScheduleSVG from "@/assets/svgs/ScheduleSVG";
import PhotoGallerySVG from "@/assets/svgs/PhotoGallerySVG";
import MessageSVG from "@/assets/svgs/MessageSVG";
import VideoEditSVG from "@/assets/svgs/VideoEditSVG";
import SearchSVG from "@/assets/svgs/SearchSVG";

type FeatureItem = {
    id: number;
    name: string;
    icon: React.ReactNode;
};

const DragAndDrop = () => {
    const [droppedItems, setDroppedItems] = useState<FeatureItem[]>([]);

    const onDragStart = (e: React.DragEvent<HTMLDivElement>, item: FeatureItem) => {
        e.dataTransfer.setData("item", JSON.stringify(item));
    };

    const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const item: FeatureItem = JSON.parse(e.dataTransfer.getData("item"));
        setDroppedItems([...droppedItems, item]);
    };

    const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

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

    return (
        <div
            className="w-full max-w-md h-32 bg-white rounded-3xl border border-dashed border-gray-300 flex items-center justify-center"
            style={{ boxShadow: "0 22px 60px rgba(0, 0, 0, 0.15)" }}
        >
            <div className="flex flex-col justify-center items-center">
                <EllipseSVG width={50} height={50} />
                <p className="text-gray-600 text-lg font-medium mt-2">
                    Drag features to view details
                </p>
            </div>
        </div>
    );
};

export default DragAndDrop;