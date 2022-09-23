import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <h2>{props.heading}</h2>
      {props.list ? (
        <ul className="card-list">
          <li>
            We Believe in <span style={{ color: "#4285F4" }}>G</span>
            <span style={{ color: "#DB4437" }}>R</span>
            <span style={{ color: "	#0F9D58" }}>O</span>
            <span style={{ color: "#F4B400" }}>W</span>
            <span style={{ color: "#DB4437" }}>T</span>
            <span style={{ color: "#4285F4" }}>H</span>
          </li>
          <li>
            We Believe in <span style={{ color: "#4285F4" }}>N</span>
            <span style={{ color: "#0F9D58" }}>E</span>
            <span style={{ color: "#DB4437" }}>T</span>
            <span style={{ color: "#4285F4" }}>W</span>
            <span style={{ color: "#0F9D58" }}>O</span>
            <span style={{ color: "#DB4437" }}>R</span>
            <span style={{ color: "#4285F4" }}>K</span>
            <span style={{ color: "#F4B400" }}>S</span>
          </li>
          <li>
            We Believe in <span style={{ color: "#4285F4" }}>C</span>
            <span style={{ color: "#F4B400" }}>A</span>
            <span style={{ color: "#DB4437" }}>R</span>
            <span style={{ color: "	#0F9D58" }}>E</span>
          </li>
        </ul>
      ) : (
        <div className="work-list">
          <ul className="second-list">
            <li>Machine Learning Study Jam</li>
            <li>Game Development Workshop</li>
            <li>NFT Minting Workshop</li>
          </ul>
          <ul className="second-list second">
            <li>Networking Events</li>
            <li>Let's Talk Internship</li>
            <li>Web Development Marathons</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Card;
