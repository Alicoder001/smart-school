import { Role } from "../model/types";

/**
 * Check if user has permission for action
 */
export function checkPermission(role: Role, allowedRoles: Role[]): boolean {
  return allowedRoles.includes(role);
}
