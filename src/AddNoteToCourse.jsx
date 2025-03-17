import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { useDataStore } from "./stores/useDataStore";

function AddNoteToCourse() {
  const [text, setText] = useState("");
  const [dropvalue, setValue] = useState(0);

  const addNote = useDataStore((state) => state.addNote);
  const courses = useDataStore((state) => state.courses);

  const handleClick = () => {
    console.log({ text });
    console.log({ dropvalue });
    addNote(text, dropvalue);
    setText("");
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };

  const handleChangeDropdown = (e_select) => {
    console.log(e_select.target.value);
    setValue(e_select.target.value);
  };

  return (
    <div>
      <div>
        <div>
          <select
            className="bg-white mb-4"
            onChange={(e_select) => handleChangeDropdown(e_select)}
            dropvalue={dropvalue}
          >
            {courses.map((course) => {
              return (
                <option value={course.id} key={course.id}>
                  {course.name}
                </option>
              );
            })}
          </select>
          <br />
        </div>

        <textarea
          className=" bg-white w-200 h-20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
        <button className="bg-zinc-500 text-white px-3 py-2 rounded-md hover:bg-zinc-600">
          Palaa
        </button>
      </div>
    </div>
  );
}

export default AddNoteToCourse;
