// FileList.tsx
import React from "react";
import { File } from "@/lib/types/file";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FileListProps {
    files: File[];
    filteredFiles: File[];
    setCurrentFile: (file: File) => void;
    currentFile: File | null;
    onBack?: () => void;
    showBackButton?: boolean;
}

const FileList: React.FC<FileListProps> = ({ files, filteredFiles, setCurrentFile, currentFile, onBack, showBackButton = false }) => {
    return (
        <div className="flex flex-1 flex-col overflow-hidden w-full">
            {showBackButton && (
                <button 
                    onClick={onBack} 
                    className="flex items-center gap-2 text-white/70 p-2 hover:bg-white/10 rounded-md mb-2 transition-colors"
                >
                    <ChevronLeft className="h-4 w-4" />
                    <span>Back to folders</span>
                </button>
            )}
            <div className="flex-1 overflow-y-auto">
                <AnimatePresence mode="popLayout">
                    {filteredFiles.length > 0 ? (
                        filteredFiles.map((file) => (
                            <motion.button
                                key={file.id}
                                onClick={() => setCurrentFile(file)}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                                className={`flex w-full items-center gap-3 px-4 py-3 transition-colors ${
                                    currentFile?.id === file.id ? "bg-white/20" : "hover:bg-white/5"
                                }`}
                            >
                                <Image className="h-8 w-8" width={24} height={24} src={file.iconPath} alt={`${file.name} icon`} />
                                <span className="flex-1 truncate text-left text-white/90">{file.name}</span>
                                <ChevronRight className="h-4 w-4 flex-shrink-0 text-white/40" />
                            </motion.button>
                        ))
                    ) : (
                        <motion.div
                            key="no-files"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="flex h-full w-full items-center justify-center text-white/40"
                        >
                            No files available
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default FileList;
