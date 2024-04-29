import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import SignUpForm from './SignupForm'
import StartScreen from './StartScreen'
import PlayScreen from './PlayScreen';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<LoginForm />}></Route>
        <Route exact path="/register" element={<SignUpForm />}></Route>
        <Route exact path="/start" element={<StartScreen />}></Route>
        <Route exact path="/play" element={<PlayScreen />}></Route>
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
