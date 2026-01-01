import {
    opportunityStatuses,
    timezoneToTone,
    languageToTone,
    RegionTone,
} from "@/data/opportunityStatuses";

/**
 * Rotation Strategy Configuration
 * Adjust this to control how often the message changes
 */
const ROTATION_STRATEGY = {
    // How often to rotate the message (in hours)
    // Examples: 24 = daily, 12 = twice a day, 6 = every 6 hours, 1 = hourly
    intervalHours: 24,

    // Set to true for truly random each visit (ignores intervalHours)
    pureRandom: true,
};

/**
 * Generate a seed based on current time and rotation interval
 */
function getTimeSeed(): number {
    if (ROTATION_STRATEGY.pureRandom) {
        return Math.floor(Math.random() * 10000);
    }

    const now = new Date();
    const hours = now.getHours();
    const intervalSlot = Math.floor(hours / ROTATION_STRATEGY.intervalHours);

    // Seed = YYYYMMDD + slot number
    return (
        now.getFullYear() * 1000000 +
        (now.getMonth() + 1) * 10000 +
        now.getDate() * 100 +
        intervalSlot
    );
}

/**
 * Detect user's region tone based on timezone and language
 * Returns a culturally appropriate opportunity status message
 */
export function getOpportunityStatus(): string {
    // Try timezone first (more accurate for location)
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    let tone: RegionTone = "casual"; // default

    // Check timezone patterns
    for (const [pattern, regionTone] of timezoneToTone) {
        if (pattern.test(timezone)) {
            tone = regionTone;
            break;
        }
    }

    // If no timezone match, try language as fallback
    if (tone === "casual" && typeof navigator !== "undefined") {
        const language = navigator.language;
        for (const [pattern, regionTone] of languageToTone) {
            if (pattern.test(language)) {
                tone = regionTone;
                break;
            }
        }
    }

    // Get messages for this tone
    const messages = opportunityStatuses[tone];

    // Pick a message based on time seed
    const seed = getTimeSeed();
    const index = seed % messages.length;

    return messages[index];
}

/**
 * Get the detected region tone (for debugging/display)
 */
export function getDetectedTone(): RegionTone {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    for (const [pattern, regionTone] of timezoneToTone) {
        if (pattern.test(timezone)) {
            return regionTone;
        }
    }

    if (typeof navigator !== "undefined") {
        const language = navigator.language;
        for (const [pattern, regionTone] of languageToTone) {
            if (pattern.test(language)) {
                return regionTone;
            }
        }
    }

    return "casual";
}
