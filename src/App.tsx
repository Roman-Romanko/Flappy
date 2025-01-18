import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { RegisterForm } from './pages/register-page/RegisterForm';

function App() {
  return (
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<RegisterForm />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
