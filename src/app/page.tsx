"use client";

import Fuse from "fuse.js";

import { useState, useEffect, useCallback } from "react";
import { File } from "@/lib/types/file";
import { Folder } from "@/lib/types/folder";

import FolderList from "@/components/FolderList";
import FileList from "@/components/FileList";
import FilePreview from "@/components/FilePreview";

import { useSearch } from "@/lib/SearchContext";

const folders: Folder[] = [
    { id: "all-projects", name: "All Projects", icon: "/ic_macos_default_folder.png" },
    { id: "gravel", name: "Gravel", icon: "/ic_macos_default_folder.png" },
    { id: "zenius", name: "Zenius", icon: "/ic_macos_default_folder.png" },
    { id: "kisel", name: "Kisel Indonesia", icon: "/ic_macos_default_folder.png" },
    { id: "freelance", name: "Freelance", icon: "/ic_macos_default_folder.png" },
    { id: "personal", name: "Personal", icon: "/ic_macos_default_folder.png" },
    { id: "blog-posts", name: "Blog Posts", icon: "/ic_file_notes.png" },
    { id: "others", name: "Others", icon: "/ic_file_launchpad.png" },
];

const files: File[] = [
    {
        id: "gravel-android",
        name: "Gravel",
        iconPath: "/ic_file_kotlin.png",
        folder: ["all-projects", "gravel"],
        metadata: {
            description: "An app that helps people in Indonesia find and hire construction workers easily.",
            startDate: new Date("2023-02-01"),
            endDate: new Date("2024-10-31"),
            thumbnail: "/img_preview_placeholder.png",
            tags: ["Android", "Kotlin"],
        },
    },
    {
        id: "gravel-dulur-android",
        name: "Gravel Dulur",
        iconPath: "/ic_file_kotlin.png",
        folder: ["all-projects", "gravel"],
        metadata: {
            description: "An app for construction workers to find jobs, track their attendance, report progress, and receive payments.",
            startDate: new Date("2023-02-01"),
            endDate: new Date("2024-10-31"),
            thumbnail: "/img_preview_placeholder.png",
            tags: ["Android", "Kotlin"],
        },
    },
    {
        id: "zenius-android-v2",
        name: "Zenius Mobile v2",
        iconPath: "/ic_file_kotlin.png",
        folder: ["all-projects", "zenius"],
        metadata: {
            description: "An educational app for students in Indonesia that provides video lessons, exercises, live classes, and tryouts.",
            startDate: new Date("2020-02-01"),
            endDate: new Date("2023-01-31"),
            thumbnail: "/img_preview_zenius_v2.png",
            tags: ["Android", "Kotlin"],
        },
    },
    {
        id: "zenius-mobile-v1",
        name: "Zenius Mobile v1",
        iconPath: "/ic_file_flutter.png",
        folder: ["all-projects", "zenius"],
        metadata: {
            description: "An early version of the Zenius Mobile app, built with Flutter, offering video lessons and practice exercises.",
            startDate: new Date("2019-05-01"),
            endDate: new Date("2020-05-31"),
            thumbnail: "/img_preview_placeholder.png",
            tags: ["Android", "iOS", "Flutter"],
        },
    },
    {
        id: "kisel-topup-outlet",
        name: "Topup Outlet",
        iconPath: "/ic_file_android.png",
        folder: ["all-projects", "kisel"],
        metadata: {
            description: "An app for Warung owners to handle PPOB transactions quickly and efficiently.",
            startDate: new Date("2018-07-01"),
            endDate: new Date("2019-04-30"),
            thumbnail: "/img_preview_placeholder.png",
            tags: ["Android", "Java", "Kotlin"],
        },
    },
    {
        id: "kisel-topup-canvasser",
        name: "Topup Canvasser",
        iconPath: "/ic_file_android.png",
        folder: ["all-projects", "kisel"],
        metadata: {
            description: "An app for Kisel Indonesia staff to visit and register new Warung owners as partners.",
            startDate: new Date("2018-07-01"),
            endDate: new Date("2019-04-30"),
            thumbnail: "/img_preview_placeholder.png",
            tags: ["Android", "Java", "Kotlin"],
        },
    },
    {
        id: "lexus-reach-indonesia",
        name: "Lexus Reach Indonesia",
        iconPath: "/ic_file_flutter.png",
        folder: ["all-projects", "freelance"],
        metadata: {
            description: "An app that helps Lexus users book services, find exclusive parking spots, and contact a concierge for assistance anytime.",
            startDate: new Date("2019-07-01"),
            endDate: new Date("2019-09-30"),
            thumbnail: "/img_preview_placeholder.png",
            tags: ["Android", "iOS", "Flutter"],
        },
    },
    {
        id: "nutri-cal",
        name: "Nutri Cal",
        iconPath: "/ic_file_kotlin.png",
        folder: ["all-projects", "freelance"],
        metadata: {
            description: "An app made for nutrition doctors to calculate patient diets and manage their prescriptions easily.",
            startDate: new Date("2023-08-01"),
            endDate: new Date("2023-10-31"),
            thumbnail: "/img_preview_placeholder.png",
            tags: ["Android", "iOS", "Kotlin Multiplatform", "SwiftUI"],
        },
    },
    {
        id: "yoctolife",
        name: "YoctoLife",
        iconPath: "/ic_file_kotlin.png",
        folder: ["all-projects", "personal"],
        metadata: {
            description: "A concept of text based life simulation game with real world maps",
            tags: ["Android", "Kotlin", "Game"],
        },
    },
    {
        id: "yakado",
        name: "YaKado",
        iconPath: "/ic_file_nextjs.png",
        folder: ["all-projects", "personal"],
        metadata: {
            description: "An app that helps Indonesian people to find the perfect gift for any occasion with a simple and easy way.",
            tags: ["Web", "Next.js", "React", "Tailwind CSS"],
        },
    },
    {
        id: "playpublish",
        name: "PlayPublish",
        iconPath: "/ic_file_terminal.png",
        folder: ["all-projects", "personal"],
        metadata: {
            description: "A simple CLI tool to automate the process of uploading Android apps to Google Play Store.",
            tags: ["CLI", "Node.js", "Google Play Store"],
        },
    },
    {
        id: "blog-google-play-in-app-updates",
        name: "A step-by-step guide to setting up Google Play In-App Updates",
        iconPath: "/ic_file_notes.png",
        folder: ["blog-posts"],
        metadata: {
            description: "Learn how to implement Google Play In-App Updates in your Android app to provide a seamless user experience.",
            tags: ["Android", "Google Play Store", "In-App Updates"],
        },
    },
    {
        id: "blog-android-dynamic-app-icons",
        name: "Dynamic App Icons on Android using activity-alias",
        iconPath: "/ic_file_notes.png",
        folder: ["blog-posts"],
        metadata: {
            description: "Discover how to create dynamic app icons on Android using activity-alias to provide a personalized experience for users.",
            tags: ["Android", "App Icons", "Activity-Alias"],
        },
    },
    {
        id: "blog-robots-txt",
        name: "Hide & Seek with Search Engine using Robots.txt",
        iconPath: "/ic_file_notes.png",
        folder: ["blog-posts"],
        metadata: {
            description: "Learn how to use robots.txt to control search engine crawlers and prevent specific pages from appearing in search results.",
            tags: ["SEO", "Robots.txt", "Search Engine"],
        },
    },
];

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
    const { searchQuery } = useSearch();

    const [currentFolder, setCurrentFolder] = useState("all-projects");

    // Add mobile view state
    type MobileViewState = "folders" | "files" | "preview";
    const [mobileViewState, setMobileViewState] = useState<MobileViewState>("folders");

    // State to track if device is mobile
    const [isMobile, setIsMobile] = useState(false);

    const [currentFile, setCurrentFile] = useState<File | null>(null);

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
        if (isMobile) {
            setMobileViewState("files");
        }

        setTimeout(() => {
            setCurrentFolder(folderId);
            setCurrentFile(null);
        }, 250);
    };

    // Custom file selection handler for mobile
    const handleFileSelect = (file: File) => {
        if (isMobile) {
            setMobileViewState("preview");
        }

        setTimeout(() => {
            setCurrentFile(file);
        }, 100);
    };

    // Handle back button press
    const handleBack = () => {
        if (mobileViewState === "preview") {
            setMobileViewState("files");
        } else if (mobileViewState === "files") {
            setMobileViewState("folders");
        }
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
                    showBackButton={mobileViewState === "files"}
                />
            </div>
            <div className={`md:block md:w-[480px] ${mobileViewState === "preview" ? "flex w-full" : "hidden"}`}>
                <FilePreview currentFile={currentFile} onBack={handleBack} showBackButton={mobileViewState === "preview"} />
            </div>
        </div>
    );
}
