import { create } from "zustand";

const getCourses = async () => {
  const url =
    "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses";
  const response = await fetch(url);
  const apiCourses = await response.json();
  // console.log(apiCourses);
  return apiCourses;
};

const getNotes = async () => {
  const url =
    "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes";
  const response = await fetch(url);
  const apiNotes = await response.json();
  // console.log(apiNotes);
  return apiNotes;
};

const useDataStore = create((set) => ({
  // courses: courses_orig,
  // notes: notes_orig,
  courses: [],
  notes: [],

  fetchCourses: async () => {
    const apiCourses = await getCourses();
    set({ courses: apiCourses });
  },

  fetchNotes: async () => {
    const apiNotes = await getNotes();
    set({ notes: apiNotes });
  },

  addNote: (note, courseId) =>
    set((state) => ({
      notes: [
        ...state.notes,
        {
          id: state.notes[state.notes.length - 1].id + 1,
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
