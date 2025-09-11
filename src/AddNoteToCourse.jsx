// Reactin tilanhallinta hook
import { useState } from "react";

// Zustand-store muistiinpanojen ja kurssien hallintaan
import { useDataStore } from "./stores/useDataStore";

// Komponentti yksittäisen muistiinpanon esittämiseen
import Note from "./Note";

function AddNoteToCourse() {
  // Tilat muistiinpanon tekstille, valitulle kurssille ja tilanneviesteille
  const [text, setText] = useState(""); // Muistiinpanon sisältö
  const [value, setValue] = useState(); // Valittu kurssi (id)
  const [courseChosen, setCourseChosen] = useState(false); // Onko kurssi valittu
  const [noteAdded, setNoteAdded] = useState(false); // Onko muistiinpano lisätty
  const [firstAddedNoteId, setFirstAddedNoteId] = useState(0); // Viimeisin note.id ennen lisäystä

  // Zustand-storesta tarvittavat toiminnot ja data
  const addNote = useDataStore((state) => state.addNote); // Lisää muistiinpano
  const incrementNoteId = useDataStore((state) => state.incrementNoteId); // Kasvata note.id
  const courses = useDataStore((state) => state.courses); // Kurssilista
  const notes = useDataStore((state) => state.notes); // Muistiinpanolista

  // Tallenna muistiinpano
  const handleClick = () => {
    addNote(text.trim(), value); // Lisää muistiinpano valitulle kurssille
    incrementNoteId(); // Päivitä note.id
    setText(""); // Tyhjennä tekstikenttä
    setNoteAdded(true); // Näytä juuri lisätty muistiinpano
  };

  // Palaa kurssivalintaan
  const handleClickBack = () => {
    setCourseChosen(false); // Poista kurssivalinta
    setNoteAdded(false); // Piilota lisätty muistiinpano
    setText(""); // Tyhjennä tekstikenttä
    setValue(); // Nollaa kurssivalinta
  };

  // Päivitä tekstikentän sisältö
  const handleChange = (e) => {
    setText(e.target.value);
  };

  // Kurssin valinta dropdownista
  const handleChangeDropdown = (e_select) => {
    setValue(e_select.target.value); // Tallenna valittu kurssi
    setCourseChosen(true); // Siirry muistiinpanon kirjoitukseen

    // Tallenna viimeisin note.id ennen uuden lisäämistä
    if (notes.length < 1) {
      setFirstAddedNoteId(0);
    } else {
      setFirstAddedNoteId(notes[notes.length - 1].id);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        {/*Kurssin valinta */}
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

        {/*Muistiinpanon kirjoitus */}
        {courseChosen && (
          <div>
            <p className="text-xl font-semibold text-gray-800 mb-2">
              Kurssi:{" "}
              <span className="text-blue-600">{courses[value].name}</span>
            </p>

            {/* Tekstikenttä muistiinpanolle */}
            <textarea
              className="w-full h-28 p-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              placeholder="Kirjoita muistiinpano..."
              onChange={handleChange}
              value={text}
            />

            {/* Toimintopainikkeet */}
            <div className="flex gap-3 mt-4">
              {/* Tallenna-painike */}
              <button
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-4 rounded-xl shadow-md hover:scale-[1.02] hover:from-blue-600 hover:to-blue-700 transition-transform disabled:opacity-50"
                onClick={handleClick}
                disabled={!text.trim()}
              >
                💾 Tallenna muistiinpano
              </button>

              {/* Palaa-painike */}
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

      {/* Näytetään juuri lisätyt muistiinpanot */}
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
