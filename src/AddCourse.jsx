// Reactin tilanhallinta hook
import { useState } from "react";

// Zustand-store kurssien hallintaan
import { useDataStore } from "./stores/useDataStore";

function AddCourse() {
  // Tilat: kurssin nimi ja onko lisäyspainiketta painettu
  const [text, setText] = useState("");
  const [PressedAdd, setPressedAdd] = useState(false);

  // Zustand-toiminnot ja kurssidata
  const addNewCourse = useDataStore((state) => state.addNewCourse);
  const courses = useDataStore((state) => state.courses);

  // Kurssin lisääminen
  const handleClick = () => {
    addNewCourse(text.trim()); // Lisätään kurssi storeen
    setText(""); // Tyhjennetään tekstikenttä
    setPressedAdd(true); // Näytetään vahvistusviesti
  };

  // Tekstikentän päivitys
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="max-w-lg mx-auto mt-5">
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        {/* Otsikko */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Lisää uusi kurssi
        </h2>

        {/* Tekstikenttä kurssin nimelle */}
        <textarea
          className="w-full h-24 p-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          placeholder="Kirjoita kurssin nimi..."
          onChange={handleChange}
          value={text}
        />

        {/* Lisää-painike */}
        <button
          className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:scale-[1.02] hover:from-blue-600 hover:to-blue-700 transition-transform disabled:opacity-50"
          onClick={handleClick}
          disabled={!text.trim()}
        >
          ➕ Lisää kurssi
        </button>

        {/* Vahvistusviesti viimeksi lisätystä kurssista */}
        {PressedAdd && courses.length > 0 && (
          <p className="mt-4 text-green-600 font-medium">
            ✅ Opintojakso{" "}
            <span className="font-semibold">
              "{courses[courses.length - 1].name}"
            </span>{" "}
            lisätty (ID: {courses.length - 1})
          </p>
        )}
      </div>
    </div>
  );
}

// Viedään komponentti käyttöön muualle sovelluksessa
export default AddCourse;
