import CourseRow from "./CourseRow";
import DropdownMenu from "./DropdownMenu";

function ListNotes({ data }) {
  return (
    <div>
      <DropdownMenu />
      <p className="mb-4">Kaikki kurssit:</p>
      {data.length > 0 && (
        <div className="grid gap-4">
          {data.map((d, i) => {
            return <CourseRow data={d} key={i} />;
          })}
        </div>
      )}
      {data.length == 0 && <p>Ei muistiinpanoja!</p>}
    </div>
  );
}
export default ListNotes;
