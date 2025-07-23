import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import NotFound from '../pages/NotFound';
import Header from '../components/common/Header';
import SubPage from "../pages/SubPage";
// import Footer from '../components/layout/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/sub" element={<SubPage />} />
        {/* sub가 아닌 헤더를 사용하지 않는 페이지 이름 적합한거 고려 */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;