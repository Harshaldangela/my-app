import React, { useState } from 'react';
import data from './Data'
import Tours from './components/Tours';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import './index.css';



const App=()=> {
  const [tours, setTours] = useState(data)

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length===0){
    return(
      <div className="refresh">
        <h1>No tours left</h1>
        <button className='btn-white' onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  );
}

export default App;
