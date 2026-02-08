import rdpJson from "./rdp.json";
import type { RdpTables } from "./rdp.types";

/**
 * Typed RDP tables loaded from the JSON source.
 *
 * This module is responsible only for providing the RDP dataset.
 * No business logic should be placed here.
 */
export const rdpTables: RdpTables = rdpJson as unknown as RdpTables;