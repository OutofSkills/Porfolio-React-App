import About from './components/About';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Introduction />
      <Skills />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
