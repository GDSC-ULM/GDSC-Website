import { Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./HomePage/Home";
import Animation from "./HomePage/Animation";
import NavBar from "./NavBar";
import Join from "./Join";
import Events from "./Events";
import EventPage from "./EventPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Animation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route path="/join" element={<Join />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventPage" element={<EventPage />} />
      </Routes>
    </div>
  );
}

export default App;
