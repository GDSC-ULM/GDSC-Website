import React from "react";
import { Link } from "react-router-dom";
import { events } from "../logo/EventsData";
import EventCard from "./EventCard";
import "./Events.css";

function Events() {
  return (
    <div className="eventsPage">
      <h1>Events</h1>
      <div className="eventCardHolder">
        {events.map((event) => (
          <EventCard name={event.name} info={event.info} link={event.link} />
        ))}
      </div>
    </div>
  );
}

export default Events;
