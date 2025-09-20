// Link-komponentti navigointiin
import { Link } from "react-router";

// Zustand-store kurssidatan hallintaan
import { useDataStore } from "./stores/useDataStore";

// Header-komponentti
function Header() {
  const courses = useDataStore((state) => state.courses);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-50 via-blue-50 to-pink-50 border-b border-gray-200 shadow-md z-50">
      <div className="w-full py-4 grid grid-cols-3 items-center">
        {/* Vasemman sarakkeen sisältö (desktop) */}
        <div className="hidden sm:flex items-center pl-6">
          <h1 className="flex items-center gap-2 text-2xl font-extrabold text-blue-500 tracking-tight">
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
              className="w-7 h-7 text-blue-700"
            >
              <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
              <path d="M2 6h4" />
              <path d="M2 10h4" />
              <path d="M2 14h4" />
              <path d="M2 18h4" />
              <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
            </svg>
            <span>KurssiKaveri</span>
          </h1>
        </div>

        {/* Keskimmäinen sarake: mobiili-logo + teksti + navigaatio */}
        <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-center col-span-3 sm:col-span-1 px-4 sm:px-0">
          {/* Mobiilissa keskelle logo + pieni teksti */}
          <div className="sm:hidden flex flex-col items-center mb-1">
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
              className="w-6 h-6 text-blue-700 mb-1"
            >
              <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4" />
              <path d="M2 6h4" />
              <path d="M2 10h4" />
              <path d="M2 14h4" />
              <path d="M2 18h4" />
              <path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z" />
            </svg>
            <span className="text-sm font-semibold text-blue-600">
              KurssiKaveri
            </span>
          </div>

          {/* Navigaatio: linkit vierekkäin */}
          <nav className="flex space-x-4 sm:space-x-8 text-base font-medium w-full justify-center">
            <Link
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
              to="/"
            >
              Etusivu
            </Link>
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
            <Link
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
              to="/listnotes"
            >
              Hae muistiinpanot
            </Link>
            <Link
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-200"
              to="/addcourse"
            >
              Lisää kurssi
            </Link>
          </nav>
        </div>

        {/* Oikea sarake: tyhjä */}
        <div></div>
      </div>
    </header>
  );
}
// Viedään komponentti käyttöön muualle sovelluksessa
export default Header;
