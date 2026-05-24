import '../css/Home.css'
import Header from '../components/Header'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

function Home(){
    return (
        <>
            <Header />
            <About />
            <Skills />
            <Projects />
            <Footer />
        </>
    );
}

export default Home;