import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DefaultLayout from './components/layouts/DefaultLayout';
import './styles/main.scss';
import './App.css'

//style
import './styles/main.scss'

function App() {
  return (
  <Router basename="/port-react">
    {/* <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    <Footer /> */}
    <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          {/* 다른 페이지도 여기 추가 */}
        </Route>
      </Routes>
  </Router>
  );
}

export default App
