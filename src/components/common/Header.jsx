import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import '@/styles/components/_header.scss'
import { useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    //특정 경로 헤더 숨김
    const hideHeaderRouts = ["./sub"];
    const shoulHideHeader = hideHeaderRouts.includes(location.pathname);

    //스크롤 이벤트
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const header = document.querySelector('.header');
          if (!header) return;
          if (window.scrollY > 10) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
    return(
        <header className={`header ${shoulHideHeader ? "no-header" : ""}`}>
            <h1> REACT PORTFOLIO </h1>
            <nav className="gnb">
                <Link to="/" className="active">INTRO</Link>
                <Link to="/">SKILL</Link>
                <Link to="/">PRJECT</Link>
                <Link to="/">PORTFOLIO</Link>
                <Link to="/">CONTACT</Link>
            </nav>
        </header>
    );
}

export default Header;