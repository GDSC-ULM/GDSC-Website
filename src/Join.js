import React from "react";
import "./Join.css";

function Join() {
  return (
    <div className="joinPage">
      <h1>Become a member of GDSC</h1>
      <div className="joinCards">
        <div className="joinCard member">
          <h3>Become a Member</h3>
          <p>Perks of A Member</p>
          <ul>
            <li>Free Events</li>
            <li>Internship Oppurtinites</li>
            <li>Networking</li>
          </ul>
          <a
            href="https://gdsc.community.dev/the-university-of-louisiana-monroe/"
            target="_blank"
            rel="noreferrer"
          >
            <button>Join</button>
          </a>
        </div>
        <div className="joinCard team">
          <h3>Become a Core Team Member</h3>
          <p>Perks of A Core Team Member</p>
          <ul>
            <li>Leadership Expereince</li>
            <li>Internship Oppurtinites</li>
            <li>Networking</li>
          </ul>
          <a
            href="https://gdsc.community.dev/the-university-of-louisiana-monroe/"
            target="_blank"
            rel="noreferrer"
          >
            <button disabled>Apply</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Join;
