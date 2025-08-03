import React, { useEffect, useState } from "react";
import '@/styles/pages/_home.scss';
import profileImage from '@/assets/images/intro.png';

const Home = () => {
    
    useEffect(()=>{
        window.scrollTo(0, 0); //최조 진입 상단 고정
    }, []);
    return(
        <div className="wrapper">
            <div className="page page-home">
                {/* page-header */}
                <div className="page-body">
                    <div className="container">
                        <div className="container-inner">
                            <div className="container-body">
                                <IntroContent />
                            </div>
                        </div>
                    </div>
                </div>
                {/* page-footer */}
            </div>
        </div>
    );
}

const IntroContent = () => {
    return(
        <>
            <section className="section section--left">
                <img src={profileImage} alt="이미지 영역" />
            </section>
            <section className="section section--right">
                <div className="contents">
                    <div className="contents-body">
                        <h2 className="heading-lg">CHO YEJI</h2>
                        <div className="hr"></div>
                        <p className="ani-text">
                            Flexible  
                            {/* flexible 옆 글자 효과 */}
                            <span className="inHidden">
                                Publisher & FrontEnd Developer
                            </span>
                        </p>
                        <div className="scroll-down">
                            <span>Scroll</span>
                            <i className="arrow-down" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Home;