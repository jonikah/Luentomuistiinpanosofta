function CourseRow({ courses }) {
  return (
    <div className="border-1 bg-neutral-50">
      <p>{courses.id}</p>
      <p>{courses.text}</p>
      <p>{courses.courseid}</p>
      <p>{courses.name}</p>
      <p>{courses.timestamp}</p>
    </div>
  );
}
export default CourseRow;
