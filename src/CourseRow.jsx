import { useDataStore } from "./stores/useDataStore";

function CourseRow({ notes }) {
  const deleteNote = useDataStore((state) => state.deleteNote);

  const handleCloseClick = (note) => {
    console.log(note);
    deleteNote(note);
  };

  return (
    <div>
      {notes.text != null && (
        <div className="border-1 bg-neutral-50">
          <div className=" relative">
            <button
              className="absolute right-2 text-gray-400 
        hover:text-gray-600 font-medium"
              onClick={() => handleCloseClick(notes)}
            >
              [x]
            </button>
            <div>
              <p>Muistiinpanon id: {notes.id}</p>
              <p className="font-thin">
                {notes.timestamp} {notes.course.name} (id {notes.course.id})
              </p>
              <p className="font-extralight"> {notes.text}</p>
            </div>
          </div>
        </div>
      )}
      {notes.text == null && <p>Ei muistiinpanoja!</p>}
    </div>
  );
}
export default CourseRow;
