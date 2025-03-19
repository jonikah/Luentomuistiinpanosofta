function Note({ notes }) {
  return (
    <div className="border-1 bg-neutral-50 p-5 mb-3 ">
      {/* <p>Muistiinpanon id: {notes.id}</p>
      <p className="font-thin">
        {notes.timestamp} {notes.course.name} (id {notes.course.id})
      </p> */}
      <p className="font-extralight"> {notes.text}</p>
    </div>
  );
}
export default Note;
