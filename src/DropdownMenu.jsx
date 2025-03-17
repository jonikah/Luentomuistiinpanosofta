import { useDataStore } from "./stores/useDataStore";

function DropdownMenu() {
  const courses = useDataStore((state) => state.courses);

  return (
    <div>
      <select className="bg-white mb-4">
        {courses.map((course) => {
          return (
            <option value={course.name} key={course.id}>
              {course.name}
            </option>
          );
        })}
      </select>
      <br />
    </div>
  );
}
export default DropdownMenu;
