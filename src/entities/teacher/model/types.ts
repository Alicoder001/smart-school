import { BaseEntity } from "@/shared/types/common";

export interface Teacher extends BaseEntity {
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
}

export interface TeacherFormData {
  teacherId: string;
  name: string;
  email: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
  photo?: string;
}
