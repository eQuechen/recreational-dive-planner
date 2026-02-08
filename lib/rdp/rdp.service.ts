/**
 * RDP service layer (business logic).
 *
 * This module contains the core calculation functions of the Recreational Dive Planner,
 * implemented as pure domain logic.
 *
 * Responsibilities:
 * - compute pre-dive pressure groups after a surface interval (Table 2)
 * - compute NDL values based on depth (Table 1)
 * - compute post-dive pressure groups based on depth and bottom time (Table 1)
 * - compute repetitive dive adjusted limits and residual nitrogen time (Table 3)
 *
 * Design notes:
 * - functions in this file should remain pure domain logic (no React state, no components)
 * - inputs must be validated and normalized before accessing RDP tables
 * - errors are thrown when inputs are outside table limits or inconsistent
 */

import type {
    DepthMeters,
    PressureGroup,
    PreDiveGroupResult,
    NdlResult,
    PostDiveGroupResult,
    RepetitiveDiveInfo,
} from "./rdp.types";

import { rdpTables } from "./rdp.data";
import { findFirst, findLast, normalizeDepth } from "./rdp.utils";

/**
 * Calculates the pre-dive pressure group after a surface interval.
 * Uses RDP Table 2.
 */
export function getPreDiveGroup(
    currentGroup: PressureGroup,
    surfaceIntervalMinutes: number
): PreDiveGroupResult {
    const intervals = rdpTables.table2_surface_interval[currentGroup];

    const match = findFirst(
        intervals,
        (row) =>
            surfaceIntervalMinutes >= row.min && surfaceIntervalMinutes <= row.max
    );

    if (!match) {
        throw new Error(
            `No surface interval match found for group ${currentGroup} and interval ${surfaceIntervalMinutes}`
        );
    }

    return { prevGroup: match.newGroup };
}

/**
 * Returns the NDL for a given depth.
 * Uses RDP Table 1 (first dive case).
 */
export function getNDL(depth: number): NdlResult {
    const normalizedDepth = normalizeDepth(depth);

    if (!normalizedDepth) {
        throw new Error(`Depth ${depth} is not supported by the RDP tables`);
    }

    const table = rdpTables.table1_ndl_to_group[String(normalizedDepth)];

    // NDL is always the last entry time in Table 1 for that depth
    const last = findLast(table, () => true);

    if (!last) {
        throw new Error(`No NDL entries found for depth ${normalizedDepth}`);
    }

    return { ndl: last.time };
}

/**
 * Calculates post-dive pressure group for a first dive.
 * Uses RDP Table 1.
 */
export function getPostDiveGroup(
    depth: number,
    bottomTime: number
): PostDiveGroupResult {
    const normalizedDepth = normalizeDepth(depth);

    if (!normalizedDepth) {
        throw new Error(`Depth ${depth} is not supported by the RDP tables`);
    }

    const table = rdpTables.table1_ndl_to_group[String(normalizedDepth)];

    const match = findFirst(table, (row) => bottomTime <= row.time);

    if (!match) {
        throw new Error(
            `Bottom time ${bottomTime} exceeds NDL for depth ${normalizedDepth}`
        );
    }

    return { postGroup: match.group };
}

/**
 * Returns repetitive dive info for a given pre-dive group and depth.
 * Uses RDP Table 3.
 */
export function getRepetitiveDiveInfo(
    prevGroup: PressureGroup,
    depth: DepthMeters
): RepetitiveDiveInfo {
    const entry = rdpTables.table3_repetitive_dive[prevGroup];

    const values = entry[String(depth)];

    if (!values) {
        throw new Error(
            `No repetitive dive data for group ${prevGroup} at depth ${depth}`
        );
    }

    const [residualNitrogenTime, adjustedNdl] = values;

    return { adjustedNdl, residualNitrogenTime };
}

/**
 * Returns the adjusted NDL for a repetitive dive.
 * Uses RDP Table 3.
 */
export function getAdjustedNDL(
    prevGroup: PressureGroup,
    depth: number
): NdlResult {
    const normalizedDepth = normalizeDepth(depth);

    if (!normalizedDepth) {
        throw new Error(`Depth ${depth} is not supported by the RDP tables`);
    }

    const { adjustedNdl } = getRepetitiveDiveInfo(prevGroup, normalizedDepth);

    return { ndl: adjustedNdl };
}
