import { useState } from "react";
import { useDataStore } from "./stores/useDataStore";
import Note from "./Note";

function AddNoteToCourse() {
  const [text, setText] = useState("");
  const [value, setValue] = useState();
  const [courseChosen, setCourseChosen] = useState(false);
  const [noteAdded, setNoteAdded] = useState(false);
  const [firstAddedNoteId, setFirstAddedNoteId] = useState(0);

  const addNote = useDataStore((state) => state.addNote);
  const incrementNoteId = useDataStore((state) => state.incrementNoteId);
  const courses = useDataStore((state) => state.courses);
  const notes = useDataStore((state) => state.notes);

  const handleClick = () => {
    if (!text.trim()) return;
    addNote(text.trim(), value);
    incrementNoteId();
    setText("");
    setNoteAdded(true);
  };

  const handleClickBack = () => {
    setCourseChosen(false);
    setNoteAdded(false);
    setText("");
    setValue();
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleChangeDropdown = (e_select) => {
    setValue(e_select.target.value);
    setCourseChosen(true);
    if (notes.length < 1) {
      setFirstAddedNoteId(0);
    } else {
      setFirstAddedNoteId(notes[notes.length - 1].id);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        {!courseChosen && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Lisää muistiinpano
            </h2>
            <label className="block mb-2 text-gray-700 font-medium">
              Valitse kurssi:
            </label>
            <select
              className="w-full p-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              onChange={handleChangeDropdown}
              value={value || ""}
            >
              <option value="" disabled>
                -- Valitse kurssi --
              </option>
              {courses.map((course) => (
                <option value={course.id} key={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {courseChosen && (
          <div>
            <p className="text-xl font-semibold text-gray-800 mb-2">
              Kurssi:{" "}
              <span className="text-blue-600">{courses[value].name}</span>
            </p>
            <p className="text-sm text-gray-500 mb-3">
              (Huom! Muistiinpano ei voi olla tyhjä.)
            </p>
            <textarea
              className="w-full h-28 p-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Kirjoita muistiinpano..."
              onChange={handleChange}
              value={text}
            />
            <div className="flex gap-3 mt-4">
              <button
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:scale-[1.02] hover:from-blue-600 hover:to-blue-700 transition-transform disabled:opacity-50"
                onClick={handleClick}
                disabled={!text.trim()}
              >
                💾 Tallenna muistiinpano
              </button>
              <button
                className="flex-1 bg-gray-500 text-white font-medium py-2 px-4 rounded-xl shadow-md hover:bg-gray-600 transition"
                onClick={handleClickBack}
              >
                🔙 Palaa
              </button>
            </div>
          </div>
        )}
      </div>

      {noteAdded &&
        notes
          .filter((note) => note.id > firstAddedNoteId)
          .map((note) => (
            <div key={note.id} className="mt-6">
              <Note notes={note} />
            </div>
          ))}
    </div>
  );
}

export default AddNoteToCourse;
