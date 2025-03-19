"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SiGithub, SiGmail, SiLinkedin } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import React, { useState, createContext, useContext } from "react";
import { SearchProvider } from "@/lib/SearchContext";
import SearchBar from "@/components/SearchBar";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

// Create a context for dialog functionality
type DialogContextType = {
    openDialog: (dialogType: DialogType, dialogData?: any) => void;
    closeDialog: () => void;
};

type DialogType = "about" | "blog-confirmation" | "linkedin-fonsmans" | "github" | "linkedin" | "certificate" | "image-preview"; // Add new dialog type for image preview

const DialogContext = createContext<DialogContextType>({
    openDialog: () => {},
    closeDialog: () => {},
});

export const useDialog = () => useContext(DialogContext);

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [selectedDialog, setSelectedDialog] = useState<DialogType | null>(null);
    const [dialogData, setDialogData] = useState<any>(null);

    const openDialog = (dialogType: DialogType, data?: any) => {
        setSelectedDialog(dialogType);
        if (data) setDialogData(data);
    };

    const closeDialog = () => {
        setSelectedDialog(null);
        setDialogData(null);
    };

    const handleOpenDialog = (dialog: DialogType) => {
        openDialog(dialog);
    };

    const renderDialogTitle = () => {
        switch (selectedDialog) {
            case "about":
                return "About";
            case "blog-confirmation":
            case "linkedin-fonsmans":
            case "github":
            case "linkedin":
            case "certificate":
                return "Confirm";
            case "image-preview":
                return "Image Preview";
            default:
                return null;
        }
    };

    const renderDialogContent = () => {
        switch (selectedDialog) {
            case "about":
                return <AboutDialog handleOpenDialog={handleOpenDialog} />;
            case "blog-confirmation":
                return ConfirmationOpenLinkDialog("https://blog.abizareyhan.com", closeDialog);
            case "linkedin-fonsmans":
                return ConfirmationOpenLinkDialog(
                    "https://www.linkedin.com/posts/fonsmans_finder-portfolio-made-in-framer-activity-7266038502004338690-lpg5",
                    closeDialog,
                );
            case "github":
                return ConfirmationOpenLinkDialog("https://github.com/abizareyhan", closeDialog);
            case "linkedin":
                return ConfirmationOpenLinkDialog("https://linkedin.com/in/abizareyhan", closeDialog);
            case "certificate":
                return ConfirmationOpenLinkDialog("https://www.credential.net/706e4c15-202e-4d6d-a386-fb3631821700", closeDialog);
            case "image-preview":
                return dialogData ? <ImagePreviewDialog imageUrl={dialogData.url} imageAlt={dialogData.alt} /> : null;
            default:
                return null;
        }
    };

    return (
        <html lang="en">
            <link rel="icon" href="/favicon.ico" sizes="any" />
            <meta name="theme-color" content="#16106E" />
            <title>Reyhan Abizar - Software Engineer</title>

            <body className={`${plusJakartaSans.className} overflow-hidden`}>
                <DialogContext.Provider value={{ openDialog, closeDialog }}>
                    <SearchProvider>
                        <div className="h-dvh w-full select-none bg-[url('https://images.unsplash.com/photo-1689005046800-38a1f4f47a51?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] p-6">
                            <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border border-white/10 bg-black/30 shadow-2xl backdrop-blur-xl">
                                <div className="flex flex-col border-b border-white/10 px-4 md:h-16 md:flex-row md:items-center md:justify-between">
                                    <div className="flex items-center justify-between py-4 md:py-0">
                                        <Link href={"/"} className="flex items-center gap-2">
                                            <Image
                                                src="https://assets.abizareyhan.com/profile.png"
                                                alt="Profile Picture"
                                                width={32}
                                                height={32}
                                                className="rounded-full"
                                            />
                                            <h1 className="text-lg text-white/90 md:text-xl">AbizaReyhan</h1>
                                        </Link>
                                        <div className="flex items-center gap-4 md:hidden">
                                            <button
                                                onClick={() => handleOpenDialog("about")}
                                                className="inline-block text-white/70 transition-colors duration-300 hover:text-white"
                                            >
                                                About
                                            </button>
                                            <button
                                                onClick={() => handleOpenDialog("blog-confirmation")}
                                                className="inline-block text-white/70 transition-colors duration-300 hover:text-white"
                                            >
                                                Blog
                                            </button>
                                        </div>
                                    </div>
                                    <div className="pb-4 md:flex md:items-center md:gap-4 md:pb-0">
                                        <div className="hidden items-center gap-4 md:flex">
                                            <button
                                                onClick={() => handleOpenDialog("about")}
                                                className="inline-block text-white/70 transition-colors duration-300 hover:text-white"
                                            >
                                                About
                                            </button>
                                            <button
                                                onClick={() => handleOpenDialog("blog-confirmation")}
                                                className="inline-block text-white/70 transition-colors duration-300 hover:text-white"
                                            >
                                                Blog
                                            </button>
                                        </div>
                                        <div className="w-full md:w-auto">
                                            <SearchBar />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-1 overflow-hidden">{children}</div>
                                <footer className="flex h-12 items-center justify-between border-t border-white/10 px-4 text-sm text-white/70">
                                    <div>
                                        Inspired by{" "}
                                        <button
                                            onClick={() => handleOpenDialog("linkedin-fonsmans")}
                                            className="inline-block text-white/70 transition-colors duration-300 hover:text-white"
                                        >
                                            Fons Mans
                                        </button>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={() => handleOpenDialog("github")}
                                            className="transition-colors duration-300 hover:text-white"
                                        >
                                            <SiGithub className="h-5 w-5" />
                                        </button>
                                        <button
                                            onClick={() => handleOpenDialog("linkedin")}
                                            className="transition-colors duration-300 hover:text-white"
                                        >
                                            <SiLinkedin className="h-5 w-5" />
                                        </button>
                                        <a href="mailto:hi@abizareyhan.com" className="transition-colors duration-300 hover:text-white">
                                            <SiGmail className="h-5 w-5" />
                                        </a>
                                    </div>
                                </footer>
                            </div>
                            <AnimatePresence>
                                {selectedDialog && (
                                    <motion.div
                                        className="fixed inset-0 z-10 flex items-center justify-center bg-black/30"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        onClick={closeDialog}
                                    >
                                        <motion.div
                                            className={`relative m-8 transform overflow-hidden rounded-xl border border-white/10 bg-[#2B3134]/30 text-left shadow-2xl backdrop-blur ${selectedDialog === "image-preview" ? "max-h-[90vh] max-w-[90vw]" : "w-full max-w-lg"}`}
                                            initial={{ scale: 0.95, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            exit={{ scale: 0.95, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="relative flex gap-2 p-4">
                                                <div className="z-20 flex gap-2">
                                                    <button
                                                        className="h-3 w-3 cursor-pointer rounded-full bg-red-500 transition-colors duration-300 hover:bg-red-400 focus:outline-none"
                                                        onClick={closeDialog}
                                                    ></button>
                                                    <div className="h-3 w-3 rounded-full bg-gray-700"></div>
                                                    <div className="h-3 w-3 rounded-full bg-gray-700"></div>
                                                </div>
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <h2 className="text-sm font-medium text-white/90">{renderDialogTitle()}</h2>
                                                </div>
                                            </div>

                                            {/* Dialog Content */}
                                            <div className={`w-full rounded-lg p-0 ${selectedDialog === "image-preview" ? "" : ""}`}>
                                                <div className="w-full sm:flex sm:items-start">
                                                    <div className="w-full text-center sm:text-left">{renderDialogContent()}</div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </SearchProvider>
                </DialogContext.Provider>
            </body>
            <GoogleAnalytics gaId="G-G9RBZJFR8E" />
        </html>
    );
}

// Image Preview Dialog Component
const ImagePreviewDialog = ({ imageUrl, imageAlt }: { imageUrl: string; imageAlt: string }) => {
    return (
        <div className="flex items-center justify-center p-4">
            <Image src={imageUrl} alt={imageAlt} width={1200} height={800} className="max-h-[70vh] w-auto object-contain" />
        </div>
    );
};

const AboutDialog = ({
    handleOpenDialog,
}: {
    handleOpenDialog: (dialog: "about" | "blog-confirmation" | "linkedin-fonsmans" | "github" | "linkedin" | "certificate") => void;
}) => {
    const lastUpdated = new Date("2024-03-01T15:00:00+07:00");

    return (
        <div className="flex w-full flex-col items-center space-y-4 p-4">
            <Image src="https://assets.abizareyhan.com/profile.png" alt="Profile Picture" width={64} height={64} className="rounded-full" />
            <div className="flex w-full flex-col items-center">
                <p className="text-center text-lg font-bold text-white">Muhammad Reyhan Abizar</p>
                <p className="text-center text-xs text-white/70">Software Engineer since 2017</p>
            </div>
            <div className="flex w-full flex-col rounded border border-white/10">
                <div className="divide-y divide-zinc-700 text-xs">
                    <div className="flex items-start justify-between space-x-10 p-2">
                        <span className="flex-none text-zinc-400">Specialization</span>
                        <span className="max-w-full flex-wrap break-words text-end text-white">Mobile Development</span>
                    </div>
                    <div className="flex items-start justify-between space-x-12 p-2">
                        <span className="flex-none text-zinc-400">Tech Stack</span>
                        <span className="max-w-full flex-wrap break-words text-end text-white">
                            Kotlin, Kotlin Multiplatform, Java, Flutter, React, Tailwind, Next.js, PHP, Laravel, SQL, Firebase, and more.
                        </span>
                    </div>
                    <div className="flex items-start justify-between space-x-10 p-2">
                        <span className="flex-none text-zinc-400">Current Employment</span>
                        <span className="max-w-full flex-wrap break-words text-end text-white">Full Time at PGI Data as Android Developer</span>
                    </div>
                    <div className="flex items-start justify-between space-x-10 p-2">
                        <span className="flex-none text-zinc-400">Open for Opportunity</span>
                        <span className="max-w-full flex-wrap break-words text-end text-white">Yes, but not actively looking</span>
                    </div>
                    {/* <div className="flex items-start justify-between space-x-10 p-2">
                        <span className="flex-none text-zinc-400">Latest Certification</span>
                        <div className="max-w-full flex-wrap space-y-2 break-words text-end text-white">
                            <span className="max-w-full flex-wrap break-words text-end text-white">
                                Google Play Academy - Store Listing Certificate
                            </span>
                            <div className="flex max-w-full flex-col flex-wrap items-end space-y-2 break-words text-end">
                                <button
                                    className="shadow-apple relative w-auto rounded-[5px] bg-[#007AFF] px-[7px] py-[3px] text-xs text-white"
                                    onClick={() => handleOpenDialog("certificate")}
                                >
                                    <span className="absolute inset-0 rounded-[5px] bg-gradient-to-b from-white to-transparent opacity-[.17]"></span>
                                    View Certificate
                                </button>
                            </div>
                        </div>
                    </div> */}
                    <div className="flex items-center justify-between space-x-10 p-2">
                        <span className="flex-none text-zinc-400">Resume</span>
                        <div className="flex max-w-full flex-col flex-wrap items-end space-y-2 break-words text-end">
                            <button
                                className="shadow-apple relative w-auto rounded-[5px] bg-[#007AFF] px-[7px] py-[3px] text-xs text-white"
                                onClick={() => {}}
                            >
                                <span className="absolute inset-0 rounded-[5px] bg-gradient-to-b from-white to-transparent opacity-[.17]"></span>
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-end space-x-4 text-white/70">
                <span className="text-start text-xs">
                    Last updated {lastUpdated.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                </span>
                <div className="flex-1"></div>
                <button onClick={() => handleOpenDialog("github")} className="transition-colors duration-300 hover:text-white">
                    <SiGithub className="h-5 w-5" />
                </button>
                <button onClick={() => handleOpenDialog("linkedin")} className="transition-colors duration-300 hover:text-white">
                    <SiLinkedin className="h-5 w-5" />
                </button>
                <a href="mailto:hi@abizareyhan.com" className="transition-colors duration-300 hover:text-white">
                    <SiGmail className="h-5 w-5" />
                </a>
            </div>
        </div>
    );
};

const ConfirmationOpenLinkDialog = (url: string, setSelectedDialog: (dialog: null) => void) => {
    return (
        <div className="flex w-full flex-col p-4">
            <p className="text-sm text-white/70">This link is taking you to the following website</p>
            <div className="mt-2 flex w-full flex-col rounded border border-white/10">
                <div className="divide-y divide-zinc-700 p-2 text-xs">
                    <span className="max-w-full flex-wrap break-words text-start text-white">{url}</span>
                </div>
            </div>
            <div className="mt-6 flex w-full justify-end space-x-2">
                <button
                    className="shadow-apple relative rounded-[5px] bg-[#007AFF] px-[7px] py-[3px] text-xs text-white"
                    onClick={() => {
                        setSelectedDialog(null);
                        window.open(url, "_blank");
                    }}
                >
                    <span className="rounded-[5px]bg-gradient-to-b absolute inset-0 from-white to-transparent opacity-[.17]"></span>
                    Open Link
                </button>
                <button
                    className="shadow-apple relative rounded-[5px] bg-white px-[7px] py-[3px] text-xs text-black"
                    onClick={() => setSelectedDialog(null)}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};
