import CourseRow from "./CourseRow";
import { useState } from "react";
import { useDataStore } from "./stores/useDataStore";

function ListNotes() {
  // Haetaan muistiinpanot ja kurssit Zustand-storesta
  const notes = useDataStore((state) => state.notes);
  const courses = useDataStore((state) => state.courses);

  // Valittu kurssi ("all" = kaikki kurssit)
  const [value, setValue] = useState("all");

  // Hakusana muistiinpanojen tekstistä
  const [searchTerm, setSearchTerm] = useState("");

  // Kurssivalinnan käsittely
  const handleChangeDropdown = (e) => {
    setValue(e.target.value);
  };

  // Hakukentän käsittely
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Suodatetaan muistiinpanot kurssin ja hakusanan perusteella
  const filteredNotes = notes.filter((note) => {
    const matchesCourse = value === "all" || note.course.id == value;
    const matchesSearch = note.text
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCourse && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto mt-5 px-6">
      {/* Otsikko */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        📒 Muistiinpanot
      </h2>

      {/* Suodatus: kurssivalitsin ja hakukenttä */}
      <div className="mb-8 flex flex-col sm:flex-row justify-center gap-4">
        {/* Kurssivalitsin */}
        <select
          className="w-full sm:w-60 p-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
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

        {/* Hakukenttä */}
        <input
          type="text"
          placeholder="🔍 Hae muistiinpanoista..."
          className="w-full sm:w-96 p-3 border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Muistiinpanojen listaus tai tyhjäviesti */}
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
