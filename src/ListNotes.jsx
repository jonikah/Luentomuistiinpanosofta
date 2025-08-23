import CourseRow from "./CourseRow";
import { useState } from "react";
import { useDataStore } from "./stores/useDataStore";

function ListNotes() {
  const notes = useDataStore((state) => state.notes); // Kaikki muistiinpanot
  const courses = useDataStore((state) => state.courses); // Kaikki kurssit

  const [value, setValue] = useState("all"); // Valittu kurssi ("all" = kaikki)

  // Dropdownin muutoksen käsittely
  const handleChangeDropdown = (e) => {
    setValue(e.target.value);
  };

  // Suodatetut muistiinpanot valitun kurssin mukaan
  const filteredNotes =
    value === "all" ? notes : notes.filter((note) => note.course.id == value);

  return (
    <div className="max-w-4xl mx-auto mt-5 px-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        📒 Muistiinpanot
      </h2>

      {/* Kurssivalitsin */}
      <div className="mb-8 flex justify-center">
        <select
          className="w-60 p-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={value}
          onChange={handleChangeDropdown}
        >
          <option value="all">Kaikki kurssit</option>
          {courses.map((course) => (
            <option value={course.id} key={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>

      {/* Muistiinpanojen listaus */}
      {filteredNotes.length === 0 ? (
        <p className="text-center text-gray-500 text-lg font-medium">
          Ei muistiinpanoja!
        </p>
      ) : (
        <div className="grid gap-4">
          {filteredNotes.map((note) => (
            <CourseRow notes={note} key={note.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ListNotes;
