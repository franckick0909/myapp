import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';
import React from 'react';

const Index = () => {
    return (
        <div>
            <Nav />
            <Sidebar />

            <section id='Home'>
                <h1 style={{ fontSize: "4.375rem"}}>Home</h1>
            </section>
            
            <section id='About'>About</section>
            <section id='Projets'>Projets</section>
            <section id='Portfolio'>Portfolio</section>
            <section id='Contact'>Contact</section>
            
        </div>
    );
};

export default Index;