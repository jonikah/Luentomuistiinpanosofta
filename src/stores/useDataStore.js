import { create } from "zustand";

let courses_orig = [
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

let id_start = courses_orig.length;

const useDataStore = create((set) => ({
  courses: courses_orig,
  id: id_start,

  addNote: (note) => set((state) => ({ courses: [...state.courses, note] })),

  //   addNewCourse: (course) =>
  //     set((state) => ({ courses: [...state.courses, course] })),
  // }));

  incrementId: () => set((state) => ({ id: state.id + 1 })),

  addNewCourse: (course) =>
    set((state) => ({
      courses: [
        ...state.courses,
        {
          id: state.id,
          text: "",
          course: {
            id: 2,
            name: course,
          },
          timestamp: new Date(),
        },
      ],
    })),
}));

export { useDataStore };
