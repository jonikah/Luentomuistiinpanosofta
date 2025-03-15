import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { useDataStore } from "./stores/useDataStore";

function AddNoteToCourse() {
  const [text, setText] = useState("");
  const addNote = useDataStore((state) => state.addNote);

  const handleClick = () => {
    console.log({ text });
    addNote(text);
    setText("");
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <DropdownMenu />
      <textarea
        className=" bg-white w-200 h-20"
        onChange={(e) => handleChange(e)}
        // Tähän voi laittaa suoraankin setTextin!
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
  );
}

export default AddNoteToCourse;
