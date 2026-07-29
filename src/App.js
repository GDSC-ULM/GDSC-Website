import React from "react";
import { Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import About from "./About";
import "./App.css";
import Home from "./HomePage/Home";
import NavBar from "./NavBar";
import AnnouncementBar from "./components/AnnouncementBar";
import Join from "./Join";
import Events from "./EventsPage/Events";
import Hawkthon from "./HomePage/Hawkthon";

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
        <AnnouncementBar />
        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/join" element={<Join />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/hawkathon" element={<Hawkthon />} />
          </Routes>
        </main>
      </div>
    </ConfigProvider>
  );
}

export default App;
