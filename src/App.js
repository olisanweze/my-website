import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Article from './components/Article';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Article />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
