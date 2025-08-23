import "./styles/App.css"; // Sovelluksen yleiset tyylit
import { Outlet, Routes, Route } from "react-router"; // React Router komponentit
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import AddNoteToCourse from "./AddNoteToCourse";
import ListNotes from "./ListNotes";
import AddCourse from "./AddCourse";

import { useDataStore } from "./stores/useDataStore"; // Zustand state management

function App() {
  // Hae muistiinpanot ja kurssit heti sovelluksen käynnistyessä
  const fetchNotes = useDataStore((state) => state.fetchNotes);
  const fetchCourses = useDataStore((state) => state.fetchCourses);

  fetchNotes();
  fetchCourses();

  return (
    <div>
      <Routes>
        {/* Layout toimii “kehyksenä” kaikille reiteille: header + footer + outlet */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Etusivu */}
          <Route path="addnote" element={<AddNoteToCourse />} />{" "}
          {/* Lisää muistiinpano */}
          <Route path="listnotes" element={<ListNotes />} />{" "}
          {/* Listaa muistiinpanot */}
          <Route path="addcourse" element={<AddCourse />} />{" "}
          {/* Lisää kurssi */}
        </Route>
      </Routes>
    </div>
  );
}

// Layout-komponentti pitää headerin, footerin ja reitin sisällön järjestyksessä
function Layout() {
  return (
    <div className="pt-24 pb-20 px-4">
      {/* Fixed header */}
      <Header />

      {/* Sovelluksen sisältö */}
      <main className="max-w-4xl mx-auto">
        <Outlet /> {/* Outlet näyttää aktiivisen reitin komponentin */}
      </main>

      {/* Fixed footer */}
      <Footer />
    </div>
  );
}

export default App;
