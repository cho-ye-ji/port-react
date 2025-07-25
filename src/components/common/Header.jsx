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

    useEffect(()=>{
        const handleScroll = () =>{
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    return(
        <header className={`header ${shoulHideHeader ? "hide" : ""}`}>
            <h1> 조예지 포트폴리오 </h1>
            <nav>
                <Link to="/">홈</Link>
            </nav>
        </header>
    );
}

export default Header;