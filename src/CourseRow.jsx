function CourseRow({ data }) {
  return (
    <div style={{ border: "1px solid black" }}>
      <p>{data.id}</p>
      <p>{data.text}</p>
      <p>{data.courseid}</p>
      <p>{data.name}</p>
      <p>{data.timestamp}</p>
    </div>
  );
}
export default CourseRow;
