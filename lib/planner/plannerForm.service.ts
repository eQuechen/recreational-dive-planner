/**
 * Application-level logic for the PlannerForm.
 *
 * This file contains form-specific calculations (UI/application rules),
 * delegating RDP table logic to the RDP service layer.
 */

import {
  getPreDiveGroup,
  getAdjustedNDL,
  getNDL,
  getPostDiveGroup,
  getRepetitiveDiveInfo,
  normalizeDepth
} from "@/lib/rdp";


/**
 * Calculates the pre-dive pressure group (prevGroup).
 * If the successive dive option is disabled or input is incomplete/invalid,
 * it returns "-".
 */
export function calculatePrevGroup(
    successiveDive: boolean,
    currentGroup: string,
    surfaceInterval: string
): string {
    if (!successiveDive) {
        return "-";
    }

    const hasRequiredData = currentGroup !== "" && surfaceInterval !== "";
    if (!hasRequiredData) {
        return "-";
    }

    const surfaceIntervalMinutes = Number(surfaceInterval);
    const isValidInterval =
        !Number.isNaN(surfaceIntervalMinutes) && surfaceIntervalMinutes > 0;

    if (!isValidInterval) {
        return "-";
    }

    try {
        const result = getPreDiveGroup(currentGroup as any, surfaceIntervalMinutes);
        return result.prevGroup;
    } catch {
        return "-";
    }
}

/**
 * Calculates the NDL (No Decompression Limit).
 * - If successiveDive is false -> uses Table 1
 * - If successiveDive is true  -> uses Table 3 (adjusted NDL)
 *
 * Returns "-" if input is incomplete/invalid.
 */
export function calculateNDL(
    successiveDive: boolean,
    depth: string,
    prevGroup: string
): string {
    if (depth === "") {
        return "-";
    }

    const depthMeters = Number(depth);
    const isValidDepth = !Number.isNaN(depthMeters) && depthMeters > 0;

    if (!isValidDepth) {
        return "-";
    }

    try {
        if (!successiveDive) {
            const result = getNDL(depthMeters);
            return String(result.ndl);
        }

        // successive dive case
        if (prevGroup === "-" || prevGroup === "") {
            return "-";
        }

        const result = getAdjustedNDL(prevGroup as any, depthMeters);
        return String(result.ndl);

    } catch {
        return "-";
    }
}

/**
 * Calculates the post-dive pressure group.
 *
 * First dive:
 * - uses Table 1 directly (depth + bottom time)
 *
 * Successive dive:
 * - uses Table 3 to get RNT
 * - adds RNT + bottomTime
 * - uses Table 1 with the total time
 */
export function calculatePostGroup(
    successiveDive: boolean,
    depth: string,
    bottomTime: string,
    prevGroup: string
): string {
    if (depth === "" || bottomTime === "") {
        return "-";
    }

    const depthMeters = Number(depth);
    const bottomTimeMinutes = Number(bottomTime);

    const validDepth = !Number.isNaN(depthMeters) && depthMeters > 0;
    const validBottomTime = !Number.isNaN(bottomTimeMinutes) && bottomTimeMinutes > 0;

    if (!validDepth || !validBottomTime) {
        return "-";
    }

    try {
        // First dive
        if (!successiveDive) {
            const result = getPostDiveGroup(depthMeters, bottomTimeMinutes);
            return result.postGroup;
        }

        // Successive dive
        if (prevGroup === "-" || prevGroup === "") {
            return "-";
        }

        // Normalize depth to a valid RDP table depth (10,12,14,...,40)
        const normalizedDepth = normalizeDepth(depthMeters);

        if (!normalizedDepth) {
            return "-";
        }

        // Table 3 gives us RNT for this depth and pre-dive group
        const repetitiveInfo = getRepetitiveDiveInfo(prevGroup as any, normalizedDepth);

        const totalTime = repetitiveInfo.residualNitrogenTime + bottomTimeMinutes;

        // Table 1 must also use normalized depth
        const result = getPostDiveGroup(normalizedDepth, totalTime);
        return result.postGroup;


    } catch {
        return "-";
    }
}
