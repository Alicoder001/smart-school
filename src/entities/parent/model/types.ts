import { BaseEntity } from "@/shared/types/common";

export interface Parent extends BaseEntity {
  name: string;
  students: string[];
  email: string;
  phone: string;
  address: string;
}

export interface ParentFormData {
  name: string;
  students: string[];
  email: string;
  phone: string;
  address: string;
}
