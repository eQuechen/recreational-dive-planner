/**
 * Utility helpers for the RDP (Recreational Dive Planner) domain.
 *
 * This file contains reusable low-level functions that are shared across
 * the RDP service layer, such as:
 * - safe parsing of user inputs
 * - depth normalization to valid RDP table depths
 * - reusable lookup helpers for table-based calculations
 * - basic helpers such as limiting values within a valid range
 *
 * Important:
 * This file must stay independent from any UI framework (no React, no UI state).
 */

import type { DepthMeters, PressureGroup } from "./rdp.types";

const VALID_DEPTHS: DepthMeters[] = [10, 12, 14, 16, 18, 20, 22, 25, 30, 35, 40, 42];

/**
 * Rounds a depth UP to the closest valid RDP depth (metric table).
 * Example:
 * - 11m -> 12m
 * - 19m -> 20m
 * - 40m -> 40m
 */
export function normalizeDepth(depth: number): DepthMeters | null {
    for (const valid of VALID_DEPTHS) {
        if (depth <= valid) return valid;
    }
    return null; // depth exceeds max supported depth
}

/**
 * Type guard for PressureGroup.
 */
export function isPressureGroup(value: string): value is PressureGroup {
    return /^[A-Z]$/.test(value);
}

/**
 * Ensures a value is inside a given range.
 */
export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
}

/**
 * Finds the first entry that satisfies the condition.
 * Useful for table lookups.
 */
export function findFirst<T>(items: T[], predicate: (item: T) => boolean): T | null {
    for (const item of items) {
        if (predicate(item)) return item;
    }
    return null;
}

/**
 * Finds the last entry that satisfies the condition.
 * Useful for table lookups.
 */
export function findLast<T>(items: T[], predicate: (item: T) => boolean): T | null {
    let found: T | null = null;
    for (const item of items) {
        if (predicate(item)) found = item;
    }
    return found;
}