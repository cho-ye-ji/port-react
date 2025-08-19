import React, { useEffect, useState } from "react";
import '@/styles/pages/_home.scss';
import profileImage from '@/assets/images/intro.png';

import { Outlet } from "react-router-dom";

const Home = () => {
    useEffect( () => {
        window.scrollTo(0, 0); //최조 진입 상단 고정
    }, []);
    return(
        <div className="content">
            <div className="content-inner">
            <div className="content-body">
                <section className="section section--left">
                    <img src={profileImage} alt="이미지 영역" />
                </section>
                <section className="section section--right">
                    <div className="section__inner section__inner-home">
                        <Outlet />
                    </div>
                </section>
            </div>
            </div>
        </div>
    );
}

export default Home;