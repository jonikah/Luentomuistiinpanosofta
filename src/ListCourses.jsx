import CourseRow from "./CourseRow";
import DropdownMenu from "./DropdownMenu";
import { useDataStore } from "./stores/useDataStore";

function ListCourses() {
  const courses = useDataStore((state) => state.courses);

  return (
    <div>
      <DropdownMenu />
      <p className="mb-4">Kaikki kurssit:</p>
      {courses.length > 0 && (
        <div className="grid gap-4">
          {courses.map((d, i) => {
            return <CourseRow courses={d} key={i} />;
          })}
        </div>
      )}
      {courses.length == 0 && <p>Ei muistiinpanoja!</p>}
    </div>
  );
}
export default ListCourses;
