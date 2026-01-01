import { File } from "@/lib/types/file";

export const files: File[] = [
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
            thumbnail: "/img_thumbnail_google_play_in_app_updates.avif",
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
            thumbnail: "/img_thumbnail_dynamic_app_icon_on_android.avif",
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
            thumbnail: "/img_thumbnail_hide_and_seek_robots_txt.avif",
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
            thumbnail: "/img_thumbnail_understanding_accessibility.avif",
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
            thumbnail: "/img_thumbnail_refactor_isnt_always_the_right_answer.avif",
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
            thumbnail: "/img_thumbnail_silent_quick_fixes_hurt_team.avif",
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
            thumbnail: "/img_thumbnail_tool_obsession_killing_tech_talent.avif",
        },
    },
];
