import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './pages/Home';
import './styles/main.scss';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//style
import './styles/main.scss'

function App() {
  return (
  <Router basename="/port-react">
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      {/* 다른 페이지 추가 / 홈 및 헤*/}
    </Routes>
  </Router>
  );
}

export default App
