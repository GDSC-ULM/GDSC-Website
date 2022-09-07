import React from "react";
import LandingPage from "./LandingPage";
import ScrollPage from "./ScrollPage";
import Animation from "./Animation";

function Home() {
  return (
    <div className="homePage">
      <Animation />
      <LandingPage />
      <ScrollPage />
    </div>
  );
}

export default Home;
