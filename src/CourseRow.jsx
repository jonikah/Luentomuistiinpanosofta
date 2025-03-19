import { useDataStore } from "./stores/useDataStore";
// import { useState } from "react";

function CourseRow({ notes }) {
  const deleteNote = useDataStore((state) => state.deleteNote);

  const handleCloseClick = (note) => {
    console.log(note);
    deleteNote(note);
  };

  return (
    <div className="p-2">
      {notes.text.length > 0 && (
        <div className="border-1 bg-neutral-50">
          <div className=" relative">
            <button
              className="absolute right-2 text-gray-400 
        hover:text-gray-600 text-2xl"
              onClick={() => handleCloseClick(notes)}
            >
              [x]
            </button>
            <div>
              {/* <p>Muistiinpanon id: {notes.id}</p> */}
              <p className="font-thin mb-2">
                {notes.timestamp} {notes.course.name} (id {notes.course.id})
              </p>
              <p className="font-extralight"> {notes.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default CourseRow;
