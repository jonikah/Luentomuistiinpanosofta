import "./styles/App.css";
import { Outlet, Routes, Route } from "react-router";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import AddNoteToCourse from "./AddNoteToCourse";
import ListNotes from "./ListNotes";
import AddCourse from "./AddCourse";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="addnote" element={<AddNoteToCourse />} />
          <Route path="listnotes" element={<ListNotes />} />
          <Route path="addcourse" element={<AddCourse />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
