import { BaseEntity } from "@/shared/types/common";

export type Role = "admin" | "teacher" | "student" | "parent";

export interface User extends BaseEntity {
  name: string;
  email: string;
  role: Role;
  photo?: string;
}

export interface UserSession {
  user: User;
  role: Role;
}
