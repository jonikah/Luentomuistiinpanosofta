import { create } from "zustand";

let notes_orig = [
  {
    id: 0,
    text: "add lisää",
    course: {
      id: 0,
      name: "versionhallinta",
    },
    timestamp: "2022-10-23 13:13:13",
  },
  {
    id: 1,
    text: "commit tallenta",
    course: {
      id: 0,
      name: "versionhallinta",
    },
    timestamp: "2022-10-23 13:33:47",
  },
  {
    id: 2,
    text: "push työntää muutokset remoteen",
    course: {
      id: 0,
      name: "versionhallinta",
    },
    timestamp: "2022-10-24 13:53:18",
  },
  {
    id: 3,
    text: "talar du svenska",
    course: {
      id: 2,
      name: "ruotsi",
    },
    timestamp: "2022-11-01 08:23:12",
  },
];

let courses_orig = [
  {
    id: 0,
    name: "versionhallinta",
  },
  {
    id: 1,
    name: "java",
  },
  {
    id: 2,
    name: "ruotsi",
  },
  {
    id: 3,
    name: "ohjelmointi1",
  },
];

const useDataStore = create((set, get) => ({
  courses: courses_orig,
  notes: notes_orig,

  addNote: (note, courseId) =>
    set((state) => ({
      notes: [
        ...state.notes,
        {
          id: state.notes.length,
          text: note,
          course: {
            id: courseId,
            name: state.courses[courseId].name,
          },
          timestamp:
            new Date().getFullYear() +
            "-" +
            String(new Date().getMonth() + 1).padStart(2, "0") +
            "-" +
            String(new Date().getDate()).padStart(2, "0") +
            " " +
            String(new Date().getHours()).padStart(2, "0") +
            ":" +
            String(new Date().getMinutes()).padStart(2, "0") +
            ":" +
            String(new Date().getSeconds()).padStart(2, "0"),
        },
      ],
    })),

  deleteNote: (note) =>
    set((state) => ({
      notes: state.notes.filter((r) => r.id != note.id),
    })),

  addNewCourse: (course) =>
    set((state) => ({
      courses: [
        ...state.courses,
        {
          id: state.courses.length,
          name: course,
        },
      ],
    })),
}));

export { useDataStore };
