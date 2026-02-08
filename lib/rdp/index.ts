/**
 * Public entry point for the RDP module.
 *
 * This file acts as a barrel export, exposing the public API of the RDP domain.
 * It allows consumers to import RDP utilities, types, data and services from a
 * single stable path (`@/lib/rdp`) without depending on the internal file structure.
 *
 * This improves maintainability and keeps imports clean across the project.
 */

export * from "./rdp.types";
export * from "./rdp.data";