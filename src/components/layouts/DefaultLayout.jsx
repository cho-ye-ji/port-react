import Header from '@/components/common/Header';
// import Footer from '@/components/common/Footer';
import Wrapper from '../common/Wapper';

import '../../styles/layout/_layout.scss'; 
// 레이아웃 관련 스타일

function DefaultLayout({ children }){
    return(
       <>
        <Header />
        <main className="main">
            <Wrapper>
             {children}
            </Wrapper>
        </main>
        </>
    );
}

export default DefaultLayout;