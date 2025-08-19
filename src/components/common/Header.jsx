import { useEffect, useState } from "react";
import { NavLink, useLocation } from 'react-router-dom'
import '@/styles/components/_header.scss'


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
      <div className="page-header">
        <header className={`header ${shoulHideHeader ? "no-header" : ""}`}>
            <h1> YEJI </h1>
            <nav className="gnb">
                {/* <NavLink to="/" className="active">HOME</NavLink> */}
                <NavLink to="/" end>HOME</NavLink>
                <NavLink to="/skill">SKILL</NavLink>
                <NavLink to="/project">PRJOECT</NavLink>
                <NavLink to="/portfolio">PORTFOLIO</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
            </nav>
        </header>  
      </div>
      
    );
}

export default Header;