/**
 * Base types for the RDP system (Recreational Dive Planner).
 *
 * This file defines all TypeScript types required to:
 * - represent pressure groups (A-Z)
 * - represent valid depths supported by the metric RDP tables
 * - strongly type the data structure loaded from `rdp.json`
 * - type the return values of all calculation/service functions
 *
 * Important:
 * This file must NOT contain business logic, only type definitions and contracts.
 */

export type PressureGroup =
    | "A" | "B" | "C" | "D" | "E" | "F" | "G"
    | "H" | "I" | "J" | "K" | "L" | "M" | "N"
    | "O" | "P" | "Q" | "R" | "S" | "T" | "U"
    | "V" | "W" | "X" | "Y" | "Z";

export type DepthMeters =
    | 10 | 12 | 14 | 16 | 18 | 20 | 22 | 25 | 30 | 35 | 40 | 42;

export type Table1Entry = {
    time: number;
    group: PressureGroup;
};

export type Table2Entry = {
    min: number;
    max: number;
    newGroup: PressureGroup;
};

export type Table3Entry = {
    /**
     * [Residual Nitrogen Time, Adjusted NDL]
     */
    [depth: string]: [residualNitrogenTime: number, adjustedNdl: number];
};

export type RdpMeta = {
    system: string;
    units: {
        depth: string;
        time: string;
    };
};

export type RdpTables = {
    meta: RdpMeta;

    table1_ndl_to_group: Record<string, Table1Entry[]>;

    table2_surface_interval: Record<PressureGroup, Table2Entry[]>;

    table3_repetitive_dive: Record<PressureGroup, Table3Entry>;
};

export type PreDiveGroupResult = {
    prevGroup: PressureGroup;
};

export type NdlResult = {
    ndl: number;
};

export type PostDiveGroupResult = {
    postGroup: PressureGroup;
};

export type RepetitiveDiveInfo = {
    adjustedNdl: number;
    residualNitrogenTime: number;
};
