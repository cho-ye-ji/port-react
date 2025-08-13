import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { Outlet } from 'react-router-dom';

import '../../styles/layout/_layout.scss'; 
// 레이아웃 관련 스타일

function DefaultLayout(){
    return(
       <>
        <div className="page">
            <Header />
            <main className="page-body">   
            {/* 그리드 중간 행 1fr */}
            <Outlet />     
            {/* 각 페이지의 본문이 여기에 렌더 */}
            </main>
            <Footer />
        </div>
        </>
    );
}

export default DefaultLayout;