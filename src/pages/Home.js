import React from 'react'
import { useState } from 'react';
import Tours from '../components/Tours';
import data from '../Data';
const Home = () => {
  const [tours, setTours] = useState(data);
  const removeTour = (id) => {
    setTours(tours.filter(tour => tour.id !== id));
  };

  // Function to refresh the tours list
  const refreshTours = () => {
    setTours(data);
  };
  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h1>No tours left</h1>
        <button className="btn-white" onClick={refreshTours}>Refresh</button>
      </div>
    );
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  )
}

export default Home