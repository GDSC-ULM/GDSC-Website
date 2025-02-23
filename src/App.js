import { Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./HomePage/Home";
import Animation from "./HomePage/Animation";
import NavBar from "./NavBar";
import Join from "./Join";
import Events from "./EventsPage/Events";
import Hawkthon from "./HomePage/Hawkthon";
import CodeClash from './CodeClashPage/CodeClash';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1890ff",
          borderRadius: 8,
          colorBgContainer: "#ffffff",
        },
      }}
    >
      <div className="App">
        <NavBar />
        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/join" element={<Join />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/hawkthon" element={<Hawkthon />} />
            <Route path="/codeclash" element={<CodeClash />} />
          </Routes>
        </main>
      </div>
    </ConfigProvider>
  );
}

export default App;
