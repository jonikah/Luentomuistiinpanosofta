import { useState } from "react";
import { useDataStore } from "./stores/useDataStore";
import Note from "./Note";

function AddNoteToCourse() {
  const [text, setText] = useState("");
  const [dropdownValue, setDropdownValue] = useState();
  const [courseChosen, setCourseChosen] = useState(false);
  const [noteAdded, setNoteAdded] = useState(false);
  const [firstAddedNoteId, setFirstAddedNoteId] = useState();
  const addNote = useDataStore((state) => state.addNote);
  const courses = useDataStore((state) => state.courses);
  const notes = useDataStore((state) => state.notes);

  const handleClick = () => {
    // console.log({ text });
    // console.log({ dropdownValue });
    addNote(text, dropdownValue);
    setText("");
    setNoteAdded(true);
  };

  const handleClickBack = () => {
    setCourseChosen(false);
    setNoteAdded(false);
    setText("");
    setDropdownValue();
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  const handleChangeDropdown = (e_select) => {
    console.log(e_select.target.value);
    setDropdownValue(e_select.target.value);
    setCourseChosen(true);
    setFirstAddedNoteId(notes[notes.length - 1].id);
  };

  return (
    <div>
      <div>
        {!courseChosen && (
          <div>
            <span className="text-xl p-2">Kurssi: </span>
            <select
              className="bg-white w-auto h-auto rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e_select) => handleChangeDropdown(e_select)}
              dropdownValue={dropdownValue}
            >
              {courses.map((course, i) => {
                return (
                  <option value={course.id} key={course.id}>
                    {course.name}
                  </option>
                );
              })}
            </select>
            <br />
          </div>
        )}

        {courseChosen && (
          <div>
            <span className="text-xl p-2">
              Kurssi: {courses[dropdownValue].name}{" "}
            </span>
            <textarea
              className=" bg-white w-200 h-20 mt-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => handleChange(e)}
              value={text}
            ></textarea>
            <br />
            <button
              className="bg-blue-500  text-white font m-5 semibold px-2 py-2 rounded-md hover:bg-blue-600"
              onClick={handleClick}
            >
              Lisää muistiinpano
            </button>
            <button
              className="bg-zinc-500 text-white px-3 py-2 rounded-md hover:bg-zinc-600"
              onClick={handleClickBack}
            >
              Palaa
            </button>
          </div>
        )}
      </div>
      {noteAdded &&
        notes
          .filter((note) => note.id > notes[firstAddedNoteId].id)
          .map((note, i) => {
            {
              {
                console.log(note);
                return <Note notes={note} key={notes.id} />;
              }
            }
          })}
    </div>
  );
}

export default AddNoteToCourse;
