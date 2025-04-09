"use client";

import Fuse from "fuse.js";

import { useState, useEffect, useCallback } from "react";
import { File } from "@/lib/types/file";
import { Folder } from "@/lib/types/folder";

import FolderList from "@/components/FolderList";
import FileList from "@/components/FileList";
import FilePreview from "@/components/FilePreview";

import { useSearch } from "@/lib/SearchContext";
import { useDialog } from "@/lib/DialogContext";

const folders: Folder[] = [
    { id: "all-projects", name: "All Projects", icon: "/ic_macos_default_folder.png" },
    { id: "pgi-data", name: "Platinumetrix Global Inovasi", icon: "/ic_macos_default_folder.png" },
    { id: "gravel", name: "Gravel", icon: "/ic_macos_default_folder.png" },
    { id: "zenius", name: "Zenius", icon: "/ic_macos_default_folder.png" },
    { id: "kisel", name: "Kisel Indonesia", icon: "/ic_macos_default_folder.png" },
    { id: "freelance", name: "Freelance", icon: "/ic_macos_default_folder.png" },
    { id: "personal", name: "Personal", icon: "/ic_macos_default_folder.png" },
    { id: "blog-posts", name: "Blog Posts", icon: "/ic_file_notes.png" },
    // { id: "others", name: "Others", icon: "/ic_file_launchpad.png" },
];

