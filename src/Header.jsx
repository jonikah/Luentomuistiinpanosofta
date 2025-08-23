import { Link } from "react-router";
import { useDataStore } from "./stores/useDataStore";

function Header() {
  // Haetaan kurssit Zustand storesta
  const courses = useDataStore((state) => state.courses);

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 shadow-sm z-50">
      <div className="max-w-6xl mx-auto relative px-6 py-4 flex items-center">
        {/* Sovelluksen nimi vasemmassa laidassa */}
        <h1 className="text-xl md:text-2xl relative right-170 font-bold text-blue-600">
          Luentomuistiinpanosovellus
        </h1>

        {/* Navigaatio keskellä koko headerin leveyttä */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6 text-sm font-medium">
          <Link className="text-gray-600 hover:text-blue-600 transition" to="/">
            Etusivu
          </Link>

          {/* Jos kursseja ei ole, disabloitu linkki */}
          {courses.length === 0 ? (
            <span className="text-gray-400 cursor-not-allowed">
              Lisää muistiinpano
            </span>
          ) : (
            <Link
              className="text-gray-600 hover:text-blue-600 transition"
              to="/addnote"
            >
              Lisää muistiinpano
            </Link>
          )}

          <Link
            className="text-gray-600 hover:text-blue-600 transition"
            to="/listnotes"
          >
            Hae muistiinpanot
          </Link>
          <Link
            className="text-gray-600 hover:text-blue-600 transition"
            to="/addcourse"
          >
            Lisää kurssi
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
