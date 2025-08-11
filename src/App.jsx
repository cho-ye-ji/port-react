import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
// import DefaultLayout from './components/layouts/DefaultLayout';
import './styles/main.scss';
import './App.css'

//style
import './styles/main.scss'

function App() {
  return (
  <Router basename="/port-react">
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    <Footer />
  </Router>
  );
}

export default App