const files: File[] = [
    {
        id: "gomamam-customer",
        name: "GoMamam",
        iconPath: "/ic_file_android.png",
        folder: ["all-projects", "pgi-data"],
        metadata: {
            description: "A food delivery app for customers in Brunei to browse restaurants, place orders, and track deliveries in real-time.",
            startDate: new Date("2024-11-01"),
            thumbnail: "/img_preview_gomamam.avif",
            tags: ["Android", "Kotlin", "Java"],
        },
    },
    {
        id: "gomamam-partner",
        name: "GoMamam Partner",
        iconPath: "/ic_file_android.png",
        folder: ["all-projects", "pgi-data"],
        metadata: {
            description:
                "A companion app for restaurants and drivers in Brunei to manage orders, track deliveries, and process payments on the GoMamam platform.",
            startDate: new Date("2024-11-01"),
            thumbnail: "/img_preview_gomamam_partner.avif",
            tags: ["Android", "Kotlin", "Java"],
        },
    },
    {
        id: "gravel-android",
        name: "Gravel",
        iconPath: "/ic_file_kotlin.png",
        folder: ["all-projects", "gravel"],
        metadata: {
            description: "An app that helps people in Indonesia find and hire construction workers easily.",
            startDate: new Date("2023-02-01"),
            endDate: new Date("2024-10-31"),
            thumbnail: "/img_preview_gravel.avif",
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
            thumbnail: "/img_preview_gravel_dulur.avif",
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
            endDate: new Date("2022-08-31"),
            thumbnail: "/img_preview_zenius_v2.avif",
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
            thumbnail: "/img_preview_zenius_v1.avif",
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
            // thumbnail: "/img_preview_placeholder.png",
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
            // thumbnail: "/img_preview_placeholder.png",
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
            thumbnail: "/img_preview_lexus.avif",
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
            thumbnail: "/img_preview_nutri_cal.avif",
            tags: ["Android", "iOS", "Kotlin Multiplatform", "SwiftUI", "Jetpack Compose"],
        },
    },
    // {
    //     id: "yoctolife",
    //     name: "YoctoLife",
    //     iconPath: "/ic_file_kotlin.png",
    //     folder: ["all-projects", "personal"],
    //     metadata: {
    //         description: "A concept of text based life simulation game with real world maps",
    //         thumbnail: "/img_preview_placeholder.png",
    //         tags: ["Android", "Kotlin", "Game"],
    //     },
    // },
    // {
    //     id: "yakado",
    //     name: "YaKado",
    //     iconPath: "/ic_file_nextjs.png",
    //     folder: ["all-projects", "personal"],
    //     metadata: {
    //         description: "An app that helps Indonesian people to find the perfect gift for any occasion with a simple and easy way.",
    //         tags: ["Web", "Next.js", "React", "Tailwind CSS"],
    //     },
    // },
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
            description:
                "A comprehensive guide on implementing Google Play's In-App Updates in Android apps. Learn how to set up both Flexible and Immediate update flows, handle user interactions, and ensure a smooth update experience for your users.",
            tags: ["Android", "Google Play Store", "In-App Updates"],
            url: "https://blog.abizareyhan.com/google-play-in-app-updates-step-by-step/",
            thumbnail: "https://blog.abizareyhan.com/content/images/size/w1140/2025/04/1_A9OejVSjDqpTGthHTADCSw.png",
        },
    },
    {
        id: "blog-android-dynamic-app-icons",
        name: "Dynamic App Icons on Android using activity-alias",
        iconPath: "/ic_file_notes.png",
        folder: ["blog-posts"],
        metadata: {
            description:
                "A technical deep dive into implementing dynamic app icons on Android using activity-alias in the manifest file. Discover how popular apps like Discord and Twitter achieve icon switching, with practical code examples and best practices.",
            tags: ["Android", "App Icons", "Activity-Alias"],
            url: "https://blog.abizareyhan.com/dynamic-app-icon-on-android/",
            thumbnail: "https://blog.abizareyhan.com/content/images/size/w1140/2025/04/Thumbnail.png",
        },
    },
    {
        id: "blog-robots-txt",
        name: "Hide & Seek with Search Engine using Robots.txt",
        iconPath: "/ic_file_notes.png",
        folder: ["blog-posts"],
        metadata: {
            description:
                "An in-depth exploration of robots.txt, the crucial file that controls search engine behavior. Learn about its syntax, common use cases, and how to effectively manage search engine crawling and indexing of your website content.",
            tags: ["SEO", "Robots.txt", "Search Engine"],
            url: "https://blog.abizareyhan.com/hide-and-seek-with-search-engine-using-robots-txt/",
            thumbnail: "https://blog.abizareyhan.com/content/images/size/w1140/2025/04/photo-1563209259-2819dbb22d93.jpeg",
        },
    },
    {
        id: "blog-understanding-the-important-of-accessibility",
        name: "Understanding The Important Of Accessibility",
        iconPath: "/ic_file_notes.png",
        folder: ["blog-posts"],
        metadata: {
            description:
                "A comprehensive overview of digital accessibility (a11y) and its crucial role in modern technology. Explore key concepts, implementation strategies, and real-world examples of inclusive design in websites, apps, and gaming platforms.",
            tags: ["Accessibility", "User Experience"],
            url: "https://blog.abizareyhan.com/understanding-the-important-of-accessibility/",
            thumbnail: "https://blog.abizareyhan.com/content/images/size/w1140/2025/04/9dffb9047212d33921346b42f2b4f99fe52e5876-scaled.jpg",
        },
    },
    {
        id: "blog-refactor-isnt-always-the-right-answer",
        name: "Refactor Isn't Always the Right Answer",
        iconPath: "/ic_file_notes.png",
        folder: ["blog-posts"],
        metadata: {
            description:
                "A critical examination of when code refactoring might do more harm than good. Explore the hidden costs of refactoring, learn to identify when to leave working code alone, and understand how to make better engineering decisions for your team.",
            tags: ["Code Quality", "Software Development"],
            url: "https://blog.abizareyhan.com/refactor-isnt-always-the-right-answer/",
            thumbnail:
                "https://images.unsplash.com/photo-1556075798-4825dfaaf498?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDN8fGdpdGh1YnxlbnwwfHx8fDE3NDQxMjk4ODh8MA&ixlib=rb-4.0.3&q=80&w=960",
        },
    },
    {
        id: "blog-why-silent-quick-fixes-hurt-your-team",
        name: "Why Silent Quick Fixes Hurt Your Team",
        iconPath: "/ic_file_notes.png",
        folder: ["blog-posts"],
        metadata: {
            description:
                "An analysis of how undocumented quick fixes can accumulate technical debt and harm team collaboration. Learn about the importance of communication in software development and strategies to maintain code quality while fixing urgent issues.",
            tags: ["Team Collaboration", "Communication"],
            url: "https://blog.abizareyhan.com/why-silent-quick-fixes-hurt-your-team/",
            thumbnail:
                "https://images.unsplash.com/photo-1583413230888-c7b03057be03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI0fHxicm9rZW4lMjBzY3JlZW58ZW58MHx8fHwxNzQ0MTMwOTI1fDA&ixlib=rb-4.0.3&q=80&w=960",
        },
    },
    {
        id: "blog-the-tool-obsession-killing-tech-talent",
        name: "The Tool Obsession Killing Tech Talent",
        iconPath: "/ic_file_notes.png",
        folder: ["blog-posts"],
        metadata: {
            description:
                "A critical look at how excessive focus on specific tools and frameworks affects tech hiring. Explore why fundamental engineering skills matter more than tool expertise, and how companies can improve their hiring processes.",
            tags: ["Careers"],
            url: "https://blog.abizareyhan.com/the-tool-obsession-killing-tech-talent/",
            thumbnail:
                "https://images.unsplash.com/photo-1513258496099-48168024aec0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDV8fEZydXN0cmF0ZWQlMjBwcm9ncmFtbWVyJTIwYXQlMjBjb21wdXRlcnxlbnwwfHx8fDE3NDQxMjc1MDN8MA&ixlib=rb-4.0.3&q=80&w=960",
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
    const { searchQuery, setSearchQuery } = useSearch();
    const { openDialog } = useDialog(); // Use the dialog context

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
        const transitionDelay = isMobile ? 300 : 0;

        if (isMobile) {
            setMobileViewState("files");
            setSearchQuery("");
        }

        setTimeout(() => {
            setCurrentFolder(folderId);
            setCurrentFile(null);
        }, transitionDelay);
    };

    // Custom file selection handler for mobile
    const handleFileSelect = (file: File) => {
        const transitionDelay = isMobile ? 250 : 0;

        if (isMobile) {
            setMobileViewState("preview");
            setSearchQuery("");
        }

        setTimeout(() => {
            setCurrentFile(file);
        }, transitionDelay);
    };

    // Handle back button press
    const handleBack = () => {
        if (mobileViewState === "preview") {
            setMobileViewState("files");
        } else if (mobileViewState === "files") {
            setMobileViewState("folders");
        }
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
                    showBackButton={mobileViewState === "files"}
                />
            </div>
            <div className={`md:block md:w-[480px] ${mobileViewState === "preview" ? "flex w-full" : "hidden"}`}>
                <FilePreview
                    currentFile={currentFile}
                    onBack={handleBack}
                    showBackButton={mobileViewState === "preview"}
                    onOpenImageDialog={handleOpenImageDialog}
                />
            </div>
        </div>
    );
}
