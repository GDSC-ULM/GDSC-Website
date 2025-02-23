import React from "react";
import "./FlagshipEvents.css";
// import hawkathonLogo from "../assets/hawkathon.png";
// import techxpoLogo from "../assets/techxpo.png";
// import codeclashLogo from "../assets/codeclash.png";

const events = [
  {
    name: "Hawkathon",
    date: "March 15-17, 2025",
    nextDate: "September 20-22, 2025",
    description: "48-hour hackathon focused on solving real-world problems using Google technologies",
    color: "#4285F4", // Google Blue
    logo: "hawkathonLogo",
    tags: ["Hackathon", "Innovation", "48 Hours"]
  },
  {
    name: "TechXPO",
    date: "April 5, 2025",
    nextDate: "October 12, 2025",
    description: "Tech expo showcasing student projects and innovations with industry professionals",
    color: "#0F9D58", // Google Green
    logo: "techxpoLogo",
    tags: ["Exhibition", "Networking", "Projects"]
  },
  {
    name: "CodeClash",
    date: "May 1, 2025",
    nextDate: "November 8, 2025",
    description: "Competitive programming tournament with real-time challenges and mentorship",
    color: "#DB4437", // Google Red
    logo: "codeclashLogo",
    tags: ["Competition", "Coding", "Prizes"]
  }
];

function FlagshipEvents() {
  return (
    <div className="flagship-section">
      <h2 className="flagship-title">Flagship Events</h2>
      <div className="events-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-header" style={{ backgroundColor: `${event.color}15` }}>
              <img src={event.logo} alt={event.name} className="event-logo" />
              <h3 style={{ color: event.color }}>{event.name}</h3>
            </div>
            <div className="event-content">
              <div className="event-tags">
                {event.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="event-tag"
                    style={{ backgroundColor: `${event.color}15`, color: event.color }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="event-description">{event.description}</p>
              <div className="event-dates">
                <div className="date-item">
                  <span className="date-label">Next Event</span>
                  <span className="date-value">{event.date}</span>
                </div>
                <div className="date-item">
                  <span className="date-label">Following</span>
                  <span className="date-value">{event.nextDate}</span>
                </div>
              </div>
              <button className="event-button" style={{ backgroundColor: event.color }}>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlagshipEvents;