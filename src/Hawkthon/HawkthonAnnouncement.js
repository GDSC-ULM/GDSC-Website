import React from "react";
import "./HawkthonAnnouncement.css";
const HawkthonAnnouncement = () => {
  return (
    <div className="hawkthon-announcement">
      <section className="logo">
        <img
          className="hawk-logo"
          src="hawkthon-logo.jpeg"
          alt="Hawkthon Banner"
        />
        <header>
          <h1>ULM 2nd Annual Hawkthon</h1>
          <p>
            Organized by the Google Developer Student Club (GDSC) at the
            University of Louisiana Monroe (ULM), Hawkthon is an exciting
            hackathon event focused on providing innovative tech solutions for
            local businesses.
          </p>
        </header>
      </section>

      <section>
        <h2>Event Overview</h2>
        <ul>
          <li>
            <strong>Event Name:</strong> ULM 2nd Annual Hawkthon
          </li>
          <li>
            <strong>Date:</strong> April 11 – April 12
          </li>
          <li>
            <strong>Time:</strong> 10:00 AM – 3:00 PM (both days)
          </li>
          <li>
            <strong>Venues:</strong>
            <ul>
              <li>Day 1: Hemphill Hall (Kickoff and workshops)</li>
              <li>
                Day 2: The Hangar Hall (Presentations and prize distribution)
              </li>
            </ul>
          </li>
          <li>
            <strong>Theme:</strong> Supporting Local Businesses with Technology
          </li>
        </ul>
      </section>
      <section>
        <h2>Mission</h2>
        <p>
          This hackathon encourages students to develop tech solutions to help
          local businesses overcome challenges such as customer engagement,
          online presence, and operational management. Participants will gain
          real-world application development experience while networking with
          peers and local business owners.
        </p>
      </section>

      <section>
        <h2>Rules & Regulations</h2>
        <ul>
          <li>
            <strong>Team Size:</strong> 1-4 members per team
          </li>
          <li>
            <strong>Programming Language:</strong> Any language is allowed
          </li>
          <li>
            <strong>Project Development:</strong> Must be developed during the
            hackathon
          </li>
          <li>
            <strong>Submission Platform:</strong> Projects must be uploaded to
            GitHub for evaluation
          </li>
          <li>
            <strong>Mentorship:</strong> Mentors will provide guidance
          </li>
        </ul>
      </section>
      <section>
        <h2>Event Structure</h2>
        <h3>Day 1: Kickoff & Workshops</h3>
        <ul>
          <li>
            <strong>Introduction:</strong> Overview of theme, schedule, and
            tools
          </li>
          <li>
            <strong>Workshops:</strong> Beginner-friendly sessions on web
            development, UI/UX, and project management
          </li>
          <li>
            <strong>Team Formation:</strong> Form teams on-site or via our
            Discord server
          </li>
          <li>
            <strong>Project Development:</strong> Teams begin working with
            access to mentors
          </li>
          <li>
            <strong>Snacks & Refreshments:</strong> Snacks provided throughout
            the day
          </li>
        </ul>

        <h3>Day 2: Project Development, Presentations, & Networking</h3>
        <ul>
          <li>
            <strong>Project Development:</strong> Teams continue working on
            their projects
          </li>
          <li>
            <strong>Lunch:</strong> Pizza lunch for all participants
          </li>
          <li>
            <strong>Presentations & Judging:</strong> Teams present their
            solutions, followed by a judging session
          </li>
          <li>
            <strong>Networking & Raffle:</strong> Network with local business
            owners and sponsors
          </li>
          <li>
            <strong>Prize Distribution:</strong> Prizes awarded to the top three
            teams
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HawkthonAnnouncement;
