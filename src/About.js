import Card from "./HomePage/Card";
import React from "react";
import "./About.css";
import { datas } from "./logo/teamData";

function About() {
  return (
    <div className="aboutPage">
      <h1>Meet The Team</h1>
      <div className="teamImg">
        {datas.map((data) => (
          <a href={data.link} target="_blank" rel="noreferrer">
            <div className="perImg">
              <img src={data.img} alt="" />
              <div className="imgText">
                <p>{data.name}</p>
                <p>{data.role}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default About;
