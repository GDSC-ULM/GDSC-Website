import React from "react";
import { Link } from "react-router-dom";
import "./Events.css";

function Events() {
  return (
    <div className="eventsPage">
      <h1>Events</h1>

      <div className="eventCard">
        <h3>Event Name</h3>
        <p>Event Description</p>
        <Link to="/eventPage">
          <button className="eventButton">View Event</button>
        </Link>
      </div>
    </div>
  );
}

export default Events;
