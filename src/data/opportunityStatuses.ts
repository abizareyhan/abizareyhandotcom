// Opportunity status messages grouped by cultural tone/region

export type RegionTone = "formal" | "professional" | "casual" | "friendly" | "indonesian";

export const opportunityStatuses: Record<RegionTone, string[]> = {
    // For Japan, Korea, formal business cultures
    formal: [
        "Not seeking new roles",
        "Currently committed",
        "Fully engaged",
        "Unavailable",
        "Not at this time",
        "Focused on current role",
        "Committed to current path",
        "Not open",
        "Currently unavailable",
        "Invested in current work",
    ],

    // For Germany, Switzerland, Netherlands - direct and professional
    professional: [
        "No",
        "Unavailable",
        "Not seeking new roles",
        "Focused on current role",
        "Currently committed",
        "Not actively looking",
        "Happily employed",
        "Settled",
        "Content where I am",
        "Thriving where I am",
    ],

    // For US, UK, Australia, Canada - casual and confident
    casual: [
        "Nope, but appreciate it",
        "All good here, thanks!",
        "Good for now",
        "I'm set, thanks",
        "Not right now",
        "Living my best (employed) life",
        "Found my place",
        "Right where I need to be",
        "Happily employed",
        "Check back later",
    ],

    // For creative/startup cultures, playful
    friendly: [
        "🔒 Locked in",
        "Status: Unavailable",
        "DND mode",
        "Mission in progress",
        "Heads down on current project",
        "Building something exciting",
        "In a committed relationship with my job",
        "Taking a break from searching",
        "Open to coffee chats only",
        "Will respond to interesting DMs",
    ],

    // For Indonesian visitors - warm, humble, friendly (but in English)
    indonesian: [
        "Focusing on current role, thanks!",
        "Already settled, appreciate it!",
        "Not now, but stay connected!",
        "Happy where I am right now",
        "Appreciate it, but I'm good!",
        "Currently happy where I am",
        "Settled and grateful",
        "On pause for now",
        "Maybe next time!",
        "Taking it easy, will let you know",
    ],
};

// Map timezone patterns to region tones
export const timezoneToTone: [RegExp, RegionTone][] = [
    // Indonesian timezones - special handling
    [/Asia\/Jakarta|Asia\/Makassar|Asia\/Jayapura/i, "indonesian"],

    // East Asian formal cultures
    [/Asia\/Tokyo|Asia\/Seoul/i, "formal"],

    // Germanic professional cultures
    [/Europe\/Berlin|Europe\/Zurich|Europe\/Vienna|Europe\/Amsterdam/i, "professional"],

    // Casual English-speaking cultures
    [/America\/New_York|America\/Los_Angeles|America\/Chicago|America\/Denver/i, "casual"],
    [/Australia\//i, "casual"],
    [/Europe\/London/i, "casual"],
    [/America\/Toronto|America\/Vancouver/i, "casual"],

    // Southeast Asian - friendly/casual mix
    [/Asia\/Singapore|Asia\/Kuala_Lumpur|Asia\/Bangkok|Asia\/Manila/i, "friendly"],

    // Indian subcontinent - professional
    [/Asia\/Kolkata|Asia\/Karachi|Asia\/Dhaka/i, "professional"],

    // Default to casual for other Americas
    [/America\//i, "casual"],

    // Default to professional for other Europe
    [/Europe\//i, "professional"],

    // Default to formal for other Asia
    [/Asia\//i, "formal"],
];

// Language hints as fallback
export const languageToTone: [RegExp, RegionTone][] = [
    [/^id|^ms/i, "indonesian"], // Indonesian, Malay
    [/^ja|^ko/i, "formal"], // Japanese, Korean
    [/^de|^nl/i, "professional"], // German, Dutch
    [/^en-US|^en-AU|^en-CA|^en-GB/i, "casual"], // English variants
    [/^zh/i, "formal"], // Chinese
    [/^th|^vi|^tl/i, "friendly"], // Thai, Vietnamese, Filipino
];
