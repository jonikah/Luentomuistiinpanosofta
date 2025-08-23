function Note({ notes }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200 mb-4 hover:shadow-lg transition">
      {/* Yläosa: kurssi + aikaleima */}
      <div className="mb-2">
        <p className="text-sm text-gray-500">🕒 {notes.timestamp}</p>
        <p className="text-sm text-blue-600 font-medium">
          📘 {notes.course.name}{" "}
          <span className="text-gray-400">(id {notes.course.id})</span>
        </p>
      </div>

      {/* Varsinainen muistiinpano */}
      <p className="text-gray-800 leading-relaxed whitespace-pre-line">
        {notes.text}
      </p>
    </div>
  );
}

export default Note;
