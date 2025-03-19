import CourseRow from "./CourseRow";
import { useState } from "react";
import { useDataStore } from "./stores/useDataStore";

function ListNotes() {
  const notes = useDataStore((state) => state.notes);
  const courses = useDataStore((state) => state.courses);

  const [value, setValue] = useState("all");
  const [courseChosen, setCourseChosen] = useState(false);

  const handleChangeDropdown = (e_select) => {
    // console.log(e_select.target.value);
    setValue(e_select.target.value);
    setCourseChosen(true);
    // console.log(courseChosen);
  };

  return (
    <div>
      {notes.length > 0 && (
        <div>
          <div>
            <div>
              <span className="text-xl p-2">Kurssi: </span>
              <select
                className="bg-white w-auto h-auto mb-5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={value}
                onChange={(e_select) => handleChangeDropdown(e_select)}
              >
                <option value="all">Kaikki</option>
                {courses.map((course, i) => {
                  return (
                    <option value={course.id} key={course.id}>
                      {course.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {courseChosen && (
            <div>
              <div>
                {notes.filter((note) => note.course.id == value).length == 0 &&
                value != "all" ? (
                  <p>Ei muistiinpanoja!</p>
                ) : (
                  notes
                    .filter((note) => note.course.id == value)
                    .map((note) => <CourseRow notes={note} key={note.id} />)
                )}
              </div>
            </div>
          )}
          {value == "all" && notes.length > 0 && (
            <div>
              {notes.map((note, i) => {
                {
                  return <CourseRow notes={note} key={note.id} />;
                }
              })}
            </div>
          )}
        </div>
      )}
      {notes.length == 0 && <p>Ei muistiinpanoja!</p>}
    </div>
  );
}
export default ListNotes;
