import CourseRow from "./CourseRow";
import DropdownMenu from "./DropdownMenu";
import { useDataStore } from "./stores/useDataStore";

function ListCourses() {
  const notes = useDataStore((state) => state.notes);

  return (
    <div>
      {notes.length > 0 && (
        <div className="grid gap-4">
          <DropdownMenu />
          {notes.map((note, i) => {
            {
              return <CourseRow notes={note} key={note.id} />;
            }
          })}
        </div>
      )}
      {notes.length == 0 && <p>Ei muistiinpanoja!</p>}
    </div>
  );
}
export default ListCourses;
