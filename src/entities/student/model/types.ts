import { BaseEntity } from "@/shared/types/common";

export interface Student extends BaseEntity {
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  grade: number;
  class: string;
  address: string;
}

export interface StudentFormData {
  studentId: string;
  name: string;
  email: string;
  phone: string;
  grade: number;
  class: string;
  address: string;
  photo?: string;
}
