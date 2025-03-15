import { Link } from "react-router";

function Header() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center ">
        Luentomuistiinpanosovellus
      </h1>
      <nav className="flex space-x-4 mb-8 justify-center">
        <Link className="hover:underline" to="/">
          Etusivu
        </Link>
        <Link className="hover:underline" to="/addnote">
          Lisää kurssille muistiinpano
        </Link>
        <Link className="hover:underline" to="/listcourses">
          Hae muistiinpanot
        </Link>
        <Link className="hover:underline" to="/addcourse">
          Lisää kurssi
        </Link>
      </nav>
    </div>
  );
}

export default Header;
