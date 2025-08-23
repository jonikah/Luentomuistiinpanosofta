import { useDataStore } from "./stores/useDataStore";

function CourseRow({ notes }) {
  const deleteNote = useDataStore((state) => state.deleteNote);

  // Poistaa muistiinpanon
  const handleCloseClick = (note) => {
    deleteNote(note);
  };

  if (!notes.text || notes.text.length === 0) return null;

  return (
    <div className="p-2">
      <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 relative hover:shadow-lg transition">
        {/* Poistopainike */}
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition text-lg font-bold"
          onClick={() => handleCloseClick(notes)}
          aria-label="Poista muistiinpano"
        >
          ×
        </button>

        {/* Yläosa: aikaleima & kurssi */}
        <div className="mb-2">
          <p className="text-sm text-gray-500">🕒 {notes.timestamp}</p>
          <p className="text-sm text-blue-600 font-medium">
            📘 {notes.course.name}{" "}
            <span className="text-gray-400">(id {notes.course.id})</span>
          </p>
        </div>

        {/* Muistiinpanon sisältö */}
        <p className="text-gray-800 leading-relaxed whitespace-pre-line">
          {notes.text}
        </p>
      </div>
    </div>
  );
}

export default CourseRow;
