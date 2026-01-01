"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import { SiGithub, SiGmail, SiLinkedin } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import React, { useState } from "react";
import { SearchProvider } from "@/lib/SearchContext";
import SearchBar from "@/components/SearchBar";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DialogContext, { DialogType, DialogData, ImagePreviewData, ConfirmationData } from "@/lib/DialogContext";
import AboutDialog from "@/components/dialogs/AboutDialog";
import ConfirmationDialog from "@/components/dialogs/ConfirmationDialog";
import ImagePreviewDialog from "@/components/dialogs/ImagePreviewDialog";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [selectedDialog, setSelectedDialog] = useState<DialogType | null>(null);
    const [dialogData, setDialogData] = useState<DialogData>(null);

    const openDialog = (dialogType: DialogType, data?: DialogData) => {
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
            case "blog-confirmation": {
                const url = (dialogData as ConfirmationData)?.url || "https://blog.abizareyhan.com";
                return <ConfirmationDialog url={url} onClose={closeDialog} />;
            }
            case "linkedin-fonsmans":
                return <ConfirmationDialog url="https://www.linkedin.com/posts/fonsmans_finder-portfolio-made-in-framer-activity-7266038502004338690-lpg5" onClose={closeDialog} />;
            case "github":
                return <ConfirmationDialog url="https://github.com/abizareyhan" onClose={closeDialog} />;
            case "linkedin":
                return <ConfirmationDialog url="https://linkedin.com/in/abizareyhan" onClose={closeDialog} />;
            case "certificate":
                return <ConfirmationDialog url="https://www.credential.net/706e4c15-202e-4d6d-a386-fb3631821700" onClose={closeDialog} />;
            case "image-preview": {
                const imageData = dialogData as ImagePreviewData;
                return imageData ? <ImagePreviewDialog imageUrl={imageData.url} imageAlt={imageData.alt} /> : null;
            }
            default:
                return null;
        }
    };

    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta name="theme-color" content="#16106E" />
                <meta
                    name="description"
                    content="Reyhan Abizar is a Software Engineer specializing in Mobile Development with 7+ years of experience building Android, iOS, and cross-platform apps using Kotlin, Flutter, and React."
                />
                <meta property="og:title" content="Reyhan Abizar - Software Engineer" />
                <meta
                    property="og:description"
                    content="Mobile Developer with 7+ years of experience. View my portfolio of Android, iOS, and cross-platform apps."
                />
                <meta property="og:image" content="https://abizareyhan.com/og-image.png" />
                <meta property="og:url" content="https://abizareyhan.com" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Reyhan Abizar - Software Engineer" />
                <meta
                    name="twitter:description"
                    content="Mobile Developer with 7+ years of experience. View my portfolio of Android, iOS, and cross-platform apps."
                />
                <meta name="twitter:image" content="https://abizareyhan.com/og-image.png" />
                <title>Reyhan Abizar - Software Engineer</title>
            </head>

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
                                            aria-label="View GitHub profile"
                                        >
                                            <SiGithub className="h-5 w-5" />
                                        </button>
                                        <button
                                            onClick={() => handleOpenDialog("linkedin")}
                                            className="transition-colors duration-300 hover:text-white"
                                            aria-label="View LinkedIn profile"
                                        >
                                            <SiLinkedin className="h-5 w-5" />
                                        </button>
                                        <a href="mailto:hi@abizareyhan.com" className="transition-colors duration-300 hover:text-white" aria-label="Send email">
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
