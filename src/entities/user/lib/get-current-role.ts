import { role } from "@/lib/data";
import { Role } from "../model/types";

/**
 * Get current user role
 * TODO: Replace with actual auth logic
 */
export function getCurrentRole(): Role {
  return role as Role;
}
