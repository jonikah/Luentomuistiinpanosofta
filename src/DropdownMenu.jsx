import { useDataStore } from "./stores/useDataStore";

function DropdownMenu() {
  const courses = useDataStore((state) => state.courses);

  return (
    <div>
      <select className="bg-white mb-4">
        {courses.map((d, i) => {
          return <option value={i}>{d.name}</option>;
        })}
      </select>

      {/* <select className="bg-white mb-4">
        <option value={"Versionhallinta"}>Versionhallinta</option>
        <option value={"Ruotsi"}>Ruotsi</option>
        <option value={"JavaScript"}>JavaScript</option>
      </select> */}
      <br />
    </div>
  );
}
export default DropdownMenu;
