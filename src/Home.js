import React from "react";
import Animation from "./Animation";
import "./Home.css";

function Home() {
  return (
    <div className="landingPage">
      <Animation/>
      <div className="homePage">
        <h1>Google Developer Students Club @ ULM</h1>
        <p>
          The Google Developers Student Club at ULM is program powered by Google
          for tech aspiring university students to learn new skills and
          technologies and gain real time experience.
        </p>
      </div>
      <div className="infoPage"></div>
    </div>
  );
}

export default Home;
