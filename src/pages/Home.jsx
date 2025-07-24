import React, { useState } from "react";
// import Modal from '../components/common/Modal'

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <main style={{ padding: '2rem' }}>
        <h2>홈 화면</h2>
        <p>여기는 메인 홈입니다.</p>
        
      </main>
    );
}
export default Home;