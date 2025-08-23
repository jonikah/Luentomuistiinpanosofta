import { useState } from "react";
import { useDataStore } from "./stores/useDataStore";

function AddCourse() {
  const [text, setText] = useState("");
  const [PressedAdd, setPressedAdd] = useState(false);

  const addNewCourse = useDataStore((state) => state.addNewCourse);
  const courses = useDataStore((state) => state.courses);

  const handleClick = () => {
    if (!text.trim()) return;
    addNewCourse(text.trim());
    setText("");
    setPressedAdd(true);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="max-w-lg mx-auto mt-5">
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Lisää uusi kurssi
        </h2>

        <textarea
          className="w-full h-24 p-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Kirjoita kurssin nimi..."
          onChange={handleChange}
          value={text}
        />

        <button
          className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:scale-[1.02] hover:from-blue-600 hover:to-blue-700 transition-transform"
          onClick={handleClick}
        >
          ➕ Lisää kurssi
        </button>

        {PressedAdd && courses.length > 0 && (
          <p className="mt-4 text-green-600 font-medium">
            ✅ Opintojakso{" "}
            <span className="font-semibold">
              "{courses[courses.length - 1].name}"
            </span>{" "}
            lisätty (ID: {courses.length})
          </p>
        )}
      </div>
    </div>
  );
}

export default AddCourse;
