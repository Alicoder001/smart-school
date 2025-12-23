/**
 * Application-wide constants
 */

export const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  ADMIN: "/admin",
  TEACHER: "/teacher",
  STUDENT: "/student",
  PARENT: "/parent",
  LIST: {
    TEACHERS: "/list/teachers",
    STUDENTS: "/list/students",
    PARENTS: "/list/parents",
    SUBJECTS: "/list/subjects",
    CLASSES: "/list/classes",
    LESSONS: "/list/lessons",
    EXAMS: "/list/exams",
    ASSIGNMENTS: "/list/assignments",
    RESULTS: "/list/results",
    EVENTS: "/list/events",
    ANNOUNCEMENTS: "/list/announcements",
  },
} as const;

export const APP_CONFIG = {
  APP_NAME: "Technova Academy",
  CURRENT_YEAR: "2024/25",
} as const;

export const DATE_FORMATS = {
  SHORT: "MM/DD/YYYY",
  LONG: "MMMM DD, YYYY",
  TIME: "HH:mm",
} as const;

export const PAGINATION_CONFIG = {
  DEFAULT_PAGE_SIZE: 10,
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100],
} as const;
