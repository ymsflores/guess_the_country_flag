import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import './App.css';

const StartScreen = () => {
  const navigate = useNavigate();
  const [selectedContinent, setSelectedContinent] = useState('');

  const handleContinentChange = (event) => {
    setSelectedContinent(event.target.value);
  };

  const isContinentSelected = selectedContinent !== '';
  
  const handlePlayClick = () => {
    navigate('/play');
    console.log('Clicked continent:', selectedContinent);
  };

  const handleLeaderboardClick = () => {
    navigate('/leaderboard');
  };

  const handleSignOutClick = () => {
    navigate('/login');
  };
  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2>Welcome, user</h2>
        <div className="input-group">
          <label htmlFor="continent">Select a continent</label>
          <br></br>
          <FormControl fullWidth>
            <InputLabel id="continent-label">Continent</InputLabel>
            <Select
                labelId="continent-label"
                id="continent"
                value={selectedContinent}
                label="Continent"
                onChange={handleContinentChange}
            >
                <MenuItem value="Africa">Africa</MenuItem>
                <MenuItem value="Asia">Asia</MenuItem>
                <MenuItem value="Europe">Europe</MenuItem>
                <MenuItem value="North America">North America</MenuItem>
                <MenuItem value="South America">South America</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
            </Select>
            </FormControl>
        </div>
        <button
          className={`sign-in-button ${!isContinentSelected ? 'disabled' : ''}`}
          disabled={!isContinentSelected}
          onClick={handlePlayClick}
        >
          Play
        </button>
        <div className="buttons">
          <button className="sign-in-button" style={{ width: '60%', margin: '20px 20px 0px 0px'}} onClick={handleLeaderboardClick}>Leaderboard</button>
          <button className="sign-in-button" style={{ width: '30%' }} onClick={handleSignOutClick}>Sign out</button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
