import { create } from "zustand";

let notes_orig = [
  {
    id: 0,
    text: "add lisää",
    course: {
      id: 0,
      name: "versionhallinta",
    },
    timestamp: "2022-11-23T13:13:13",
  },
  {
    id: 1,
    text: "commit tallenta",
    course: {
      id: 0,
      name: "versionhallinta",
    },
    timestamp: "2022-11-23T13:33:13",
  },
  {
    id: 2,
    text: "push työntää muutokset remoteen",
    course: {
      id: 0,
      name: "versionhallinta",
    },
    timestamp: "2022-11-24T13:13:13",
  },
  {
    id: 3,
    text: "talar du svenska",
    course: {
      id: 2,
      name: "ruotsi",
    },
    timestamp: "2022-11-22T08:23:12",
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

const useDataStore = create((set) => ({
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
          timestamp: "2022-11-22T08:23:12",
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
