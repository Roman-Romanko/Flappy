import React from 'react';
import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { RegisterForm } from './pages/register-page/RegisterForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<RegisterForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
