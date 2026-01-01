import Image from "next/image";
import { SiGithub, SiLinkedin, SiGmail } from "@icons-pack/react-simple-icons";
import { DialogType } from "@/lib/DialogContext";
import { useState, useEffect } from "react";
import { getOpportunityStatus } from "@/lib/getOpportunityStatus";

interface AboutDialogProps {
    handleOpenDialog: (dialog: DialogType) => void;
}

const AboutDialog = ({ handleOpenDialog }: AboutDialogProps) => {
    const lastUpdated = new Date("2024-03-01T15:00:00+07:00");
    const [opportunityStatus, setOpportunityStatus] = useState<string | null>(null);

    // Detect region and set appropriate message on client mount
    useEffect(() => {
        setOpportunityStatus(getOpportunityStatus());
    }, []);

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
                        <span className="max-w-full flex-wrap break-words text-end text-white">
                            {opportunityStatus ?? "—"}
                        </span>
                    </div>
                    <div className="flex items-center justify-between space-x-10 p-2">
                        <span className="flex-none text-zinc-400">Resume</span>
                        <div className="flex max-w-full flex-col flex-wrap items-end space-y-2 break-words text-end">
                            <button
                                className="shadow-apple relative w-auto rounded-[5px] bg-[#007AFF] px-[7px] py-[3px] text-xs text-white"
                                onClick={() => {
                                    window.open("https://assets.abizareyhan.com/resume.pdf", "_blank");
                                }}
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
                <button onClick={() => handleOpenDialog("github")} className="transition-colors duration-300 hover:text-white" aria-label="View GitHub profile">
                    <SiGithub className="h-5 w-5" />
                </button>
                <button onClick={() => handleOpenDialog("linkedin")} className="transition-colors duration-300 hover:text-white" aria-label="View LinkedIn profile">
                    <SiLinkedin className="h-5 w-5" />
                </button>
                <a href="mailto:hi@abizareyhan.com" className="transition-colors duration-300 hover:text-white" aria-label="Send email">
                    <SiGmail className="h-5 w-5" />
                </a>
            </div>
        </div>
    );
};

export default AboutDialog;
