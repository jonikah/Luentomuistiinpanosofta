import { useState } from "react";
import { useDataStore } from "./stores/useDataStore";

function AddCourse() {
  const [text, setText] = useState("");
  const addNewCourse = useDataStore((state) => state.addNewCourse);

  const handleClick = () => {
    addNewCourse(text);
    setText("");
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <textarea
        className=" bg-white w-100 h-10"
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
    </div>
  );
}

export default AddCourse;
