import React from 'react';
import { Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import Animation from './Animation';
import './Hawkthon.css';

const { Title, Paragraph } = Typography;

const Hawkthon = () => {
  const navigate = useNavigate();

  return (
    <div className="hawkthon-page">
      <Animation />
      <div className="hawkthon-content">
        <Title level={1}>Hawkthon 2024</Title>
        <div className="hawkthon-description">
          <Paragraph>
            Welcome to Hawkthon 2024 - ULM's premier hackathon event where innovation meets opportunity!
            Join us for an exciting 24-hour coding challenge where you can showcase your skills,
            collaborate with fellow developers, and create impactful solutions.
          </Paragraph>
          
          <Title level={2}>Event Details</Title>
          <Paragraph>
            <ul>
              <li><strong>Date:</strong> Coming Soon</li>
              <li><strong>Location:</strong> University of Louisiana Monroe</li>
              <li><strong>Duration:</strong> 24 Hours</li>
              <li><strong>Team Size:</strong> 2-4 members</li>
            </ul>
          </Paragraph>

          <Title level={2}>Prizes</Title>
          <Paragraph>
            <ul>
              <li>1st Place: Coming Soon</li>
              <li>2nd Place: Coming Soon</li>
              <li>3rd Place: Coming Soon</li>
              <li>Best Rookie Team: Special Prize</li>
            </ul>
          </Paragraph>

          <Title level={2}>Why Participate?</Title>
          <Paragraph>
            <ul>
              <li>Gain hands-on experience with cutting-edge technologies</li>
              <li>Network with industry professionals and fellow developers</li>
              <li>Win exciting prizes and swag</li>
              <li>Free food and refreshments throughout the event</li>
              <li>Learn from workshops and mentoring sessions</li>
            </ul>
          </Paragraph>
        </div>

        <div className="action-buttons">
          <Button size="large" onClick={() => navigate('/events')}>
            Back to Events
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hawkthon; 