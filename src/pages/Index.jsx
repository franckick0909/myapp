import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';

const Index = () => {
    return (
        <div>
            <Nav />
            <Sidebar />

            <section id='Home'>Home</section>
            <section id='About'>About</section>
            <section id='Projets'>Projets</section>
            <section id='Portfolio'>Portfolio</section>
            <section id='Contact'>Contact</section>
            
        </div>
    );
};

export default Index;