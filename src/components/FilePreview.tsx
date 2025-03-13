import React from "react";
import { File } from "@/lib/types/file";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft } from "lucide-react";

interface FilePreviewProps {
    currentFile: File | null;
    onBack?: () => void;
    showBackButton?: boolean;
}

const FilePreview: React.FC<FilePreviewProps> = ({ currentFile, onBack, showBackButton = false }) => {
    return (
        <div className="h-full w-full space-y-4 overflow-y-auto border-l border-white/10 p-4 md:w-[480px]">
            {showBackButton && (
                <button onClick={onBack} className="mb-2 flex items-center gap-2 rounded-md p-2 text-white/70 transition-colors hover:bg-white/10">
                    <ChevronLeft className="h-4 w-4" />
                    <span>Back to files</span>
                </button>
            )}
            <AnimatePresence mode="wait">
                {currentFile ? (
                    <motion.div
                        key={currentFile.name}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                    >
                        {currentFile.metadata?.thumbnail && (
                            <div className="relative aspect-[2204/1536] overflow-hidden rounded-lg bg-white/5">
                                <Image src={currentFile.metadata?.thumbnail} alt="" fill className="object-cover" />
                            </div>
                        )}
                        <div className="mt-4 space-y-4">
                            <div>
                                <h2 className="text-lg font-medium text-white/90">{currentFile.name}</h2>
                                <p className="text-sm text-white/70">{currentFile.metadata?.description ?? ""}</p>
                            </div>

                            <div className="space-y-2">
                                {currentFile.metadata?.startDate && currentFile.metadata?.endDate && (
                                    <div className="flex justify-between space-x-2">
                                        <span className="text-white/40">Date</span>
                                        <span className="text-white/90">
                                            {currentFile.metadata?.startDate.toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                            })}{" "}
                                            -{" "}
                                            {currentFile.metadata?.endDate?.toLocaleDateString("en-US", {
                                                year: "numeric",
                                                month: "long",
                                            })}
                                        </span>
                                    </div>
                                )}
                                {currentFile.metadata?.tags && (
                                    <div className="flex justify-between">
                                        <span className="text-white/40">Tags</span>
                                        <div className="flex flex-wrap justify-end gap-2">
                                            {currentFile?.metadata?.tags.map((tag) => (
                                                <span key={tag} className="rounded-full bg-white/10 px-2 py-1 text-xs text-white/90">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="no-file"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="flex h-full items-center justify-center text-white/40"
                    >
                        Select a file to preview
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FilePreview;
