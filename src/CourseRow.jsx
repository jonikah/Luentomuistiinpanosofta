function CourseRow({ courses }) {
  return (
    <div className="border-1 bg-neutral-50">
      <p>Kurssin id: {courses.id}</p>
      <p>Muistiinpano: {courses.text}</p>
      <p>Opintojaksotunnus: {courses.course.id}</p>
      <p>Opintojakso: {courses.course.name}</p>
      <p>{courses.timestamp}</p>
    </div>
  );
}
export default CourseRow;
