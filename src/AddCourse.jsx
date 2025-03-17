import { useState } from "react";
import { useDataStore } from "./stores/useDataStore";

function AddCourse() {
  const [text, setText] = useState("");
  const [PressedAdd, setPressedAdd] = useState(false);

  const addNewCourse = useDataStore((state) => state.addNewCourse);
  const courses = useDataStore((state) => state.courses);

  const handleClick = () => {
    console.log(text);
    addNewCourse(text);
    setText("");
    setPressedAdd(true);
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        className=" bg-white w-100 h-10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={(e) => handleChange(e)}
        value={text}
      ></textarea>
      <br />
      <button
        className="bg-blue-500 m-6 text-white font semibold px-2 py-2 rounded-md hover:bg-blue-600"
        onClick={handleClick}
      >
        Lisää kurssi
      </button>

      {PressedAdd && (
        <p>
          opintojakso '{courses[courses.length - 1].name}' lisätty id:llä{" "}
          {courses.length}
        </p>
      )}
    </div>
  );
}

export default AddCourse;
