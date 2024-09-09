import React from 'react';
import '../index.css'; // Import the CSS file

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Welcome to JourneyBazaar Dashboard</h1>
      <p>Your ultimate destination for managing all your travel plans efficiently.</p>

      <div className="dashboard-content">
        <section className="dashboard-section">
          <h2>Upcoming Tours</h2>
          <p>Explore your upcoming adventures. Review details, make changes, or add new experiences to your itinerary.</p>
          <button>View My Tours</button>
        </section>

        <section className="dashboard-section">
          <h2>Travel History</h2>
          <p>Look back at the incredible journeys you've taken with JourneyBazaar. Relive the memories and share your experiences with others.</p>
          <button>View Travel History</button>
        </section>

        <section className="dashboard-section">
          <h2>Exclusive Offers</h2>
          <p>As a valued member, you get access to exclusive deals and discounts on your next adventure. Don't miss out!</p>
          <button>Explore Offers</button>
        </section>

        <section className="dashboard-section">
          <h2>Account Settings</h2>
          <p>Manage your personal information, payment methods, and notification preferences to make your next journey even smoother.</p>
          <button>Manage Settings</button>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
