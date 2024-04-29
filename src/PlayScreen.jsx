import React, { useState, useEffect } from 'react';
import { Box, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ActionButton = styled(Button)({
    borderRadius: '4px', 
    border: '1px solid #ccc',
    color: '#333',
    backgroundColor: '#fff', 
    padding: '6px 12px', 
    margin: '0 8px', 
    textTransform: 'capitalize',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)', 
    '&:hover': {
      backgroundColor: '#f7f7f7', 
    },
  });

const Timer = styled(Box)({
  fontSize: '1.5rem',
  textAlign: 'center',
  fontWeight: 'bold'
});

const CountryName = styled(Box)({
  fontSize: '3rem',
  color: '#007bff',
  fontWeight: 'bold',
  textAlign: 'center',
});

const Accuracy = styled(Box)({
  fontSize: '1.5rem',
  textAlign: 'center',
  '& .number': {
    color: '#007bff',
  },
  '& .text': {
    color: 'black',
  },
});

const ProgressBar = styled(Box)(({ width }) => ({
  height: '10px',
  backgroundColor: '#007bff',
  width: `${width}%`,
  height: '30px',
  transition: 'width 1s ease-in-out',
}));

const Card = styled(Box)(({ selected }) => ({
  width: '150px',
  height: '80px',
  backgroundColor: selected ? 'white' : '#d1d5db',
  borderRadius: '8px',
  cursor: 'pointer',
}));

const CardContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '10px',
  padding: '20px',
  backgroundColor: 'white',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '4px',
  margin: '20px 0',
});

const PlayScreen = () => {  
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(300); // 5 mins in seconds
  const [selectedCards, setSelectedCards] = useState(Array(25).fill(false));

  const handleRetry = () => {
    window.location.reload();
  };

  const handleQuit = () => {
    navigate('/start');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleCardClick = (index) => {
    const newSelectedCards = [...selectedCards];
    newSelectedCards[index] = !newSelectedCards[index];
    setSelectedCards(newSelectedCards);
  };

  const progressBarWidth = (timeLeft / 300) * 100;

  return (
    <Box sx={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
        <ActionButton onClick={handleRetry}>retry</ActionButton>
        <ActionButton onClick={handleQuit}>quit</ActionButton>
      </Box>

      <Timer>{Math.floor(timeLeft / 60).toString().padStart(2, '0')}:{(timeLeft % 60).toString().padStart(2, '0')}</Timer>
      <CountryName>Country name</CountryName>
      <Accuracy><span className="number">0%</span> <span className="text">accuracy</span></Accuracy>

      <CardContainer>
        {selectedCards.map((selected, index) => (
          <Card key={index} selected={selected} onClick={() => handleCardClick(index)} />
        ))}
      </CardContainer>
      <ProgressBar width={progressBarWidth} sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
    </Box>
  );
};

export default PlayScreen;
