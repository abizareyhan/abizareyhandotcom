"use client";

import Fuse from "fuse.js";

import { useState, useEffect, useCallback } from "react";
import { File } from "@/lib/types/file";

import FolderList from "@/components/FolderList";
import FileList from "@/components/FileList";
import FilePreview from "@/components/FilePreview";

import { useSearch } from "@/lib/SearchContext";
import { useDialog } from "@/lib/DialogContext";

import { folders } from "@/data/folders";
import { files } from "@/data/projects";

const fuseOptions = {
    includeScore: true,
    threshold: 0.3,
    distance: 100,
    minMatchCharLength: 2,
    ignoreLocation: true,
    useExtendedSearch: true,
    keys: [
        { name: "name", weight: 0.5 },
        { name: "metadata.description", weight: 0.5 },
    ],
};

const fuse = new Fuse(files, fuseOptions);

export default function Home() {
    const { searchQuery, setSearchQuery } = useSearch();
    const { openDialog } = useDialog(); // Use the dialog context

    const [currentFolder, setCurrentFolder] = useState("all-projects");

    // Add mobile view state
    type MobileViewState = "folders" | "files" | "preview";
    const [mobileViewState, setMobileViewState] = useState<MobileViewState>("folders");

    // State to track if device is mobile
    const [isMobile, setIsMobile] = useState(false);

    const [currentFile, setCurrentFile] = useState<File | null>(null);

    // History state key for sessionStorage
    const STORAGE_KEY = "portfolio-nav-state";

    // Save current navigation state to sessionStorage
    const saveNavState = useCallback(() => {
        const state = {
            folder: currentFolder,
            fileId: currentFile?.id || null,
            mobileView: mobileViewState,
        };
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }, [currentFolder, currentFile, mobileViewState]);

    // Restore navigation state from sessionStorage on mount
    useEffect(() => {
        const savedState = sessionStorage.getItem(STORAGE_KEY);
        if (savedState) {
            try {
                const state = JSON.parse(savedState);
                if (state.folder) setCurrentFolder(state.folder);
                if (state.fileId) {
                    const file = files.find((f) => f.id === state.fileId);
                    if (file) setCurrentFile(file);
                }
                if (state.mobileView) setMobileViewState(state.mobileView);
            } catch {
                // Invalid state, ignore
            }
        }
    }, []);

    // Save state whenever it changes
    useEffect(() => {
        saveNavState();
    }, [saveNavState]);

    // Push browser history state when navigating
    const pushHistoryState = useCallback(
        (folder: string, fileId: string | null, mobileView: MobileViewState) => {
            const state = { folder, fileId, mobileView };
            const hash = fileId ? `#${folder}/${fileId}` : `#${folder}`;
            window.history.pushState(state, "", hash);
        },
        [],
    );

    // Handle browser back/forward button
    useEffect(() => {
        const handlePopState = (event: PopStateEvent) => {
            if (event.state) {
                const { folder, fileId, mobileView } = event.state;
                if (folder) setCurrentFolder(folder);
                if (fileId) {
                    const file = files.find((f) => f.id === fileId);
                    setCurrentFile(file || null);
                } else {
                    setCurrentFile(null);
                }
                if (mobileView) setMobileViewState(mobileView);
            } else {
                // No state - go to initial view
                setCurrentFolder("all-projects");
                setCurrentFile(null);
                setMobileViewState("folders");
            }
        };

        window.addEventListener("popstate", handlePopState);
        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    // Initialize history state on mount
    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const parts = hash.split("/");
            const folder = parts[0] || "all-projects";
            const fileId = parts[1] || null;
            setCurrentFolder(folder);
            if (fileId) {
                const file = files.find((f) => f.id === fileId);
                if (file) {
                    setCurrentFile(file);
                    setMobileViewState("preview");
                } else {
                    setMobileViewState("files");
                }
            } else {
                setMobileViewState("files");
            }
        } else {
            // Set initial history state
            window.history.replaceState({ folder: "all-projects", fileId: null, mobileView: "folders" }, "", "");
        }
    }, []);

    const fuseResults = searchQuery ? fuse.search(searchQuery) : [];

    const filteredFiles = files.filter((file) => {
        const isInCurrentFolder = file.folder.includes(currentFolder);

        if (!searchQuery) return isInCurrentFolder;

        const isInFuseResults = fuseResults.some((result) => result.item === file);
        const isTagMatched = file.metadata?.tags?.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ?? false;

        return isInCurrentFolder && (isInFuseResults || isTagMatched);
    });

    // Watch for search input changes to update mobile view state
    useEffect(() => {
        if (isMobile && searchQuery && mobileViewState !== "files") {
            setMobileViewState("files");
        }
    }, [searchQuery, isMobile, mobileViewState]);

    // Check screen size on component mount and resize
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkScreenSize();

        // Add event listener for window resize
        window.addEventListener("resize", checkScreenSize);

        // Cleanup event listener
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    // Custom folder selection handler for mobile
    const handleFolderSelect = (folderId: string) => {
        const transitionDelay = isMobile ? 300 : 0;
        const newMobileView: MobileViewState = isMobile ? "files" : mobileViewState;

        if (isMobile) {
            setMobileViewState("files");
            setSearchQuery("");
        }

        setTimeout(() => {
            setCurrentFolder(folderId);
            setCurrentFile(null);
            pushHistoryState(folderId, null, newMobileView);
        }, transitionDelay);
    };

    // Custom file selection handler for mobile
    const handleFileSelect = (file: File) => {
        const transitionDelay = isMobile ? 250 : 0;
        const newMobileView: MobileViewState = isMobile ? "preview" : mobileViewState;

        if (isMobile) {
            setMobileViewState("preview");
            setSearchQuery("");
        }

        setTimeout(() => {
            setCurrentFile(file);
            pushHistoryState(currentFolder, file.id, newMobileView);
        }, transitionDelay);
    };

    // Handle back button press
    const handleBack = () => {
        // Use browser history for back navigation
        window.history.back();
    };

    // Handler for opening the image dialog using the shared dialog component
    const handleOpenImageDialog = (imageUrl: string, imageAlt: string) => {
        openDialog("image-preview", { url: imageUrl, alt: imageAlt });
    };

    return (
        <div className="flex h-full w-full flex-row md:flex md:flex-row">
            <div className={`md:block md:w-80 ${mobileViewState === "folders" ? "flex w-full" : "hidden"}`}>
                <FolderList folders={folders} currentFolder={currentFolder} setCurrentFolder={handleFolderSelect} setCurrentFile={setCurrentFile} />
            </div>
            <div className={`md:flex md:flex-1 ${mobileViewState === "files" ? "flex w-full" : "hidden"}`}>
                <FileList
                    files={files}
                    filteredFiles={filteredFiles}
                    setCurrentFile={handleFileSelect}
                    currentFile={currentFile}
                    onBack={handleBack}
                    showBackButton={isMobile && mobileViewState === "files"}
                />
            </div>
            <div className={`md:block md:w-[480px] ${mobileViewState === "preview" ? "flex w-full" : "hidden"}`}>
                <FilePreview
                    currentFile={currentFile}
                    onBack={handleBack}
                    showBackButton={isMobile && mobileViewState === "preview"}
                    onOpenImageDialog={handleOpenImageDialog}
                />
            </div>
        </div>
    );
}
