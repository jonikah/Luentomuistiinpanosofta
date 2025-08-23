import { Link } from "react-router";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto mt-15 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
        Muistiinpanosovellus opintojaksoillesi 📚
      </h2>
      <p className="text-gray-600 mb-8 text-lg">
        Lisää kursseja, kirjoita muistiinpanoja ja hallitse opintojasi helposti
        yhdessä paikassa.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/addcourse"
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:scale-[1.02] hover:from-blue-600 hover:to-blue-700 transition-transform"
        >
          ➕ Lisää kurssi
        </Link>
        <Link
          to="/listnotes"
          className="bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-xl shadow hover:bg-gray-200 transition"
        >
          🔍 Hae muistiinpanot
        </Link>
      </div>
    </div>
  );
}
