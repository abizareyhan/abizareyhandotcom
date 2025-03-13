import React from "react";
import { Folder } from "@/lib/types/folder";
import Image from "next/image";

interface FolderListProps {
    folders: Folder[];
    currentFolder: string;
    setCurrentFolder: (folderId: string) => void;
    setCurrentFile: (file: null) => void;
}

const FolderList: React.FC<FolderListProps> = ({ folders, currentFolder, setCurrentFolder, setCurrentFile }) => {
    return (
        <div className="w-full space-y-2 overflow-y-auto border-r border-white/10 p-4 md:w-80">
            {folders.map((folder) => (
                <button
                    key={folder.id}
                    onClick={() => {
                        setCurrentFolder(folder.id);
                        setCurrentFile(null);
                    }}
                    className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-white/70 transition-colors hover:bg-white/10 ${
                        currentFolder === folder.id ? "bg-white/20" : ""
                    }`}
                >
                    <Image className="h-8 w-8" width={24} height={24} src={folder.icon} alt="" />
                    <span className="text-left">{folder.name}</span>
                </button>
            ))}
        </div>
    );
};

export default FolderList;
