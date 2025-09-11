import { create } from "zustand";

// Funktio kurssien hakemiseen API:sta
const getCourses = async () => {
  const url =
    "https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses";
  const response = await fetch(url);
  const apiCourses = await response.json();
  // console.log(apiCourses);
  return apiCourses;
};

// Funktio muistiinpanojen hakemiseen API:sta
const getNotes = async () => {
  const url =
    "https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes";
  const response = await fetch(url);
  const apiNotes = await response.json();
  // console.log(apiNotes);
  return apiNotes;
};

// Zustand store
const useDataStore = create((set) => ({
  // courses: courses_orig,
  // notes: notes_orig,
  courses: [], // Lista kursseista
  notes: [], // Lista muistiinpanoista
  noteId: 0, // Seuraavan muistiinpanon id

  // Hae kurssit API:sta ja aseta stateen
  fetchCourses: async () => {
    const apiCourses = await getCourses();
    set({ courses: apiCourses });
  },

  // Hae muistiinpanot API:sta ja aseta stateen
  fetchNotes: async () => {
    const apiNotes = await getNotes();
    set({ notes: apiNotes });
    set({ noteId: apiNotes.length }); // seuraava id jatkuu olemassa olevista
  },

  // Lisää uusi muistiinpano tiettyyn kurssiin
  addNote: (note, courseId) =>
    set((state) => ({
      notes: [
        ...state.notes,
        {
          id: state.noteId,
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

  // Kasvata noteId yhdellä, kutsutaan addNote:n jälkeen
  incrementNoteId: () => set((state) => ({ noteId: state.noteId + 1 })),

  // Poista muistiinpano id:n perusteella
  deleteNote: (note) =>
    set((state) => ({
      notes: state.notes.filter((r) => r.id != note.id),
    })),

  // Lisää uusi kurssi
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
