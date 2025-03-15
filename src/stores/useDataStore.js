import { create } from "zustand";

let courses_orig = [
  {
    id: 0,
    text: "add lisää",
    courseid: 0,
    name: "versionhallinta",
    timestamp: "2022-11-23T13:13:13",
  },
  {
    id: 3,
    text: "talar du svenska",
    courseid: 2,
    name: "ruotsi",
    timestamp: "2022-11-23T13:13:13",
  },
];

const useDataStore = create((set) => ({
  courses: courses_orig,
  addNote: (note) => set((state) => ({ courses: [...state.courses, note] })),

  addNewCourse: (course) =>
    set((state) => ({ courses: [...state.courses, course] })),
}));

export { useDataStore };
