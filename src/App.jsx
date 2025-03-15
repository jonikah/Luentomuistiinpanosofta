import "./styles/App.css";
import { Outlet, Routes, Route } from "react-router";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import AddNote from "./AddNote";
import ListNotes from "./ListNotes";
import AddCourse from "./AddCourse";

function App() {
  let data = [
    {
      id: 0,
      text: "add lisää",
      courseid: 0,
      name: "versionhallinta",
      timestamp: "2022-11-23T13:13:13",
    },
    {
      id: 1,
      text: "commit tallentaa",
      courseid: 0,
      name: "versionhallinta",
      timestamp: "2022-11-23T13:13:13",
    },
  ];

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="addnote" element={<AddNote />} />
          <Route path="listnotes" element={<ListNotes data={data} />} />
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
