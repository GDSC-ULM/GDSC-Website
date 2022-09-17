import Card from "./HomePage/Card";
import React from "react";
import "./About.css";
import img1 from "./logo/my-img.jpeg";
import { datas } from "./logo/teamData";

function About() {
  return (
    <div className="aboutPage">
      <h1>Meet The Team</h1>
      <div className="teamImg">
        {datas.map((data) => (
          <div className="perImg">
            <img src={img1} alt="" />
            <div className="imgText">
              <p>{data.name}</p>
              <p>{data.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
