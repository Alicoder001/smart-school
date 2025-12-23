import { BaseEntity } from "@/shared/types/common";

export interface Subject extends BaseEntity {
  name: string;
  teachers: string[];
}

export interface Class extends BaseEntity {
  name: string;
  capacity: number;
  grade: number;
  supervisor: string;
}

export interface Lesson extends BaseEntity {
  subject: string;
  class: string;
  teacher: string;
}

export interface Exam extends BaseEntity {
  subject: string;
  class: string;
  teacher: string;
  date: string;
}

export interface Assignment extends BaseEntity {
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
}

export interface Event extends BaseEntity {
  title: string;
  class: string;
  date: string;
  startTime: string;
  endTime: string;
}
