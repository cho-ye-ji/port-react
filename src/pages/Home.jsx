import React, { useState } from "react";
// import Modal from '../components/common/Modal'

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <main className="main" style={{ padding: '2rem' }}>
            <section id="intro">
                intro
            </section>
            <section id="skill">
                skill
            </section>
        </main>
    );
}
export default Home;