// Link-komponentti navigointiin
import { Link } from "react-router";

// Zustand-store kurssidatan hallintaan
import { useDataStore } from "./stores/useDataStore";

// Header-komponentti näyttää sovelluksen yläreunan navigaation
function Header() {
  // Haetaan kurssit Zustand-storesta, jotta voidaan tarvittaessa disabloida linkki
  const courses = useDataStore((state) => state.courses);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-50 via-blue-50 to-pink-50 border-b border-gray-200 shadow-md z-50">
      <div className="w-full py-4 grid grid-cols-3 items-center">
        <div className="flex items-center pl-6">
          <h1 className="flex items-center gap-3 text-2xl font-extrabold text-blue-500 tracking-tight">
            {/* SVG-ikoni: muistikirja*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-7 h-7 text-blue 700"
            >
              <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
              <path d="M2 6h4" />
              <path d="M2 10h4" />
              <path d="M2 14h4" />
              <path d="M2 18h4" />
              <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
            </svg>
            KurssiKaveri
          </h1>
        </div>

        <nav className="flex justify-center space-x-8 text-base font-medium">
          {/* Etusivu-linkki */}
          <Link
            className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            to="/"
          >
            Etusivu
          </Link>

          {/* Lisää muistiinpano -linkki, disabloitu jos ei kursseja */}
          {courses.length === 0 ? (
            <span className="text-gray-400 cursor-not-allowed">
              Lisää muistiinpano
            </span>
          ) : (
            <Link
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
              to="/addnote"
            >
              Lisää muistiinpano
            </Link>
          )}

          {/* Muistiinpanojen hakulinkki */}
          <Link
            className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            to="/listnotes"
          >
            Hae muistiinpanot
          </Link>

          {/* Kurssin lisäyslinkki */}
          <Link
            className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
            to="/addcourse"
          >
            Lisää kurssi
          </Link>
        </nav>

        {/* Oikea sarake: tyhjä, ei renderöidä mitään. Käytetty kolmen sarakkeen gridiä, jotta asettelu on: vasemmalla logo ja keskellä navigaatio */}
        <div></div>
      </div>
    </header>
  );
}

// Viedään komponentti käyttöön muualle sovelluksessa
export default Header;
